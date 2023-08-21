// import modules
import React from "react";
import { Layout, theme } from "antd";

// import files
import HeaderCom from "../../components/HeaderCom";
import FooterCom from "../../components/FooterCom";
import WomenContetnt from "./WomenContetnt";

const Women = () => {
  // useStates --->

  const {
    token: { colorBgContainer },
  } = theme.useTosken();
  return (
    <Layout className="layout">
      <HeaderCom />
      <WomenContetnt />
      <FooterCom />
    </Layout>
  );
};
export default Women;
