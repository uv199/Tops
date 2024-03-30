import React from "react";
import { Input, Label } from "reactstrap";

export default function FilterCom({ setFilter, filter }) {
  const checkBoxHandler = (color, e) => {
    if (e.target?.checked) {
      setFilter({ ...filter, color: [...filter.color, color] });
    } else {
      let newArr = filter?.color?.filter((e) => e !== color);
      setFilter({ ...filter, color: newArr });
    }
  };
  return (
    <div>
      <>
        <Label>Red</Label>
        <Input type="checkbox" onChange={(e) => checkBoxHandler("red", e)} />
        <Label>green</Label>
        <Input type="checkbox" onChange={(e) => checkBoxHandler("green", e)} />
        <Label>yellow</Label>
        <Input type="checkbox" onChange={(e) => checkBoxHandler("yellow", e)} />
        <Label>gray</Label>
        <Input type="checkbox" onChange={(e) => checkBoxHandler("gray", e)} />
      </>
    </div>
  );
}
