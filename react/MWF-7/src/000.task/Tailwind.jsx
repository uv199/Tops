import React from "react";

export default function Tailwind() {
  return (
    <>
      <div className="">
        <h1 className="text-theme-color">hello</h1>
        <button className="base-btn">click me</button>
      </div>
      <div className="group/outer w-[300px] h-[300px] border border-black">
        <div className="group/inner border m-3">
          <button className="peer group-hover/outer:base-btn group-hover/inner:bg-red-500">
            click me
          </button>
          <button className="peer-hover:bg-red-500 from-red-in to-black-out ">
            click me
          </button>
        </div>
      </div>
      <button className="bg-gradient-to-t from-red-500 to-black ">
        click me
      </button>
    </>
  );
}
