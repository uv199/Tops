import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { IoVideocamOutline } from "react-icons/io5";

export default function ConnectCard() {
  return (
    <div>
     <div className="flex justify-center gap-8 pb-[8rem] px-20">
     <div className="flex border-[1px] rounded-xl border-[#832729] bg-stone-100 p-5  gap-8">
            <span className=" py-2  flex justify-center flex-col rounded-l-xl gap-5">
                <span>

                <p className="text-[#832729] text-xl">Connect On </p>
                <p className="text-[#832729] text-3xl font-medium">Whatsapp</p>
                </span>
                <button className="flex justify-between  text-[#832729] items-center
                 text-[15px] font-medium bg-red-200 py-2 px-3 w-[7rem]">
                    Book <FaArrowRight />
                </button>
            </span>
            <span className=" text-[7rem] py-2  items-center rounded-r-xl">
            <FaWhatsapp className="text-[#832729]" />
            </span>
        </div>
        <div className="flex border-[1px] rounded-xl border-[#832729] bg-stone-100 p-5  gap-8">
            <span className=" py-2  flex justify-center flex-col rounded-l-xl gap-5">
                <span>

                <p className="text-[#832729] text-xl">Book On </p>
                <p className="text-[#832729] text-3xl font-medium">Appoinment</p>
                </span>
                <button className="flex justify-between  text-[#832729] items-center
                 text-[15px] font-medium bg-red-200 py-2 px-3 w-[7rem]">
                    Book <FaArrowRight />
                </button>
            </span>
            <span className=" text-[7rem] py-2  items-center rounded-r-xl">
            <SlLocationPin  className="text-[#832729]" />
            </span>
        </div>
        <div className="flex border-[1px] rounded-xl border-[#832729] bg-stone-100 p-5  gap-8">
            <span className=" py-2  flex justify-center flex-col rounded-l-xl gap-5">
                <span>

                <p className="text-[#832729] text-xl">Schedule a </p>
                <p className="text-[#832729] text-3xl font-medium">Video Call</p>
                </span>
                <button className="flex justify-between  text-[#832729] items-center
                 text-[15px] font-medium bg-red-200 py-2 px-3  w-[7rem]">
                    Book <FaArrowRight />
                </button>
            </span>
            <span className=" text-[7rem] py-2  items-center rounded-r-xl">
            <IoVideocamOutline  className="text-[#832729]" />
            </span>
        </div>
      
     </div>
    </div>
  );
}
