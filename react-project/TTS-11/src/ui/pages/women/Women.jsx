import React, { useEffect, useState } from "react";
import HeaderCom from "../../components/HeaderCom";
import FooterCom from "../../components/FooterCom";
import Data from "../../../utils/shoseData.json";
import CardCom from "../../components/CardCom";

export default function Women() {
  const [shoesData, setshoesData] = useState([]);
  useEffect(() => {
    let filterData = Data?.filter?.((e) => e?.gender === "WOMEN");
    setshoesData(filterData);
  }, []);
  return (
    <>
      <HeaderCom />
      <div
        className=" d-flex flex-wrap "
        style={{
          padding: "10px",
          gap: "10px",
        }}
      >
        {shoesData?.map?.((e) => {
          return <CardCom data={e} />;
        })}
      </div>
      <FooterCom />
    </>
  );
}
