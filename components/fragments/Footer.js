import { Layout } from "antd";

function Footer() {

  const { Footer } = Layout;


  return (
    <Footer style={{backgroundColor: "#145369", textAlign: 'center'}}>
      <span style={{color: "white", height: '5px'}}>Copyright © Jordan JOUIN & Killian TROIS</span>
    </Footer>
  );
};

export default Footer;
