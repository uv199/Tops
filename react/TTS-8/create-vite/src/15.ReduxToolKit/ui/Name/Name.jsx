import React, { useState } from "react";
import NameDisplay from "./NameDisplay";
import NameInput from "./NameInput";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/fetures/nameList/Name";
import { counter } from "@fortawesome/fontawesome-svg-core";

export default function Name() {
  let [inputData, setInputData] = useState("");
  let [index, setIndex] = useState(null);

  const dispatch = useDispatch();

  const count = useSelector((state) => state.COUNT.count);
  const clickHandler = () => {
    dispatch(fetchUser(counter));
  };

  return (
    <>
      <div>
        <h1>
          index is {index} and data is {inputData}
        </h1>

        <NameInput
          inputData={inputData}
          setInputData={setInputData}
          index={index}
          setIndex={setIndex}
        />
        <Button color="danger" onClick={() => clickHandler()}>
          Fetch User
        </Button>
        <NameDisplay setIndex={setIndex} setInputData={setInputData} />
      </div>
    </>
  );
}
