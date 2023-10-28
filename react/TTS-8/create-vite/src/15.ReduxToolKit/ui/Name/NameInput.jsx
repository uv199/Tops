import React, { useState } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { addName } from "../../redux/fetures/NameList/Name";

export default function NameInput() {
  let [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const addNameHandler = () => {
    // add data to slice
    dispatch(addName(inputText));
    setInputText("");
  };
  return (
    <>
      <h1>Add Name</h1>
      <label htmlFor="">Name</label>
      <input
        value={inputText}
        type="text"
        onChange={(e) => setInputText(e?.target?.value)}
      />
      <Button color="danger" onClick={addNameHandler}>
        Submit
      </Button>
    </>
  );
}
