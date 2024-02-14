import React, { useState } from "react";
import Card from "./Card";
import PoplationData from "./data.json";

export default function Body() {
  let [data, setData] = useState(PoplationData);
  console.log("-----------  data----------->", data);
  return (
    <div className="d-flex justify-content-start align-content-center row body_div">
      {data?.map((e) => {
        return (
          <div className="col-3">
            <Card details={e} />
          </div>
        );
      })}
    </div>
  );
}
