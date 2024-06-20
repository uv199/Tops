import React from "react";

export default function CardCom() {
  return (
    <div className="border border-gray-300 rounded-md overflow-hidden shadow-xl max-w-[400px]  relative">
      <span className="bg-red-400 text-white rounded-md px-2 py-1 absolute right-2 top-2">
        20 %
      </span>
      <img
        className=" w-full"
        src="https://m.media-amazon.com/images/I/318RvHnDwHL._SX300_SY300_QL70_FMwebp_.jpg"
        alt=""
      />
      <div className="bg-gray-300 p-3">
        <h1 className="text-4xl">Head phone</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          temporibus dolorum quod!
        </p>
        <p className="font-semibold">2000$</p>
      </div>
    </div>
  );
}
