import React, { useState } from "react";
import { Button } from "reactstrap";

export default function ModalPreview({ product, onClose }) {
  const [count, setCount] = useState(1);

  const minusCount = () => {
    setCount((prev) => Math.max(prev - 1, 1));
  };
  const plusCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100000]">
      <div className="bg-white p-5 rounded-lg w-[1200px] relative">
        <button
          className="absolute top-0 right-0 m-2 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex gap-9">
          <div>
            <img
              src={product?.thumbnail}
              alt={product?.title}
              className="h-[600px] w-[400px] object-cover"
            />
          </div>
          <div className="border h-[600px] w-[700px] p-5">
            <p className="text-4xl font-bold">{product?.title}</p>
            <div>
              <p className="text-xl mt-4 font-bold">{product?.description}</p>
              <p className="text-xl mt-4">
                Availability: <span className="text-green-500">In Stock</span>
              </p>
              <p className="text-xl mt-3">Vendor: House of EM5</p>
              <p className="text-xl mt-3">SKU: EMRSWOODY</p>
            </div>
            <div className="flex gap-4 mt-7">
              <div className="text-3xl font-bold">
                {product?.discountPercentage && (
                  <h3 className="font-bold">
                    Rs.{" "}
                    {product?.price -
                      (product?.discountPercentage / 100) * product?.price}
                  </h3>
                )}
              </div>
              <div>
                <strike className="text-gray-300 text-3xl font-bold">
                  {product?.price}
                </strike>
              </div>
            </div>
            <div className="flex gap-2 mt-10">
              {["10ml", "50ml", "100ml", "150ml"].map((e, index) => {
                return (
                  <div
                    className={`${
                      product?.size?.includes(e)
                        ? "border-black"
                        : "border-gray-300 text-gray-300"
                    }`}
                    key={index}
                  >
                    <p className="font-bold">Size: {e}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4">
              {product?.sizes?.map((size) => (
                <button
                  key={size}
                  className="border border-black h-[40px] w-[250px] text-lg"
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex gap-5 mt-4">
              <div className="border border-1 flex items-center justify-between h-[50px] w-[120px] p-2">
                <button className="text-3xl" type="button" onClick={minusCount}>
                  -
                </button>
                <span className="text-2xl">{count}</span>
                <button className="text-2xl" type="button" onClick={plusCount}>
                  +
                </button>
              </div>
              <div>
                <button className="bg-black h-[50px] w-[320px] text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
