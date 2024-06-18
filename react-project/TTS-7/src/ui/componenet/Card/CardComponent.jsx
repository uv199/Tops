// import { RatingStar } from "flowbite-react";
import { Rating } from "flowbite-react";
import { Eye, ShoppingCart } from "lucide-react";
import React from "react";
import { Button } from "reactstrap";
import "./perfume.css";

export default function CardComponent() {
  
  return (
    <div className="bg-red-500 imgsmain bg-body-secondary">
      <div className="group/imgDiv relative">
        <img
          src=" https://www.houseofem5.com/cdn/shop/files/Don-Notes_360x.jpg?v=1706772321"
          alt=""
          srcSet=""
          className="absolute top-0 img-fluid opacity-0 group-hover/imgDiv:opacity-100 transition-opacity duration-700  ease-in-out"
        />

        <img
        onClick={()=>navigate()}
          alt=""
          src="https://www.houseofem5.com/cdn/shop/files/Don_800x.jpg?v=1706772320"
          srcSet=""
          className=" top-0 img-fluid group-hover/imgDiv:opacity-0 transition-opacity duration-700 ease-in-out"
        />
      </div>
      <div className=" mt-3 eye_cartbtn d-flex align-items-center justify-content-center">
        <Button className="w-[49%] flex justify-around">
          <span>View</span>
          <Eye />
        </Button>
        <Button className="w-[49%] flex justify-around">
          <span>Add Cart</span>
          <ShoppingCart />
        </Button>
      </div>

      <div className="text">
        <p>
          Em5 Woody oud unisex <br /> perfume for men & women{" "}
        </p>
      </div>

      <div className="Rate ">
        <div className=" pt-5">
          <Rating className="rating">
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
            <Rating.Star color=" gold" />
          </Rating>
        </div>
        <div>
          <p>(27)</p>
        </div>
        <div className="veryfie">
          <p>Verified Purchase</p>
        </div>
      </div>
      <div className="textRs">
        <div>
          <p>Rs.499.00, 899.00</p>
        </div>
        <div className="strike">
          <strike>Rs.1,499.00</strike>
        </div>
      </div>

      <div className="btn  pt-3 " style={{ marginLeft: "80px" }}>
        <Button>Select Option</Button>
      </div>
    </div>
  );
}
