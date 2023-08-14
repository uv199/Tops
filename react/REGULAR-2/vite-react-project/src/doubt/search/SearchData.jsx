import React, { useEffect, useState } from "react";
import AllData from "./homeCard.json";
import CardCom from "./CardCom";

export default function SearchData() {
  let [Data, SetData] = useState(AllData);
  let [searchText, SetSearchText] = useState("");
  useEffect(() => {
    let filterdData = AllData.filter((e) => {
      return  e.name.toLowerCase().includes(searchText.toLowerCase());
    });
    SetData(filterdData);
  }, [searchText]);

  return (
    <>
      <input type="text" onChange={(e) => SetSearchText(e?.target?.value)} />
      <div className="d-flex flex-wrap">
        {Data.map((e, i) => {
          return <CardCom key={i} data={e} />;
        })}
      </div>
    </>
  );
}
