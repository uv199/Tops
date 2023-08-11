import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import HeaderCom from "../../components/HeaderCom";
import FooterCom from "../../components/FooterCom";
import CardCom from "../../components/CardCom";
import HomeContetnt from "./HomeContetnt";
const { Header, Content, Footer } = Layout;
const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <HeaderCom />

      <Content>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <HomeContetnt />
        </div>
      </Content>

      <FooterCom />
    </Layout>
  );
};
export default Home;
