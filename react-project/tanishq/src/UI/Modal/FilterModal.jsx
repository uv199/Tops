import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function FilterModal({ isOpen, toggle }) {
 

  
  return (
    <div>
       <div className={` inset-0 z-[1] flex items-center flex-col w-[20rem] bg-red-50 h-[100%] justify-center ${isOpen ? '' : 'hidden'} ` }  
       style={{ position: "fixed",
                  top: "0px",
                  bottom: "0px",
                  left: "0px",
              }}>
      <span className=" flex items-center justify-between gap-3 bg-red-200 text-lg px-8 py-3 w-[100%] text-[#832729]">
          Filter
          <IoMdClose className="text-2xl" onClick={toggle}/>
        </span>
        <span className=" flex items-center gap-3  text-lg ps-[2rem] py-3  w-[100%] text-[#832729]">
          <IoIosArrowForward className="text-xl" />
          price
        </span>
        <span className=" flex items-center gap-3  text-lg ps-[2rem] py-3  w-[100%] text-[#832729]">
          <IoIosArrowForward className="text-xl" />
          Jewellery Type
        </span>
        <span className=" flex items-center gap-3  text-lg ps-[2rem] py-3  w-[100%] text-[#832729]">
          <IoIosArrowForward className="text-xl" />
          Brand
        </span>
        <span className=" flex items-center gap-3  text-lg ps-[2rem] py-3  w-[100%] text-[#832729]">
          <IoIosArrowForward className="text-xl" />
          Gender
        </span>
        <span className=" flex items-center gap-3  text-lg ps-[2rem] py-3  w-[100%] text-[#832729]">
          <IoIosArrowForward className="text-xl" />
          occasion 
        </span>
        <span className=" flex items-center gap-3  text-lg ps-[2rem] py-3  w-[100%] text-[#832729]">
          <IoIosArrowForward className="text-xl" />
          Metal
        </span>
        <span className=" flex items-center gap-3  text-lg ps-[2rem] py-3 w-[100%]  text-[#832729]">
          <IoIosArrowForward className="text-xl" />
          price
        </span>
        <span className=" flex items-center gap-3  text-lg ps-[2rem] py-3  w-[100%] text-[#832729]">
          <IoIosArrowForward className="text-xl" />
          Size
        </span>
        <div className=" w-[100%]">
            <button className="w-[50%] p-3 text-lg border-[1px] border-[#832729] text-[#832729]"  >Clear All</button>
            <button className="w-[50%]  p-3 bg-[#832729] text-white text-lg">Show Result</button>

        </div>
      </div>
    </div>
  );
}
