import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Data from "../../utils/homeCard.json";
import CardCom from "../../components/CardCom";

export default function Women() {
  let [filterData, setFilterData] = useState(Data);
  let [searchText, setSearchText] = useState("");
  useEffect(() => {
    const data = Data.filter((e) => {
      return (
        e?.gender === "WOMEN" &&
        e?.name?.toLowerCase?.()?.includes(searchText?.toLowerCase?.())
      );
    });
    setFilterData(data);
  }, [searchText]);

  return (
    <>
      <NavBar setSearchText={setSearchText} />
      <div className="d-flex flex-wrap" style={{ width: "100vw" }}>
        {filterData.map((e) => {
          return <CardCom data={e} />;
        })}
      </div>
    </>
  );
}
