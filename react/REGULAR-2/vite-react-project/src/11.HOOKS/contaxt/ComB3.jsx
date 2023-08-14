import React, { useContext } from "react";
import { nameContext } from "./ContaxtCom";

export default function ComB3(props) {
  const data = useContext(nameContext);
  // data = { data: "urvish", setData: ƒ };
  return (
    <>
      <h1>Com-B3</h1>
      <h1>My Name is {props.value}</h1>
      <h1>My Name is {data.data}</h1>
      <input type="text" onChange={(e) => data.setData(e.target.value)} />
    </>
  );
}
