import React, { useEffect } from "react";

export default function PropsUseEffect(props) {
  useEffect(() => {
    console.log("-----PropsUseEffect-------");
  }, [props.count]);
  return (
    <>
      <h1>PropsUseEffect</h1>
      <h1>Count is --- {props.count}</h1>
    </>
  );
}
