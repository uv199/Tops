import React from "react";
import { RefreshCcw, Clock3, Truck } from "lucide-react";
import fitpack from "../../../../public/fitpack.webp";
import rumble from "../../../../public/rumble.webp";
import bgImage from "../../../../public/bg.webp";
import Popular from "./Popular";
import OurCollection from "./OurCollection";
import BestSeller from "./BestSeller";

export default function Home() {
  for (let i = 0; i < 1000000000; i++) {}
  return (
    <>
      {/* slider section */}
      <div className="relative flex justify-center">
        <img src={bgImage} alt="" />
        <button className=" mb-3 px-[40px] absolute bottom-0 py-[10px] bg-red-700 rounded-3xl text-white hover:!text-red-700 hover:bg-white">
          Shop Now
        </button>
      </div>

      {/* fitpack-rumble section */}
      <div className="flex justify-center container gap-4 py-5">
        <div className="overflow-hidden">
          <img
            src={fitpack}
            alt=""
            className="hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={rumble}
            alt=""
            className="hover:scale-110 transition-all duration-700"
          />
        </div>
      </div>

      {/*Our collection section */}
      <div className="m-2">
        <OurCollection />
      </div>

      {/*icons section */}
      <div className="bg-[#d11e33] text-white p-[60px]">
        <div className="flex justify-center mb-[50px]"></div>
        <div className="flex justify-around text-center [&>*]:cursor-pointer">
          <div className="group/item flex flex-col items-center">
            {" "}
            <RefreshCcw size={40} /> <br />
            Hassle Free Returns
          </div>
          <div className="group/item flex flex-col items-center">
            <Truck size={40} />
            <br />
            Cash On Delivery
          </div>
          <div className="group/item flex flex-col items-center">
            <Clock3 size={40} /> <br />
            12 Months Warranty
          </div>
        </div>
      </div>

      {/*best seller section */}
      <BestSeller />

      {/*popular section */}
      <Popular />

      {/* HOMEGROWN INDIAN BRAND*/}
      <div className="bg-[#d11e33] text-white p-[100px]">
        <div className="flex justify-center mb-[50px]">
          <h2>HOMEGROWN INDIAN BRAND</h2>
        </div>
        <div className="flex justify-around text-center [&>*]:cursor-pointer ">
          <div className="group/item">
            <span className="group-hover/item:text-black"> 1M+</span> <br />
            Happy Customer
          </div>
          <div className="group/item">
            <span className="group-hover/item:text-black">500k+</span>
            <br />
            Website Visitors every month
          </div>
          <div className="group/item">
            <span className="group-hover/item:text-black">100+</span>
            <br />
            Hyperfunctional designsS
          </div>
        </div>
      </div>
    </>
  );
}
