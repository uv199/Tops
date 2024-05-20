import React from "react";
import { TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { LiaStoreAltSolid } from "react-icons/lia";
import { CiUser, CiHeart, CiLogin } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { useCookies } from "react-cookie";

export default function TopHeader(modal, toggle) {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token", "user"]);
  // console.log(" cookiesdata ========>", cookies);

  return (
    <div>
      <div className="w-[100%] bg-red-50 py-2 px-4">
        <div className=" py-2 px-4 items-center flex justify-center gap-2 w-[100%] ">
          <span>
            <img
              src="../../../../public/logo/logo.png"
              alt=""
              className="w-30 h-14 cursor-pointer"
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
            {/* <span
              className=" px-2  flex flex-col justify-center items-center hover:scale-110 transiti transition duration-700 ease-in-out cursor-pointer"
              
            >
              <LiaStoreAltSolid className="text-2xl text-[#832729]" />
              <p className="text-xm text-[#832729]">STORE</p>
            </span> */}
            {cookies?.user?.userType !== "admin" && (
              <>
                <span
                  className=" px-2  flex flex-col justify-center items-center hover:scale-110 transiti transition duration-700 ease-in-out cursor-pointer"
                  onClick={() => navigate("/WishList")}
                >
                  <CiHeart className="text-2xl text-[#832729]" />
                  <p className="text-xm text-[#832729]">WISHLIST</p>
                </span>
                <span className=" px-2  flex flex-col justify-center items-center hover:scale-110 transiti transition duration-700 ease-in-out cursor-pointer" onClick={() => navigate("/CartPage")}>
                  <PiShoppingCartThin
                    className="text-2xl text-[#832729] "
                    
                  />
                  <p className="text-xm text-[#832729]">CART</p>
                </span>
              </>
            )}

            {!cookies.token ? (
              <span
                className=" px-2  flex flex-col justify-center items-center hover:scale-110 transiti transition duration-700 ease-in-out cursor-pointer"
                onClick={() => navigate("/Login")}
              >
                <CiLogin className="text-2xl text-[#832729]" />
                <p className="text-xm text-[#832729]">LOGIN</p>
              </span>
            ) : (
              <span
                className=" px-2  flex flex-col justify-center items-center hover:scale-110 transiti transition duration-700 ease-in-out cursor-pointer"
                onClick={() => navigate("/ProfilePage")}
              >
                <CiUser className="text-2xl text-[#832729]" />
                <p className="text-xm text-[#832729]">ACCOUNT</p>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
