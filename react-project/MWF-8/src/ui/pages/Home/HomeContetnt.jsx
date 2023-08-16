import React, { useEffect, useState } from "react";
import CardCom from "../../components/CardCom";
import ShoseData from "../../../utils/shose.json";

export default function HomeContetnt(props) {
  const [Data, setData] = useState(ShoseData);
  useEffect(() => {
    let filteredData = ShoseData.filter((e) => {
      return e?.name
        ?.toLowerCase?.()
        ?.includes?.(props?.searchText?.toLowerCase?.());
    });
    setData(filteredData);
  }, [props?.searchText]);
  return (
    <>
      <div
        className="site-layout-content ms-auto d-flex flex-wrap "
        style={{
          gap: "10px",
        }}
      >
        {Data?.map?.((e) => {
          return <CardCom data={e} />;
        })}
      </div>
    </>
  );
}
