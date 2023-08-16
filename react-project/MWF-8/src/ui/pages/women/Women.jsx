import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import HeaderCom from "../../components/HeaderCom";
import FooterCom from "../../components/FooterCom";
import CardCom from "../../components/CardCom";
import WomenContetnt from "./WomenContetnt";
const { Header, Content, Footer } = Layout;
const Women = () => {
  const [searchText, setSearchText] = useState("");

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log("-------", searchText);
  return (
    <Layout className="layout">
      <HeaderCom setSearchText={setSearchText} />
      <Content>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <WomenContetnt searchText={searchText} />
        </div>
      </Content>

      <FooterCom />
    </Layout>
  );
};
export default Women;
