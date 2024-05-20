import React from "react";
import { RiInboxArchiveLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="w-[100%] bg-red-50 flex justify-around gap-4 p-[3rem]">
        <div>
          <p className="pb-[3rem]  text-2xl font-semibold text-[#832729]">
            UseFull Links
          </p>

          <ul className="flex justify-center flex-col gap-6 ">
            <li className="" style={{ fontSize: "19px" }}>
              Delivery Information
            </li>
            <li className="" style={{ fontSize: "19px" }}>
              International Shipping
            </li>
            <li className="" style={{ fontSize: "19px" }}>
              Payment Options
            </li>
            <li className="" style={{ fontSize: "19px" }}>
              Track your Order
            </li>
            <li className="" style={{ fontSize: "19px" }}>
              Returns
            </li>
          </ul>
        </div>

        <div>
          <p className="pb-[3rem] text-2xl font-semibold text-[#832729]">
            Information
          </p>
          <ul className="flex justify-center flex-col gap-6 ">
            <li className="" style={{ fontSize: "19px" }}>
              Careers
            </li>
            <li className="" style={{ fontSize: "19px" }}>
              Blog
            </li>
            <li className="" style={{ fontSize: "19px" }}>
              Offers & Contest Details
            </li>
            <li className="" style={{ fontSize: "19px" }}>
              Help & FAQs
            </li>
            <li className="" style={{ fontSize: "19px" }}>
              About Tanishq
            </li>
          </ul>
        </div>
        <div>
          <p className="pb-[3rem] text-2xl font-semibold text-[#832729]">
            Contact Us
          </p>
          <ul className="flex justify-center flex-col gap-6 ">
            <li
              className="flex gap-3 items-center"
              style={{ fontSize: "19px" }}
            >
              <RiInboxArchiveLine className="text-2xl" /> Write Us
            </li>
            <li
              className="flex gap-3 items-center"
              style={{ fontSize: "19px" }}
            >
              <IoCallOutline className="text-2xl" />
              1800-266-0123
            </li>
            <li
              className="flex gap-3 items-center"
              style={{ fontSize: "19px" }}
            >
              <CiChat1 className="text-2xl" />
              Chat With Us
            </li>
          </ul>
        </div>
        <div>
          <p className="pb-[3rem] text-2xl font-semibold text-[#832729]">
            Add Information
          </p>
          <div className="flex justify-center gap-3 flex-col">
          <div className="relative">
              <input
                type="text"
                id="floating_filled"
                className="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#FBD5D5] dark:bg-gray-700 border-0 border-b-2 border-[#00000075] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#822729] focus:outline-none focus:ring-0 focus:border-[#822729] peer rounded-lg"
                placeholder=" "
              />
              <label className="absolute text-xm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#822729] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Enter Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="number"
                id="floating_filled"
                className="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#FBD5D5] dark:bg-gray-700 border-0 border-b-2 border-[#00000075] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#822729] focus:outline-none focus:ring-0 focus:border-[#822729] peer rounded-lg"
                placeholder=" "
              />
              <label className="absolute text-xm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#822729] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Enter Your Number
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="floating_filled"
                className="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#FBD5D5] dark:bg-gray-700 border-0 border-b-2 border-[#00000075] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#822729] focus:outline-none focus:ring-0 focus:border-[#822729] peer rounded-lg"
                placeholder=" "
              />
              <label className="absolute text-xm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#822729] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Enter Your City
              </label>
            </div>
          </div>
          <p className="pt-5 py-1 text-lg font-bold text-[#822729]">Follow Us On </p>
          <p className="flex justify-start gap-4 text-3xl text-[#822729]"><FaXTwitter /> <CiInstagram /> <FaFacebookF /></p>
        </div>
      </div>
    </div>
  );
}
