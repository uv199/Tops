import React from "react";

export default function FruitsCard(props) {
  console.log("-----------  props----------->", props)
  return (
    <div className="flex flex-col items-center bg-[#eae5e5] mx-2">
      <img
        src={props.data.img}
        className="h-[50px]"
        alt=""
      />
      <p className="m-0">{props.data.title}</p>
      <p className="text-sm m-0">26 items</p>
    </div>
  );
}
