import React from "react";
import { Card } from "flowbite-react";
import { CiHeart } from "react-icons/ci";

export default function CardCom() {
  return (
    <div>
      <Card className="max-w-sm  border-[1] rounded-none border-gray-200 shadow-none ">
        <span className="position-relative ">
          <img src="../../../../../public/Gift Slider/gift1.jpg" />
        </span>
        <span
          style={{
            position: "absolute",
            top: "40px",
            bottom: "0px",
            // left:"0px",
            right: "50px",
          }}
          className="p-1 bg-white h-8 rounded-full drop-shadow-md "
        >
          <CiHeart className="text-gray-400 text-2xl " />
        </span>
        <span>
          <p className="text-start font-semibold" style={{ fontSize: "13px" }}>
            Serene Lilac Hoop earrings
          </p>
          <p className="text-start font-medium text-xm">$ 46475</p>
        </span>
      </Card>
    </div>
  );
}
