import React, { useContext, useEffect, useState } from "react";
import CardCom from "../../components/CardCom";
import ShoseData from "../../../utils/shose.json";

import { SearchContext } from "../../../App";

export default function HomeContetnt() {
  // const searchCon = useContext(SearchContext);
  const { searchText } = useContext(SearchContext);
  const [Data, setData] = useState(ShoseData);
  useEffect(() => {
    let filteredData = ShoseData.filter((e) => {
      return e?.name?.toLowerCase?.()?.includes?.(searchText?.toLowerCase?.());
    });
    setData(filteredData);
  }, [searchText]);
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
