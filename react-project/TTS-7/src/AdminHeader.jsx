import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  User,
} from "lucide-react";

export default function AdminHeader() {
    let navigate = useNavigate();
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
            to="/admin-product"
            className="text-sm py-3 font-semibold leading-6 text-gray-900 "
          >
            Product
          </NavLink>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <User onClick={() => navigate("/profile")} />
        </div>
      </nav>
    </header>
  );
}
