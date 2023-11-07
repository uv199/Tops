import React from "react";
import { Button } from "reactstrap";
import { Activity, ActivitySquare } from "lucide-react";

export default function PropsChange(props) {
  const chnageName = () => {
    props.name = "USER";
  };
  return (
    <>
      <h1> hello, {props.name}</h1>
      <Button onClick={chnageName} color="danger">
        Chnage user
      </Button>
      <hr style={{ width: "100vw" }} />
      <h1> hello, {props.name}</h1>
      <Button onClick={chnageName} color="danger">
        Chnage user
      </Button>
      {/* <ActivitySquare />
      <Activity color="#a93737" /> */}
    </>
  );
}
