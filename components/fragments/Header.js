import { Row, Col, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { async } from "@firebase/util";
import { firebaseConfig } from "../../config/firebase";
import React, { useEffect, useState } from "react";

const firebaseApp = initializeApp(firebaseConfig);

function Header() {

  const { Header } = Layout;
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const [state, setState] = useState(false);


  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setState(true)
      } else {
        setState(false)
      }
    });
  }, []);

  return (
    <Header style={{backgroundColor: "#145369",  position: "fixed", top: "0", width: "100%", zIndex: 10}}>
      <Row justify="space-between" style={{ color: "white" }}>
        <Col>
          <Link href="/">
            <a
              style={{
                color: "white",
                fontFamily: "revert-layer",
                fontSize: "20px",
              }}
            >
              Weather Forecast
            </a>
          </Link>
        </Col>

        {state ? (
                  <Col>
          <Link href="/account">
            <UserOutlined />
          </Link>
          </Col>
        ) : (
        <Col>
          <Link href="/login">
            <a style={{ color: "white", marginLeft: "12px" }}>Se connecter</a>
          </Link>
          <Link href="/signup">
            <a style={{ color: "grey", marginLeft: "12px" }}>S'inscrire</a>
          </Link>
        </Col>
        )}
      </Row>
    </Header>
  );
};

export default Header;
