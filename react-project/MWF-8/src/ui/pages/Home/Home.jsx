import React, { useState } from "react";
import { Breadcrumb, Layout } from "antd";
import HeaderCom from "../../components/HeaderCom";
import FooterCom from "../../components/FooterCom";
import HomeContetnt from "./HomeContetnt";
const Home = () => {
  return (
    <Layout className="layout">
      <HeaderCom />
      <HomeContetnt />
      <FooterCom />
    </Layout>
  );
};
export default Home;
