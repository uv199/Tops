import React, { useState } from "react";
import { SlDiamond } from "react-icons/sl";
import { MdOutlineTune } from "react-icons/md";
import FilterModal from "../../../Component/Filter/FilterModal";

export default function Jewellery(modal, toggle) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <div>
        <FilterModal isOpen={modalOpen} toggle={toggleModal} />
      </div>

      <div className="w-100 flex justify-between bg-red-100 px-20 py-3 my-3 position-relative ">
        <span className="flex justify-center items-center text-xl gap-3 text-[#832729]">
          <MdOutlineTune onClick={toggleModal} className="cursor-pointer" />
          Filter
        </span>
        <span className="flex justify-center items-center text-xl gap-3 text-[#832729]">
          <SlDiamond /> Daily were Jewellery
        </span>
      </div>

      <div className="flex min-h-screen items-center justify-center  px-20 py-[2rem] flex-col">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 position-relative  ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={item?.img}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-2xl font-bold text-white">
                  {item?.title}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  ₹ {item?.price}
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-lg hover:bg-red-600 capitalize text-white shadow shadow-black/60">
                  Add To Card
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
