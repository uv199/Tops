import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import NavBar from "../../components/NavBar";
import FooterCom from "../../components/FooterCom";
import CardCom from "../../components/CardCom";
const { Content } = Layout;
import Data from "./homeCard.json";
import Slider from "./Slider";

const Home = () => {
  let [filterData, setfilterData] = useState(Data);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    let data = Data.filter((e) => {
      return e?.name?.toLowerCase?.()?.includes?.(searchText?.toLowerCase?.());
    });
    setfilterData(data);
  }, [searchText]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <NavBar setSearchText={setSearchText} />
      <Content>
        <div className="d-flex flex-wrap" style={{ width: "100vw" }}>
          {/* <Slider /> */}
          {filterData?.map?.((e, i) => {
            return <CardCom key={i} data={e} />;
          })}
        </div>
      </Content>
    </Layout>
  );
};
export default Home;
