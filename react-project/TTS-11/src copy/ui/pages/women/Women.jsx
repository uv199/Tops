import React, { useEffect, useState } from "react";
import HeaderCom from "../../components/HeaderCom";
import FooterCom from "../../components/FooterCom";
import Data from "../../../utils/shoseData.json";
import CardCom from "../../components/CardCom";
import fs from "fs";

export default function Women({ searchTxt }) {
  const [shoesData, setshoesData] = useState([]);
  useEffect(() => {
    let filterData = Data?.filter?.((e) => {
      return (
        e?.gender === "WOMEN" &&
        e?.name?.toLowerCase?.()?.includes(searchTxt.toLowerCase())
      );
    });

    setshoesData(filterData);
  }, [searchTxt]);

  return (
    <>
      <HeaderCom searchBarShow={true} />
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
