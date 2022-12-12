import { Row, Col, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

function Header() {

  const { Header } = Layout;


  return (
    <Header style={{backgroundColor: "#7c1f1f"}}>
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
              REACT ESEO
            </a>
          </Link>
        </Col>
        <Col>
          <Link href="/account">
            <UserOutlined />
          </Link>
          <Link href="/login">
            <a style={{ color: "white", marginLeft: "12px" }}>Se connecter</a>
          </Link>
          <Link href="/signup">
            <a style={{ color: "grey", marginLeft: "12px" }}>S'inscrire</a>
          </Link>
        </Col>
      </Row>
    </Header>
  );
};

export default Header;
