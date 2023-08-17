import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import shoseData from "../../../utils/shoseData.json";

import HeaderCom from "../../components/HeaderCom";
import FooterCom from "../../components/FooterCom";
import CardCom from "../../components/CardCom";
const HomeCom = (props) => {
  let [data, setData] = useState(shoseData);
  let [topFive, setTopFive] = useState([]);

  useEffect(() => {
    if (props.searchTxt.length > 0) {
      console.log("----->----");
      let filterdData = shoseData.filter((e) => {
        return e?.name
          ?.toLowerCase?.()
          ?.includes?.(props?.searchTxt?.toLowerCase?.());
      });
      setData(filterdData);
    } else {
      setData(shoseData);
    }
  }, [props?.searchTxt]);

  useEffect(() => {
    shoseData.sort((a, b) => b.rating - a.rating);
    setTopFive(shoseData.slice(0, 5));
  }, []);
  return (
    <Layout className="layout">
      <HeaderCom searchBarShow={false} />

      <div
        className=" d-flex flex-wrap "
        style={{
          padding: "10px",
          gap: "10px",
        }}
      >
        <h1>top five</h1>
        {topFive?.map?.((e, i) => {
          return <CardCom key={i} data={e} />;
        })}
        {data?.map?.((e, i) => {
          return <CardCom key={i} data={e} />;
        })}
      </div>
      <FooterCom />
    </Layout>
  );
};
export default HomeCom;
