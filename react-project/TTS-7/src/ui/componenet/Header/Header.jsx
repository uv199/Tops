import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ArrowDown,
  ChevronDownIcon,
  Menu,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";
import img1 from "../images/menu1.png";
import img2 from "../images/menu2.png";
import img3 from "../images/menu3.png";
import img4 from "../images/menu4.png";
import img5 from "../images/menu5.png";
import img6 from "../images/menu6.png";
import img7 from "../images/menu7.png";
import img8 from "../images/menu8.png";
import img9 from "../images/menu9.png";
import img10 from "../images/menu10.png";
import { useCookies } from "react-cookie";

export default function Header() {
  let [login_menu, setLogin_menu] = useState(false);
  let [collectionMenu, setCollectionMenu] = useState(false);
  let [cookies, setCookies, removeCookie] = useCookies(["token", "user"]);
  let navigate = useNavigate();

  const loginMenuHandler = () => setLogin_menu(!login_menu);  
  return (
    <header className="bg-white relative">
      <nav
        className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-[40px]"
        aria-label="Global"
      >
        <div className="flex lg:flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          <NavLink
            to="/"
            className="text-sm py-3 font-semibold leading-6 text-gray-900 "
          >
            Home
          </NavLink>

          <div className="group">
            <button
              onClick={() => navigate("/collection")}
              className="text-sm py-3 font-semibold leading-6 text-gray-900 flex"
            >
              Collection <ChevronDownIcon />
            </button>
            <div className="absolute w-full z-10 hidden left-0 mt-0 px-5 py-4 space-y-2 bg-white shadow-lg rounded-lg group-hover:block">
              <div className="flex p-4 px-10">
                <div className="w-[20%]">
                  <h6 className="font-semibold mb-4">COLLECTIONS</h6>
                  <ul>
                    <li>Perfume Sprays</li>
                    <li>Mist</li>
                    <li>Solid Perfume</li>
                    <li>Perfume Creme</li>
                    <li>Beard Balm</li>
                    <li>Candles</li>
                    <li>Reed Diffuser</li>
                    <li>Gift Packs</li>
                    <li>My Custom Gift Box</li>
                    <li>Foot Spray</li>
                  </ul>
                </div>
                <div className="w-[80%]">
                  <div className="grid grid-cols-5 gap-4">
                    {[
                      img1,
                      img2,
                      img3,
                      img4,
                      img5,
                      img6,
                      img7,
                      img8,
                      img9,
                      img10,
                    ].map((e, i) => {
                      return (
                        <div
                          key={i}
                          className="overflow-hidden border border-gray-300"
                        >
                          <img
                            src={e}
                            className="hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NavLink
            to="/"
            className="text-sm py-3 font-semibold leading-6 text-gray-900 "
          >
            New Arrivals
          </NavLink>
          <NavLink
            to="/"
            className="text-sm py-3 font-semibold leading-6 text-gray-900 "
          >
            Yearly Sample Subscription
          </NavLink>
          <NavLink
            to="/"
            className="text-sm py-3 font-semibold leading-6 text-gray-900 "
          >
            Order Samples
          </NavLink>
          <NavLink
            to="/"
            className="text-sm py-3 font-semibold leading-6 text-gray-900 "
          >
            My Custom Gift Box
          </NavLink>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <Search className="w-5" />
          <ShoppingBag onClick={() => navigate("/cart")} className="w-5" />
          <User onClick={() => navigate("/profile")} />
        </div>
      </nav>
    </header>
  );
}
