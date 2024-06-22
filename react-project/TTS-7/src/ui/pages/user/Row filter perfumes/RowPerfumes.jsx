import { Rating } from "flowbite-react";
import React from "react";

export default function RowPerfumes() {
  return (
    <div className="flex gap-6   max-w-[1300px]">
      <div className="group/imgDiv relative  ">
        <img
          src=" https://www.houseofem5.com/cdn/shop/files/Don-Notes_360x.jpg?v=1706772321"
          alt=""
          srcSet=""
          className="absolute top-0 img-fluid opacity-0 group-hover/imgDiv:opacity-100 transition-opacity duration-700  ease-in-out h-[250px] w-[250px]"
        />

        <img
          onClick={() => navigate()}
          alt=""
          src="https://www.houseofem5.com/cdn/shop/files/Don_800x.jpg?v=1706772320"
          srcSet=""
          className=" top-0 img-fluid group-hover/imgDiv:opacity-0 transition-opacity duration-700 ease-in-out  h-[250px] w-[250px]"
        />
      </div>
      <div>
        <p className=" text-lg " style={{ fontWeight: "bold" }}>
          EM5™ Flora EDP Perfume for Women | Eau de Parfum for All Day Wear |
          Strong and Long Lasting Spray | Fruity Floral Citrus Fresh Fragrance |
          Luxury Gift for Her | 50 ml
        </p>

        <div className=" flex mt-6 align-content-center  ">
          <Rating className="">
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
          </Rating>
          <div className=" px-2">
            <p>(27)</p>
          </div>
          <div className="px-6 text-red-500 ">
            <p className=" text-sm" style={{ fontWeight: "bold" }}>
              Verified Purchase
            </p>
          </div>
        </div>

        <p
          className="text-xl mt-2 text-red-500"
          style={{ fontWeight: "bold " }}
        >
          Rs.499.00
        </p>

        <p className=" mt-9 text-lg">
          WHAT IS IT? SCENTED LOVE! It’s your regular perfume turned solid. The
          best and the quickest way to smell good on the go! HOW DID WE MAKE IT?
          Handmade and hand poured with care....
        </p>
      </div>
    </div>
  );
}
