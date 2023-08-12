import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Content, Footer } = Layout;
import shoseData from "../../../utils/shoseData.json";

import HeaderCom from "../../components/HeaderCom";
import FooterCom from "../../components/FooterCom";
import CardCom from "../../components/CardCom";
const HomeCom = () => {
  let [data, setData] = useState(shoseData);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("setSearchText", searchText);
    let filterdData = shoseData.filter((e) => {
      return e?.name?.toLowerCase?.()?.includes?.(searchText?.toLowerCase?.());
    });
    setData(filterdData);
  }, [searchText]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <HeaderCom setSearchText={setSearchText} />
      <Content>
        <div
          className=" d-flex flex-wrap "
          style={{
            padding: "10px",
            gap: "10px",
            background: colorBgContainer,
          }}
        >
          {data?.map?.((e) => {
            return <CardCom data={e} />;
          })}
        </div>
      </Content>
      <FooterCom />
    </Layout>
  );
};
export default HomeCom;
