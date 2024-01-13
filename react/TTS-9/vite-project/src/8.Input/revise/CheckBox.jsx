import React, { useState } from "react";
import { Input, Label } from "reactstrap";

let alfabet = ["A", "B", "C", "D", "E", "F"];
export default function CheckBox() {
  let [selectIndex, setSelectIndex] = useState([]);

  const selectHandler = (index) => {
    let available = selectIndex.includes(index);
    console.log("-----------  available----------->", available);
    if (available) {
      let filter = selectIndex?.filter((e) => e !== index);
      setSelectIndex(filter);
    } else {
      setSelectIndex([...selectIndex, index]);
    }
  };
  console.log("---->", selectIndex);
  return (
    <div>
      <Input onChange={(e) => console.log(e?.target.checked)} type="checkbox" />
      {alfabet?.map((e, i) => {
        return (
          <div className="d-flex gap-2 align-items-center ">
            <Input
              onChange={() => selectHandler(i)}
              type="checkbox"
              checked={selectIndex.includes(i)}
            />
            <Label>
              <h3>{e}</h3>
            </Label>
          </div>
        );
      })}
      <div className="d-flex gap-3">
        {alfabet?.map((e, i) => {
          if (selectIndex?.includes(i)) {
            return <h1>{e}</h1>;
          }
        })}
      </div>
    </div>
  );
}

// onChange={() => selectHandler(0)} - A
// onChange={() => selectHandler(1)} - B
// onChange={() => selectHandler(2)} - C
// onChange={() => selectHandler(3)} - D

// p=[1,2,3,4,5]
// true => selectAll => selectState= [0,1,2,3,4]
// false => unsselct => selectState[]
