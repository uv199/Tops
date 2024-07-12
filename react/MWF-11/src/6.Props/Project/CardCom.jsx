import React from "react";

export default function CardCom(props) {
  console.log("-----------  props----------->", props);
  return (
    <div className="border p-4 rounded-md border-black">
      <h1 className="text-4xl">
        {props.index + 1}.{props?.cityData?.city}
      </h1>
      <hr />
      <h1 className="text-2xl text-gray-600">{props?.cityData?.state_name}</h1>
      <hr />
      <h1 className="text-5xl text-red-400">11234535645</h1>
    </div>
  );
}
