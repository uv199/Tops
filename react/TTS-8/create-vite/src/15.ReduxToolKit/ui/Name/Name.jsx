import React, { useState } from "react";
import NameDisplay from "./NameDisplay";
import NameInput from "./NameInput";

export default function Name() {
  let [inputData, setInputData] = useState("");
  let [index, setIndex] = useState(null);

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
        <NameDisplay setIndex={setIndex} setInputData={setInputData} />
      </div>
    </>
  );
}
