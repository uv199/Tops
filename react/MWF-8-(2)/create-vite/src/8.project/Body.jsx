import React, { useState } from "react";
import Card from "./Card";
import PoplationData from "./data.json";

export default function Body() {
  let [data, setData] = useState(PoplationData);
  console.log("-----------  data----------->", data);
  return (
    <div className="row body_div">
      {data?.map((e) => {
        return (
          <div className="col">
            <Card details={e} />
          </div>
        );
      })}
    </div>
  );
}
