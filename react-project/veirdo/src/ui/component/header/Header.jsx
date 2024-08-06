import React from "react";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";

export default function Header() {
  return (
    <>
      <div className=" block font-[ibmRegular] font font-semibold py-2 px-3 text-center h-8 text-white text-xs lg:text-base lg:leading-none bg-[#2D8CE3] ">
        Buy Any 3 @ ₹1099 on Printed Half Sleeve Tshirt
      </div>
      <header
        id="header"
        className="sticky top-0 bg-white shadow-md  flex  z-[999] px-3 border border-neutral-50  drawer-menu lg:gap-12 justify-between items-center"
      >
        <div className="flex gap-9">
          <div className="flex gap-4 self-center">
            <a
              href="/"
              className="header__heading-link link link--text focus-inset"
            >
              <div className="header__heading-logo-wrapper">
                <img
                  src="//veirdo.in/cdn/shop/files/veirdo_logo_1.svg?v=1704692356&width=600"
                  alt="brand-logo"
                  srcSet="//veirdo.in/cdn/shop/files/veirdo_logo_1.svg?v=1704692356&width=120 120w, //veirdo.in/cdn/shop/files/veirdo_logo_1.svg?v=1704692356&width=180 180w, //veirdo.in/cdn/shop/files/veirdo_logo_1.svg?v=1704692356&width=240 240w"
                  width="120"
                  height="28.085106382978726"
                  className="header__heading-logo motion-reduce"
                  sizes="(max-width: 240px) 50vw, 120px"
                ></img>
              </div>
            </a>
          </div>
          <ul className="megamenu-links-wrapper hidden lg:flex lg:items-center desktop-menu-conatiner gap-5">
            <NavLink className="text-neutral-700 text-sm opacity-75 font-family:Sora uppercase flex items-center h-[80px] w-max BEST SELLERS-dropdown font-bold ">
              {" "}
              BEST SELLERS{" "}
            </NavLink>
            <NavLink className="text-neutral-700 text-sm opacity-75 font-family:Sora uppercase flex items-center h-[80px] w-max NEW ARRIVALS-dropdown font-bold ">
              {" "}
              NEW ARRIVALS{" "}
            </NavLink>
            <NavLink className="text-neutral-700 text-sm opacity-75 font-family:Sora uppercase flex items-center h-[80px] w-max NEW ARRIVALS-dropdown font-bold ">
              {" "}
              OverSized T-shirts{" "}
            </NavLink>
            <NavLink className="text-neutral-700 text-sm opacity-75 font-family:Sora uppercase flex items-center h-[80px] w-max NEW ARRIVALS-dropdown font-bold ">
              {" "}
              All CATEGORIES{" "}
            </NavLink>
            <NavLink className="text-neutral-700 text-sm opacity-75 font-family:Sora uppercase flex items-center h-[80px] w-max NEW ARRIVALS-dropdown font-bold ">
              {" "}
              Merchandise{" "}
            </NavLink>
          </ul>
        </div>
        <div className="flex gap-4 justify-center border-[#] items-center">
          <div className=" max-w-[350px] hidden lg:block p-2 rounded-xl border-r-4 border border-[#8F54F0] border-r-[#8F54F0] border-b-4 border-b-[#8F54F0] ">
            <form method="post" className="flex justify-between">
              <div>
                <input
                  type="text"
                  className="bg-transparent font-[ibmRegular] text-sm text-[#B8ACC5] focus:outline-none focus:cursor-text"
                  placeholder="Try searching “T-shirts”"
                />
              </div>
              <IoIosSearch className="text-2xl text-[#8F54F0]" />
            </form>
          </div>
          <div className="icons flex gap-4">
            <div>
              <VscAccount className="text-2xl" />
            </div>
            <div>
              <IoIosHeartEmpty className="text-2xl" />
            </div>
            <div>
              <FiShoppingBag className="text-2xl" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
