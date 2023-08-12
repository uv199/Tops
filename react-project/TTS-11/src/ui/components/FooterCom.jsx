import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
export default function FooterCom() {
  return (
    <>
      <div>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </div>
    </>
  );
}
