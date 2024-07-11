// import { RatingStar } from "flowbite-react";
import { Rating } from "flowbite-react";
import { Eye, ShoppingCart } from "lucide-react";
import React from "react";
import { Button } from "reactstrap";
import "./perfume.css";
import { useNavigate } from "react-router-dom";

export default function CardComponent({ product }) {
  const navigate = useNavigate();

  const selectOption = () => {
    navigate("/product");
  };

  const viewOption = () => {
    navigate("/view");
  };
  return (
    <div className="group/main imgsmain bg-body-secondary text-sm border">
      <div className="relative overflow-hidden">
        <div className="group/imgDiv relative">
          <img
            src={
              " https://www.houseofem5.com/cdn/shop/files/Don-Notes_360x.jpg?v=1706772321"
            }
            alt=""
            srcSet=""
            className="absolute top-0 img-fluid opacity-0 group-hover/imgDiv:opacity-100 transition-opacity duration-700  ease-in-out"
          />

          <img
            onClick={() => navigate()}
            alt=""
            src={product?.thumbnail}
            srcSet=""
            className="top-0  h-[250px] img-fluid group-hover/imgDiv:opacity-0 transition-opacity duration-700 ease-in-out"
          />
        </div>
        <div className="absolute bottom-0 mt-3 eye_cartbtn d-flex align-items-center w-full justify-content-center ">
          <Button
            className=" text-black ring-1 ring-black bg-transparent opacity-0 group-hover/main:opacity-100 flex w-[45%] justify-around btn !duration-500 !transition-all"
            onClick={viewOption}
          >
            <span>View</span>
            <Eye />
          </Button>
          <Button className="text-black ring-1 ring-black bg-transparent text-bl  opacity-0 group-hover/main:opacity-100 flex w-[45%] justify-around btn !duration-500 !transition-all">
            <span>Add Cart</span>
            <ShoppingCart />
          </Button>
        </div>
      </div>

      <div className="text-sm w-full">
        <p>
          Em5 Woody oud unisex <br /> perfume for men & women{" "}
        </p>
      </div>

      <div className="Rate ">
        <div className=" ">
          <Rating className="rating">
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
          </Rating>
        </div>
        <div className="  ">
          <p>(27)</p>
        </div>
      </div>
      <div className="flex justify-around mt-2 ">
        <div>
          <p>Rs.499.00</p>
        </div>
        <div className="strike text-sm">
          <strike className="fs-5">Rs.1,499.00</strike>
        </div>
      </div>

      <div className="mt-5 ">
        <Button className="btn w-full" onClick={selectOption}>
          Select Option
        </Button>
      </div>
    </div>
  );
}
