import React from "react";

export default function Banner({ title, sentence }) {
  return (
    <div>
      <div className="mt-[4rem] mb-[1rem] px-20">
        <span className="">
          <h1
            className="text-center text-4xl font-bold mt-6 mb-3"
            style={{ color: "#832729" }}
          >
            {title}
          </h1>
          <p className="text-center text-lg">{sentence}</p>
        </span>
        <span>
          <img src="../../../../public/Divider/Line-Design.png" alt="" />
        </span>
      </div>
    </div>
  );
}