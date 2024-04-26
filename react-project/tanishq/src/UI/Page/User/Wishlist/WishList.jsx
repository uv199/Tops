import React from "react";

export default function WishList() {
  return (
    <div>
      <div className="px-20 my-8">
        <p className="text-5xl text-[#676767] font-medium bg-[#83272954] px-8 py-2">WISHLIST</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 position-relative my-[3rem]">
            {/* ==================Cart-1================= */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="../../../../../public/Gold/Card1.jpg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-white">
                Rose Gold Pendant
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                ₹ 20899
              </p>
              <button className=" bg-neutral-900 py-2 px-3.5 font-com text-lg hover:bg-red-300  hover:text-[#832729] capitalize text-white shadow shadow-black/60">
                Add To Card
              </button>
              <button className=" mt-5   bg-neutral-900 py-2 px-3.5 font-com text-lg hover:bg-red-300 hover:text-[#832729]  capitalize text-white shadow shadow-black/60">
                Remove WishList
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
