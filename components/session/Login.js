import React, { useState } from "react";
import Link from "next/link";
import Header from "../fragments/Header";
import "firebase/auth";
import Router from "next/router";
import Footer from "../fragments/Footer";


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

import { MailOutlined, LockOutlined, LoadingOutlined } from "@ant-design/icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../config/firebase";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp(firebaseConfig);

const Login = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setLoading(false);
        const user = userCredential.user;
        console.log(user);
        message.success("Vous êtes reconnu!");
        Router.push("/account")
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        message.error("Mauvais identifiants / mot-de-passe!");
      });
  };

  const onMailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Layout className="layout" style={{ minHeight: "100vh", padding: "80px 0" }}>
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
                borderColor: "black",
                borderWidth: "3px"
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
                  Connexion
                </Title>

                <Form onFinish={handleSubmit} className="login-form">
                  <Form.Item name="Votre Email" rules={[{ required: true }]}>
                    <Input
                      prefix={<MailOutlined />}
                      type="email"
                      size="large"
                      placeholder=" Votre Email"
                      onChange={onMailChange}
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
                      onChange={onPasswordChange}
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
                      htmlType="submit"
                      className="login-form-button"
                      size="large"
                      style={{backgroundColor:"black",
                    borderColor:"whitesmoke"}}
                    >
                      {loading ? <LoadingOutlined /> : null}
                      Se connecter
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
                borderColor: "black",
                borderWidth: "3px"
              }}
            >
              <Typography
                style={{
                  textAlign: "center",
                }}
              >
                <Title level={4} style={{ fontWeight: 500, fontSize: 18 }}>
                  Nouveau sur la plateforme ?
                </Title>
                <Link href="/signup">S'inscrire</Link>
              </Typography>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer/>
    </Layout>
  );
};

export default Login;
