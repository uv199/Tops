import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import ApiCom from "../8.API/ApiCom";
import MultipleInputCom from "../6.Input/MultipleInputCom";
import UpdateCom from "../6.Input/UpdateCom";
const { Header, Content, Footer } = Layout;
const data = ["Home", "About", "Contact", "Help"];

const LayoutCom = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={["Home", "About", "Contact", "Help"].map((e, index) => {
            const key = index + 1;
            return {
              key,
              label: `${e}`,
            };
          })}
        />
      </Header>
      {/* <Header
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={data.map((e, index) => {
            const key = index + 1;
            return {
              key,
              label: `${e}`,
            };
          })}
        />
      </Header> */}
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <ApiCom />
          <div className="d-flex">
            <MultipleInputCom />
            <UpdateCom />
          </div>
        </div>
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
export default LayoutCom;
