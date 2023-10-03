import React from "react";
import { useParams } from "react-router-dom";

export default function BikeService() {
  const data = useParams();
  console.log("data", data);
  return (
    <>
      <h1>BikeService</h1>
      <h1>My bike name is {data.no} </h1>
    </>
  );
}
