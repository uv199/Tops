import React, { useState } from "react";

export default function View() {
  let [count, setCount] = useState(1);

  const minusCount = () => {
    setCount(count - 1);
  };
  const plusCount = () => {
    setCount(count + 1);
  };
  const incCount = () => {
    setCount((lastval) => lastval + 1);
  };
  return (
    <div className="flex gap-5    m-auto  w-[1200px]">
      <div className="">
        <img
          src="https://www.houseofem5.com/cdn/shop/files/Don_800x.jpg?v=1706772320"
          className=" h-[600px] w-[400px]"
        />
      </div>

      <div className=" border-1 h-[600px] w-[700px]">
        <p className="text-4xl fw-bolder" >
          EM5™ Don Unisex Perfume | Eau De Parfum Spray for Men & Women | Woody
          Powdery Warm Spicy Fragrance Accords | Luxury Gift for Him / Her |
          Sizes Available: 50 ml / 15 ml
        </p>
        <div className="">
          <p className=" text-xl mt-4">
            Availability: <span style={{color:"green"}}>In Stock</span>{" "}
          </p>
          <p className=" text-xl mt-3">Vendor: House of EM5</p>
          <p className=" text-xl mt-3">SKU: EMRSWOODY</p>
        </div>
        <div className="flex gap-4 mt-7">
         <p className="text-3xl " style={{fontWeight:"bold"}}>Rs. 899.00</p>
          <div>
            <strike className="text-gray-300 text-3xl">
              <h3  style={{fontWeight:"bold"}}>Rs. 799.00</h3>
            </strike>
          </div>
        </div>
            <p className=" mt-10" style={{fontWeight:"bold"}}>Size: Perfume Spray (50 ml)</p>
            <div className="mt-4">
                <button className=" border border-black h-[40px] w-[250px] text-lg">PERFUME SPRAY (50ML)</button>
                <button className=" border border-black h-[40px] w-[250px] text-lg mx-5">PERFUME SPRAY (15ML)</button>
                
            </div>
        <div className="flex gap-5 mt-4 ">
          <div className="border border-1 flex align-item-center justify-between h-[50px] w-[120px] p-2">
            <button className="text-3xl" type="button" onClick={() => minusCount()}>
              -
            </button>
            <button className="text-2xl " type="button" onClick={() => incCount()}>
              {count}
            </button>
            <button className="text-2xl" type="button" onClick={() => plusCount()}>
              +{" "}
            </button>
          </div>
          <div className="">
            <button className="bg-black h-[50px] w-[320px] text-white">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
