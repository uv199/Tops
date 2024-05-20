import React, { useState } from "react";
import { SlDiamond } from "react-icons/sl";
import { MdOutlineTune } from "react-icons/md";
import FilterModal from "../../../Modal/FilterModal";
import { GoldData } from "../../../Component/Card/Data";

export default function Gold(modal,toggle,allProduct) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
  <div>
    <div>
    <FilterModal isOpen={modalOpen} toggle={toggleModal} />
    </div>

  <div className="w-100 flex justify-between bg-[#FCF9F9] px-20 py-3 my-3 position-relative ">
  <span className="flex justify-center items-center text-xl gap-3 text-[#832729] cursor-pointer"><MdOutlineTune  onClick={toggleModal} />Filter</span>
  <span className="flex justify-center items-center text-xl gap-3 text-[#832729] cursor-pointer"><SlDiamond /> Daily were Jewellery</span>
</div>

  
    <div className="flex min-h-screen items-center justify-center  px-20 py-[2rem] flex-col">

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 position-relative  ">
      {
        gold?.map((item,index)=>(
          <div  key={index} className="relative group  cursor-pointer group overflow-hidden text-gray-50      h-[20rem] w-56  hover:duration-500 duration-700 hover:drop-shadow-md">
          <img
           src={item.img}
            className="h-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          />

          <div className="absolute bg-[#fdf2f2c6] -bottom-[5rem] w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span className="text-gray-800 font-bold text-xl ">
            {item.title}
            </span>
            <span className="text-lime-400 font-bold text-xs"></span>
            <p className="text-neutral-800 text-lg">₹ {item.price}</p>
            <button className=" border-[1px] border-black mt-2 px-3.5 font-com text-lg  capitalize text-black shadow hover:shadow-black/100 ">Add To Card</button>
          </div>
        </div>
   
        ))
      }
    
    </div>
    </div>
  </div>
  );
}
