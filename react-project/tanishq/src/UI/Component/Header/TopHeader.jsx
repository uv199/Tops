import React from "react";
import { TextInput } from "flowbite-react";
import { GiDropEarrings } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { LiaStoreAltSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Account from "../Modal/Account";

export default function TopHeader(modal,toggle) {
  const navigate=useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <div>
      
      <Account data-modal-target="default-modal" data-modal-toggle="default-modal"/>
      </div>

      <div className="w-[100%] bg-red-50 py-2 px-4">
        <div className=" py-2 px-4 items-center flex justify-center gap-2 w-[100%] ">
          <span>
            <img
              src="../../../../public/logo/logo.png"
              alt=""
              className="w-30 h-14"
              onClick={() => navigate("/")}
            />
          </span>
          <span className="w-[50%]">
            <TextInput
              id="text"
              type="text"
              placeholder="Search For Gold , Jewellery , Diamond..."
              className="w-[100%] "
            />
          </span>
          <div className="flex  py-3 mt-3 gap-4 justify-center">
            <span className=" px-2  flex flex-col justify-center items-center hover:scale-110 transiti transition duration-700 ease-in-out ">
              <GiDropEarrings  className="text-2xl text-[#832729]" />
              <p className="text-xm text-[#832729]" >DAILYWEAR</p>
            </span>
            <span className=" px-2  flex flex-col justify-center items-center hover:scale-110 transiti transition duration-700 ease-in-out">
              <LiaStoreAltSolid  className="text-2xl text-[#832729]"/>
              <p className="text-xm text-[#832729]">STORE</p>
            </span>
            <span className=" px-2  flex flex-col justify-center items-center hover:scale-110 transiti transition duration-700 ease-in-out">
              <FaRegUser className="text-2xl text-[#832729]" />
              <p className="text-xm text-[#832729]" >ACCOUNT</p>
            </span>
            <span className=" px-2  flex flex-col justify-center items-center hover:scale-110 transiti transition duration-700 ease-in-out">
              <FaRegHeart className="text-2xl text-[#832729]" />
              <p className="text-xm text-[#832729]">WISHLIST</p>
            </span>
            <span className=" px-2  flex flex-col justify-center items-center hover:scale-110 transiti transition duration-700 ease-in-out">
              <AiOutlineShoppingCart  className="text-2xl text-[#832729]"/>
              <p className="text-xm text-[#832729]">CART</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
