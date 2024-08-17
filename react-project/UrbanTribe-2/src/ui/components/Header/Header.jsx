import { ShoppingCart } from "lucide-react";
import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();

  let [cookies, setCookie, removecookies] = useCookies(["token", "user"]);

  const navigateHomeHandler = () => {
    if (cookies?.user?.userType === "admin") {
      navigate("/admin-product");
    } else {
      console.log("-=-=-=-==-")
      navigate("/");
    }
  };

  const logoutHandler = () => {
    removecookies("token");
    removecookies("user");
    navigate("/login");
  };
  console.log("-----------  cookies----------->", cookies);
  return (
    <div>
      {cookies.user?.userType !== "admin" && (
        <>
          <div className="text-center py-2.5 text-sm m-0 text-white bg-red-600">
            <div className="container">
              <div className="tt-row padding-top:10px;min-height:0px;">
                <div className="tt-description font-size:14px; line-height:21px; font-weight:400;">
                  {" "}
                  Get Rs 100 Off on Prepaid Orders | Free Shipping
                  All&nbsp;Over&nbsp;India
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f7f8fa] border-b border-gray-200 text-[#777777] flex px-2 py-1 justify-around">
            <div className="tt-desctop-menu">
              <nav>
                <ul className="flex gap-5 text-sm py-2 m-0 items-center">
                  <li className="dropdown tt-megamenu-col-01 submenuarrow tt-submenu">
                    <a href="#">
                      <span>Track Order</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="/collections/all">
                      <span>All Products</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="/collections/casual-backpacks">
                      <span>Casual Backpacks</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="/collections/professional">
                      <span>Professional</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="/collections/travelbags2021">
                      <span>Travel</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="/collections/sports">
                      <span>Sports</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="/collections/school-bags">
                      <span>School Bags</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="/pages/corporate-gifting">
                      <span>Corporate gifting</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="/collections/best-offer">
                      <span>Best Offer</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="/collections/lunch-bags">
                      <span>Lunch Bags</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="https://urbantribe.in/blogs/">
                      <span>Blogs</span>
                    </a>
                  </li>
                  <li className="dropdown tt-megamenu-col-01">
                    <a href="/pages/contact-us">
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <input
              name="type"
              className="bg-gray-400 text-white placeholder:text-white"
              placeholder="Search"
            />
          </div>
        </>
      )}

      <div className="shadow-md flex justify-between ">
        <div>
          <img
            onClick={() => navigateHomeHandler()}
            className="h-24 w-44 p-2 cursor-pointer"
            src="https://cdn.shopify.com/s/files/1/0522/0158/6857/files/UT_logo_720x_be399bba-0fd5-492f-81ea-7f87a35c2da0.webp?height=628&pad_color=fff&v=1664565623&width=1200"
            alt=""
          />
        </div>
        {!cookies?.token ? (
          <div className="flex gap-2">
            <div className="flex gap-1 items-center  ">
              <h4
                className="cursor-pointer text-red-500"
                onClick={() => navigate("/login")}
              >
                sign-in{" "}
              </h4>
              <h4>or </h4>
              <h4
                className="cursor-pointer text-red-500"
                onClick={() => navigate("/register")}
              >
                Register{" "}
              </h4>
            </div>
            <div className="flex gap-1 items-center ">
              <ShoppingCart />
              <p>MY CART</p>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => logoutHandler()}
              type="submit"
              className="text-sm mt-6 transition-colors duration-500 hover:text-white border-2 border-[#d11e33] py-2 px-12 rounded-md hover:!bg-[#d11e33]	 !bg-white text-[#d11e33] me-4"
            >
              LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
