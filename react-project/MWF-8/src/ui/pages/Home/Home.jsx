import React, { useState } from "react";
import { Breadcrumb, Layout } from "antd";
import HeaderCom from "../../components/HeaderCom";
import FooterCom from "../../components/FooterCom";
import HomeContetnt from "./HomeContetnt";
const Home = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <Layout className="layout">
      <HeaderCom setSearchText={setSearchText} />
      <HomeContetnt searchText={searchText} />
      <FooterCom />
    </Layout>
  );
};
export default Home;
