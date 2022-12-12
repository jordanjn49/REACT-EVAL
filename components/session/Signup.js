import React, { useState } from "react";
import Link from "next/link";
import "firebase/auth";
import Header from "../fragments/Header";
import Router from "next/router";
import { async } from "@firebase/util";

import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
  message,
  Card,
} from "antd";

import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

import { firebaseConfig } from "../../config/firebase";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp(firebaseConfig);

const SignUp = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  
  /** AUTHENTIFICATION */
  const auth = getAuth(firebaseApp);

  /** FIRESTORE */
  const db = getFirestore(firebaseApp);

  const [state, setState] = useState({});
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, state.email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          ...state, // ... for copying
          createdAt: serverTimestamp(), // Concatenate two variables into one (state, dateOfCreation)
        });


        setLoading(false);
        message.success("Compte créé!");
        Router.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        message.error("ERR " + error.message);
      });
  };

  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>

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
                  Inscription
                </Title>

                <Form onFinish={handleSubmit} className="login-form">
                  <Form.Item name="Nom">
                    <Input
                      prefix={<UserOutlined />}
                      type="text"
                      size="large"
                      name="name"
                      placeholder=" Votre nom"
                      onChange={(e) =>
                        setState({ ...state, [e.target.name]: e.target.value })
                      }
                    />
                  </Form.Item>
                  <Form.Item name="Prénom">
                    <Input
                      prefix={<UserOutlined />}
                      type="text"
                      size="large"
                      name="firstName"
                      placeholder=" Votre prénom"
                      onChange={(e) =>
                        setState({ ...state, [e.target.name]: e.target.value })
                      }
                    />
                  </Form.Item>
                  <Form.Item name="Votre Email" rules={[{ required: true }]}>
                    <Input
                      prefix={<MailOutlined />}
                      type="email"
                      size="large"
                      name="email"
                      placeholder=" Votre Email"
                      onChange={(e) =>
                        setState({ ...state, [e.target.name]: e.target.value })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="Votre Mot de passe"
                    rules={[{ required: true }]}
                  >
                    <Input
                      prefix={<LockOutlined />}
                      size="large"
                      type="password"
                      placeholder=" Votre Mot de passe"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Item>

                  <Button
                    type="link"
                    style={{
                      fontSize: 11,
                      position: "relative",
                      top: -25,
                      right: -105,
                    }}
                    className="login-form-forgot"
                  ></Button>

                  <Form.Item>
                    <Button
                      shape="round"
                      type="primary"
                      style={{
                        width: 300,
                        backgroundColor: "#7c1f1f",
                        borderColor: "#7c1f1f"
                      }}
                      htmlType="submit"
                      className="login-form-button"
                      
                    >
                      {loading ? <LoadingOutlined /> : null}
                      S'inscrire
                    </Button>
                  </Form.Item>
                </Form>
              </Typography>
            </Card>

            <Card
              style={{
                width: 300,
                margin: "40px",
                marginLeft: "90px",
                borderRadius: "15px",
                overflow: "hidden",
                borderColor: "#7c1f1f",
                borderWidth: "3px",
              }}
            >
              <Typography
                style={{
                  textAlign: "center",
                }}
              >
                <Title level={4} style={{ fontWeight: 500, fontSize: 18 }}>
                  Déjà un compte ?
                </Title>

                <Link style={{ color: "#7c1f1f" }} href="/login">Se connecter</Link>
              </Typography>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SignUp;
