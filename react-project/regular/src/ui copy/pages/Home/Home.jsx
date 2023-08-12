import React, { useContext, useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import NavBar from "../../components/NavBar";
import FooterCom from "../../components/FooterCom";
import CardCom from "../../components/CardCom";
const { Content } = Layout;
import Data from "../../utils/homeCard.json"; // to get data from json file
import Slider from "./Slider";
import { Searchcontext } from "../../../App";

const Home = () => {
  let [filterData, setfilterData] = useState(Data); // copy all data in state
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    let data = Data.filter((e) => {
      return e?.name?.toLowerCase?.()?.includes?.(searchText?.toLowerCase?.());
    });
    setfilterData(data); // copy filtered data
  }, [searchText]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <NavBar setSearchText={setSearchText} />
      <Content>
        <Slider />
        <div className="d-flex flex-wrap" style={{ width: "100vw" }}>
          {filterData?.map?.((e, i) => {
            return <CardCom key={i} data={e} />;
          })}
        </div>
      </Content>
    </Layout>
  );
};
export default Home;
