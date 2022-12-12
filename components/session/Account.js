import React, { useEffect, useState } from "react";
import Router from "next/router";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { async } from "@firebase/util";
import { firebaseConfig } from "../../config/firebase";
import Header from "../fragments/Header";
import { Layout, Row, Typography, Col, Button, message, Card } from "antd";

const firebaseApp = initializeApp(firebaseConfig);
const { Content } = Layout;
const { Title } = Typography;

const Account = () => {
  /** AUTHENTIFICATION */
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const [state, setState] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        console.log("-------- USER id");
        console.log(uid);

        const docSnap = await getDoc(doc(db, "users", uid));

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setState(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        Router.push("/login");
      }
    });
  }, []);

  const logout = async () => {
    signOut(auth)
      .then(() => {
        message.info("Vous êtes bien déconnecté");
      })
      .catch((err) => {
        message.error("Une erreur s'est produite : " + err.message);
      });
  };

  return (
    <Layout>
      <Header/>
      <Content>
        <Row>
          <Col
            xs={{ span: 20, offset: 2 }}
            md={{ span: 12, offset: 6 }}
            lg={{ span: 8, offset: 8 }}
          >
            <Card
              style={{
                width: 400,
                margin: "40px",
                borderRadius: "15px",
                overflow: "hidden",
                borderColor: "#7c1f1f",
                borderWidth: "3px",
              }}
            >
              <Typography
                style={{
                  borderRadius: 8,
                  marginTop: "6vh",
                  marginBottom: 64,
                  textAlign: "center",
                }}
              >
                <Title level={1} style={{ fontSize: 32, marginBottom: 32 }}>
                  Information du compte
                </Title>
                <p> Bonjour {state.firstName} {state.name}</p>
                <p> Votre e-mail est : {state.email}</p>
              </Typography>
              <Typography
              style={{
                textAlign: "center",
              }}
            >
              <Button style={{
                        width: 300,
                        backgroundColor: "#7c1f1f",
                        color: "white",
                        borderColor: "#7c1f1f"
                      }}onClick={logout}>Déconnexion</Button>
            </Typography>
            </Card>


          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Account;
