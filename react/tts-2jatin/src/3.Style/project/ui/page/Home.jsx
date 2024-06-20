import React from "react";
import img from "../../../../../public/headphone.png";
import CardCom from "../components/CardCom";

export default function Home() {
  return (
    <div>
      <div className="bg-purple-50 flex items-center justify-around">
        <div>
          <h1 className="text-7xl leading-[90px] mb-4">
            Roco <br />
            WireLess <br />
            HeadPhones
          </h1>
          <button className="border-b-4 hover:bg-purple-300 hover:text-white border border-black bg-white py-2 px-5 rounded-[20px] font-semibold ">
            Shop Now
          </button>
        </div>
        <img src={img} alt="" />
      </div>

      <div className="grid grid-cols-4 gap-4 p-[20px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
          return <CardCom />;
        })}
      </div>
    </div>
  );
}
