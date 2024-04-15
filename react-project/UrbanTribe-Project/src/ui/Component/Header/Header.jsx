import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../public/logo.avif";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { User } from "lucide-react";
import { useCookies } from "react-cookie";
import { Tooltip } from "flowbite-react";

const menuItem = [
  { label: "Track Order" },
  { label: "All Products" },
  { label: "Casual Backpacks" },
  { label: "Professional" },
  { label: "Travel" },
  { label: "Sports" },
  { label: "School Bags" },
  { label: "Corporate gifting" },
  { label: "Best Offer" },
  { label: "Lunch Bags" },
  { label: "Blogs" },
  { label: "Contact Us" },
];
export default function Header() {
  const [cookies] = useCookies(["token"]);

  const navigate = useNavigate();
  return (
    <>
      {cookies?.user?.userType !== "admin" && (
        <div>
          <p className=" text-center py-2.5 text-sm m-0 text-white bg-red-600">
            <marquee>
              Get Rs 100 Off on Prepaid Orders | Free Shipping All Over India
            </marquee>
          </p>
          <div className="bg-[#f7f8fa] border-b border-gray-200 text-[#777777] flex px-2 py-1 justify-around">
            <ul className="flex gap-3 text-sm py-2 m-0 items-center">
              {menuItem?.map((menuItem, index) => {
                return (
                  <>
                    <li key={index}>
                      <NavLink className="text-decoration-none text-black hover:!text-red-600">
                        {menuItem?.label}
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </ul>

            <div className="border border-gray-400 rounded-md flex justify-center items-center pl-3 pr-1">
              <FontAwesomeIcon
                className="text-gray-400 cursor-pointer"
                icon={faSearch}
                style={{ top: "56px", right: "222px", fontSize: "17px" }}
              />
              <input
                className="border-none shadow-none focus:outline-none px-4 py-1"
                placeholder="SEARCH PRODUCTS..."
              />
            </div>
          </div>
        </div>
      )}

      <div className=" border-b border-gray-200 flex  items-center justify-between px-8 py-3">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="" className="h-16" />
        </div>
        {cookies?.user?.userType === "admin" && (
          <ul className="flex [&_*]:mx-3">
            <li>
              <NavLink to={"/admin-product"}>Product</NavLink>
            </li>
            <li>
              <NavLink to={"/admin-user"}>User</NavLink>
            </li>
            <li>
              <NavLink to={"/admin-order"}>Order</NavLink>
            </li>
          </ul>
        )}
        <div className=" flex gap-6 items-center">
          {cookies?.token ? (
            <User
              onClick={() => navigate("/profile")}
              role="button"
              color="red"
            />
          ) : (
            <div className="text-decoration-none text-red-500 ">
              <p className="text-gray-400 cursor-pointer m-0">
                <span
                  className="hover:text-black"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </span>
                <span className="hover:text-gray-400"> or </span>{" "}
                <span
                  className="hover:text-black"
                  onClick={() => navigate("/register")}
                >
                  Register
                </span>
              </p>
            </div>
          )}
          <div className="flex items-center cursor-pointer">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-2xl text-red-600 hover:text-black"
            />
            <span
              style={{
                fontSize: "14px",
                lineHeight: "15px",
                fontWeight: "400",
                marginLeft: "4px",
              }}
            >
              WISHLIST
            </span>
          </div>
          <Tooltip
            content="cart"
            placement="bottom"
            animation="duration-500"
            // className="text-gray-800 !border !border-gray-500"
            style="light"
          >
            <NavLink to={"/addtocart"}>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className=" text-2xl text-red-600 hover:text-black"
                />
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "15px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  MY CART
                </span>
              </div>
            </NavLink>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
