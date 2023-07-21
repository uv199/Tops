import React from "react";
import Card from "./Card";

let data = [
  {
    name: "Urvish",
    dec: "he is teacher",
  },
  {
    name: "banti",
    dec: "student",
  },
  {
    name: "tejash",
    dec: "vella",
  },
];

export default function Map() {
  return (
    <>
      {data.map((e) => {
        return <Card name={e.name} dec={e.dec} />;
      })}
    </>
  );
}
