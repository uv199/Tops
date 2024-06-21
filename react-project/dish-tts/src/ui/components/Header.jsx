import React from "react";
import logoImg from "../../Images/logo.svg";
import { Input } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-blue-500 text-white text-center py-1">
        Buy Any 3 @1099 on Printed Half Sleeve Tshirt
      </div>
      <div className="Header uppercase flex justify-between items-center gap-3 p-3 font-bold font-sans">
        <div className="flex items-center gap-4">
          <p>
            <img
              src={logoImg}
              className="cursor-pointer w-[130px]"
              onClick={() => navigate("/")}
            />
          </p>
          <div className="flex gap-4 text-sm ">
            <NavLink className="hover:text-gray-400" to={"Best_Sellers"}>
              Best Sellers
            </NavLink>
            <NavLink className="hover:text-gray-400" to={"New_arrivals"}>
              New arrivals
            </NavLink>
            <NavLink className="hover:text-gray-400" to={"Oversized_tshirts"}>
              Oversized tshirts
            </NavLink>
            <NavLink className="hover:text-gray-400" to={"All_categories"}>
              All categories
            </NavLink>
            <NavLink className="hover:text-gray-400" to={"Merchandise"}>
              Merchandise
            </NavLink>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center py-2 rounded-lg overflow-hidden pr-2 border-b-[3px] border-r-[3px] border-t border-l  border-purple-400">
            <input
              type="text"
              placeholder="Try searching “T-shirts”"
              className="rounded-md font-medium text-sm h-full px-2 focus:outline-none focus:border-none "
            />
            <Search className="text-purple-400" />
          </div>
          <User />
          <Heart />
          <ShoppingCart />
        </div>
      </div>
      <hr />
    </>
  );
}
