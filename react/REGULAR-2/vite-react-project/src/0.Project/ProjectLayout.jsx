import React from "react";
import { Breadcrumb, Carousel, Layout, Menu, theme } from "antd";
import SliderCom from "./SliderCom";
const { Header, Content, Footer } = Layout;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

let nav = ["Home", "About", "Help"];
const ProjectLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={nav.map((e, index) => {
            const key = index + 1;
            return {
              key,
              label: ` ${e}`,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: "16px 0",
          }}
          items={[
            { title: "Home" },
            { title: "Category" },
            { title: "Subcategory" },
          ]}
        /> */}

        {/* <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        > */}
        <SliderCom />
        {/* </div> */}
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default ProjectLayout;
