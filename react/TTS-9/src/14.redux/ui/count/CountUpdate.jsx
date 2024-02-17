import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import { incByInput, incOne, incTen } from "../../redux/fetures/count";

export default function CountUpdate() {
  let [no, setNo] = useState(0);
  let dipatch = useDispatch();

  const addCount = () => {
    dipatch(incByInput(no));
    setNo("");
  };
  return (
    <div className="d-flex flex-column">
      <hr />
      <div className="d-flex gap-2 mb-3">
        <Button color="danger" onClick={() => dipatch(incOne())}>
          Inc-1
        </Button>
        <Button color="danger" onClick={() => dipatch(incTen())}>
          Inc-10
        </Button>
      </div>
      <div>
        <Input
          placeholder="Enter a number"
          value={no}
          onChange={(e) => setNo(e?.target?.value)}
        />
        <Button color="danger" onClick={() => addCount()}>
          Inc-By-Input
        </Button>
      </div>
    </div>
  );
}
