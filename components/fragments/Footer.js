import { Layout } from "antd";

function Footer() {

  const { Footer } = Layout;


  return (
    <Footer style={{backgroundColor: "#145369", textAlign: 'center', position: "fixed", bottom: "0", width: "100%"}}>
      <span style={{color: "white", height: '5px'}}>Copyright © Jordan JOUIN & Kilian TROIS</span>
    </Footer>
  );
};

export default Footer;
