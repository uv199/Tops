import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { incOne, incTen } from "../../redux/fetures/count";

export default function CountUpdate() {
  let dipatch = useDispatch();
  return (
    <div className="d-flex gap-2">
      <hr />
      <Button color="danger" onClick={() => dipatch(incOne())}>
        Inc-1
      </Button>
      <Button color="danger" onClick={() => dipatch(incTen())}>
        Inc-10
      </Button>
    </div>
  );
}
