import React from "react";
import Card from "./card";

export default function MapFun_key_2() {
  let name = ["uv", "js", "kd"];

  // let data = [
  //   { cityname: "surat", stateName: "Gujrat", population: 123 },
  //   { cityname: "delhi", stateName: "delhi", population: 123 },
  // ];

  return (
    <>
      {name.map((e, i) => {
        return <Card key={i} name={e} />;
      })}
    </>
  );
}
