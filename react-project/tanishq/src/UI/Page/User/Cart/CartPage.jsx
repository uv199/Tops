import React from "react";
import Counter from "./Counter";
import { useSelector } from "react-redux";
export default function CartPage() {
  let data = useSelector((store)=>store.cartSlice)
  console.log("-----------  data----------->", data)
  return (
    <div className="container flex flex-row">
      <div className="w-2/3">
        <div className="px-3 py-3 flex">
          <div className="w-1/4">
            <span>
              <img src="./img/1st.webp" alt="" className="w-full rounded-4" />
            </span>
          </div>
          <div className="w-3/4 px-4">
            <span>
              <h2 className="mt-2 text-xl font-bold text-pink-900">
                Spiral Flower Diamond Bracelet
              </h2>
            </span>
            <p className="text-sm text-gray-500 py-2">
              Weight : 2.387 g | Size : 18.00 CMS
            </p>
            <p className="text-lg text-pink-900 font-bold">
              ₹ 67758
              <span className="ps-2 text-lg  text-gray-500 line-through">
                ₹ 71324{" "}
              </span>
            </p>
            <div className="my-3 text-sm">
              <i className="far fa-trash-alt me-2 text-pink-900"></i>Remove |{" "}
              <i className="far fa-heart ms-2 me-2 text-pink-900"></i> Move To
              Wishlist
            </div>
            <span className="my-3 text-pink-900 mt-2 flex items-baseline">
              <input type="checkbox" name="" id="" />
              <span className="text-sm ms-2 "> Add Gift Message</span>
            </span>
            <Counter />
          </div>
        </div>
        <hr />
        <div className="p-3">
          <span>
            <img src="./img/icons.webp" alt="" />
          </span>
        </div>
      </div>
      <div className="w-1/3">
        <div className="card border-none p-3 rounded-3 bg-pink-50 my-2 ">
          <h2 className="text-pink-900 font-bold text-lg mb-2 ">
            ORDER SUMMARY
          </h2>
          <div className="flex justify-between mt-2 mb-2">
            <span>Sub Total</span>
            <span>₹ 71324</span>
          </div>
          <div className="flex justify-between mt-2 mb-2">
            <span>Discount</span>
            <span>- ₹ 3566</span>
          </div>
          <div className="flex justify-between mt-2 mb-2">
            <span>Delivery Charge</span>
            <span>FREE</span>
          </div>
          <div className="flex justify-between mt-2 mb-2">
            <span className="text-pink-900">TOTAL (Incl of all Taxes.)</span>
            <span className="text-pink-900 font-semibold">₹ 67758</span>
          </div>
          <div className="flex justify-between mt-2 mb-2">
            <span className="text-lime-600 font-bold">YOU SAVE </span>
            <span className="text-lime-600 font-bold">+ ₹ 3566</span>
          </div>
        </div>
      </div>
    </div>
  );
}
