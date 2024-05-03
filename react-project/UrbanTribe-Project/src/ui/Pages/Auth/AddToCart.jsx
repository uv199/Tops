import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../../Redux/cart";
import { useCookies } from "react-cookie";
import { API } from "../../api/axiosConfig";
import { toast } from "react-toastify";

export default function Bag() {
  const navigate = useNavigate();
  const { cartData, cartId } = useSelector((store) => store?.cartSlice);

  let [cookies] = useCookies("token");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData(cookies.token));
  }, []);

  const addProduct = async (productId) => {
    if (!cookies?.token) return navigate("/login");
    try {
      let { data } = await API.post("/cart/create/" + productId, null, {
        headers: {
          Authorization: "Bearer " + cookies.token,
        },
      });
      toast.success("produsct added to cart");
      dispatch(fetchCartData(cookies.token));
    } catch (error) {
      console.log("-----------  error----------->", error);
    }
  };

  return (
    <div class=" bg-gray-100 pt-20">
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg">
          {cartData?.map?.((e) => {
            return (
              <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                  src={e?.productId?.thumbnail}
                  alt="product-image"
                  class="h-12 rounded-lg "
                />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      {e?.productId?.title}
                    </h2>
                    <p class="mt-1 text-xs text-gray-700">
                      $ {e?.productId?.price}
                    </p>
                  </div>
                  <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                      <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        -
                      </span>
                      <p
                        class="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value="2"
                        min="1"
                      >
                        {e?.count}
                      </p>
                      <span
                        onClick={() => addProduct(e?.productId?._id)}
                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        +
                      </span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm">{e?.count * e?.productId?.price}$</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">$129.99</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">$4.99</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">$134.98 USD</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
    // <div style={{ display: "grid", placeContent: "center" }}>
    //   {cartData?.map?.((e) => {
    //     return (
    //       <div className="flex justify-between" key={e?._id}>
    //         <img className="w-1/3 " src={e?.productId?.thumbnail} />
    //         <div>Count : {e.count}</div>
    //       </div>
    //     );
    //   })}
    //   <h3>Your Bag is Currently Empty!</h3>
    //   <h6 style={{ textAlign: "center" }}>Stay ahead of the curve</h6>
    //   <h6>Fill your bag with the latest trending styles!</h6>
    //   <br />
    //   <button
    //     style={{
    //       color: "white",
    //       marginLeft: "15px",
    //       backgroundColor: "#ff721d ",
    //       height: "50px",
    //       width: "300px",
    //       borderRadius: "30px 30px",
    //       border: "none",
    //     }}
    //     onClick={() => navigate("/")}
    //   >
    //     Get Trending Now
    //   </button>
    // </div>
  );
}
