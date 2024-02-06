import React from "react";
import { useSelector } from "react-redux";

export default function Point() {
  const point = useSelector((state) => state.pointReducer.point);
  return (
    <div>
      <h1>Point is {point}</h1>
    </div>
  );
}
