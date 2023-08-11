import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import NavBar from "../../components/NavBar";
import FooterCom from "../../components/FooterCom";
import CardCom from "../../components/CardCom";
const { Content } = Layout;
import Data from "./homeCard.json";

const Home = () => {
  let [cardData, setCardData] = useState(Data);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <NavBar />
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="d-flex flex-wrap">
          {cardData?.map?.((e, i) => {
            return <CardCom key={i} data={e} />;
          })}
        </div>
      </Content>
      <FooterCom />
    </Layout>
  );
};
export default Home;
