import React, { useEffect, useState } from "react";
import CardCom from "../../components/CardCom";
import ShoseData from "../../../utils/shose.json";

export default function HomeContetnt(props) {
  const [Data, setData] = useState(ShoseData);
  useEffect(() => {
    let filteredData = ShoseData.filter((e) => {
      return (
        e?.gender === "WOMEN" &&
        e?.name?.toLowerCase?.()?.includes?.(props?.searchText?.toLowerCase?.())
      );
    });
    setData(filteredData);
  }, [props?.searchText]);
  return (
    <>
      <div className=" ms-auto d-flex flex-wrap justify-  ">
        {Data?.map?.((e) => {
          return <CardCom data={e} />;
        })}
      </div>
    </>
  );
}
