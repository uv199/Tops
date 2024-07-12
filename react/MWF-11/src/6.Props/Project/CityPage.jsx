import React from "react";

import CityData from "../../../../../JS-assignment/data.json";
import CardCom from "./CardCom";

export default function CityPage() {
  console.log("-----------  CityData----------->", CityData);
  return (
    <div className="grid grid-cols-4 gap-2 p-5">
      {CityData.map((e, i) => {
        return <CardCom cityData={e} index={i} />;
      })}
    </div>
  );
}
