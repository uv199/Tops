import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { addName, updateName } from "../../redux/fetures/NameList/Name";

export default function NameInput(props) {
  let [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const addNameHandler = () => {
    // add data to slice
    dispatch(addName(inputText));
    setInputText("");
  };

  useEffect(() => {
    setInputText(props.inputData);
  }, [props.inputData, props.index]);

  const updateHandler = () => {
    console.log("---0=-=>");
    dispatch(updateName({ index: props.index, newData: inputText }));
    setInputText("");
    props.setIndex(null);
    props.setInputData("");
  };
  return (
    <>
      <div className="d-flex flex-column gap-3 border  border-black rounded-3 p-3">
        <h1>Add Name</h1>
        <label htmlFor="">Name</label>
        <input
          value={inputText}
          type="text"
          onChange={(e) => setInputText(e?.target?.value)}
        />
        {props?.index || props?.index === 0 ? (
          <Button color="danger" onClick={updateHandler}>
            Update
          </Button>
        ) : (
          <Button color="danger" onClick={addNameHandler}>
            Submit
          </Button>
        )}
      </div>
    </>
  );
}
