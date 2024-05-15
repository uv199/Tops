import React from "react";
import { TextInput } from "flowbite-react";
import { GiDropEarrings } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { LiaStoreAltSolid } from "react-icons/lia";
import { CiLogin, CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";
import { useCookies } from "react-cookie";

export default function TopHeader() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);
  console.log("-----------  123 cookies----------->", cookies);

  return (
    <div className="w-[100%] bg-red-100 py-2 ">
      <div className="py-2 pr-4 items-center flex justify-around gap-2 w-[100%] ">
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
          {cookies.user?.userType !== "admin" && (
            <>
              <span
                onClick={() => navigate("/wishlist")}
                className=" px-2  flex flex-col justify-center items-center hover:scale-110  transition duration-700 ease-in-out"
              >
                <CiHeart className="text-2xl text-[#832729]" />
                <p className="text-xm text-[#832729]">WISHLIST</p>
              </span>
              <span
                onClick={() => navigate("/cart")}
                className=" px-2  flex flex-col justify-center items-center hover:scale-110  transition duration-700 ease-in-out"
              >
                <CiShoppingCart className="text-2xl text-[#832729]" />
                <p className="text-xm text-[#832729]">CART</p>
              </span>{" "}
            </>
          )}

          {cookies.token ? (
            <span
              onClick={() => navigate("/profile")}
              className=" px-2  flex flex-col justify-center items-center hover:scale-110  transition duration-700 ease-in-out"
            >
              <CiUser className="text-2xl text-[#832729]" />
              <p className="text-xm text-[#832729]">ACCOUNT</p>
            </span>
          ) : (
            <span
              onClick={() => navigate("/login")}
              className=" px-2  flex flex-col justify-center items-center hover:scale-110  transition duration-700 ease-in-out"
            >
              <CiLogin className="text-2xl text-[#832729]" />
              <p className="text-xm text-[#832729]">LOGIN</p>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
