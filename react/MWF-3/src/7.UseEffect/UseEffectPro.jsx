import React, { useState } from "react";
import Card from "./Card";
import { Button } from "reactstrap";
const nameArr = ["urvish", "tejsh", "urvish"];
export default function UseEffectPro() {
  let [userId, setUserId] = useState(1);
  return (
    <div>
      {/* {nameArr?.map((e, i) => {
        return <Card name={e} key={i} />;
      })} */}
      {/* <Card name={nameArr[0]} /> */}
      <Card userId={userId} />
      <Button onClick={() => setUserId(1)}>chnage-1</Button>
      <Button onClick={() => setUserId(2)}>chnage-2</Button>
    </div>
  );
}
