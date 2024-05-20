import React from "react";

export default function WishList() {
  return (
    <div>
      <div className="px-20 my-8">
        <p className="text-5xl font-medium bg-[#83272954] px-8 py-2 text-[#000000a5]">
          WISHLIST
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 position-relative my-[3rem]">
          {/* ==================Cart-1================= */}
          <div className="relative group  cursor-pointer group overflow-hidden text-gray-50      h-[20rem] w-56  hover:duration-500 duration-700 hover:drop-shadow-md">
            <img
              src="../../../../../public/Gold/Card1.jpg"
              className="h-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            />

            <div className="absolute bg-[#fdf2f2c6] -bottom-[5rem] w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span className="text-gray-800 font-bold text-xl ">
                Rose Gold Pendan
              </span>
              <span className="text-lime-400 font-bold text-xs"></span>
              <p className="text-neutral-800 text-lg">₹ 20899</p>
              <button className=" border-[1px] border-black mt-2 px-3.5 font-com text-lg  capitalize text-black shadow hover:shadow-black/100 ">Add To Card</button>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}
