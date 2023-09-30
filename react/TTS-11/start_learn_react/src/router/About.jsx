import React from "react";
import { useParams } from "react-router-dom";

export default function About() {
  let data = useParams();
  console.log("data", data);
  return (
    <>
      <h1>About: {data.id}</h1>
    </>
  );
}
