import React, { useEffect, useState } from "react";
import { useAccordionButton } from "react-bootstrap";

export default function ListComListCom({ increment }) {
  let [arr, setArr] = useState([]);
  useEffect(() => {
    console.log("------->");
    setArr(increment());
  }, [increment]);
  return (
    <>
      <h1>{arr[0] || 0}</h1>
      <h1>{arr[1] || 0}</h1>
      <h1>{arr[2] || 0}</h1>
    </>
  );
}
