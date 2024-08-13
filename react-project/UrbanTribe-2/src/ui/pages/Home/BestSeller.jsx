import React from "react";
import best1 from "../../../../public/best2.webp";
import best2 from "../../../../public/best2.webp";
import best3 from "../../../../public/best3.webp";
import best4 from "../../../../public/best4.webp";
import best5 from "../../../../public/best5.webp";
import best6 from "../../../../public/best6.webp";
import Slider from "react-slick";

import CardCom from "../../components/Cards/Card";
const data = [
  {
    id: 1,
    title: "Fitpack Neo",
    category: "Bag",
    price: 499.0,
    image: best1,
    image2: best2,
    old_price: 600,
    rating: 4,
    discount: "37%",
  },
  {
    id: 2,
    title: "Amigo Backpack",
    category: "Bag",
    price: 1899.0,
    image: best2,
    old_price: 3233.0,
    rating: 5,
    discount: "14%",
  },
  {
    id: 3,
    title: "Fitpack Neo",
    category: "Bag",
    price: 1899.0,
    image: best3,
    old_price: 2899.0,
    rating: 4,
    discount: "10%",
  },
  {
    id: 4,
    title: "Caprio",
    category: "Bag",
    price: 999.0,
    image: best4,
    old_price: 1850.0,
    rating: 4,
    discount: "35%",
  },
  {
    id: 5,
    title: "Neo Armor Dust / Rain Cover for Backpack",
    category: "Bag",
    price: 1599.0,
    image: best5,
    old_price: 2399.0,
    rating: 5,
    discount: "20%",
  },
  {
    id: 6,
    title: "Accelerator",
    category: "Bag",
    price: 1599.0,
    image: best6,
    old_price: 2399.0,
    rating: 5,
    discount: "20%",
  },
];

export default function OurCollection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
    beforeChange: (current, next) => {
      setOldSlide(2);
      setActiveSlide(3);
    },
    afterChange: (current) => setActiveSlide2(current),
  };

  return (
    <div className="mx-[60px]">
      <div className=" flex flex-col justify-center items-center px-4 lg:px-20 lg:py-10 gap-6">
        <h4 className="container">BEST SELLER</h4>
        <div className="w-full h-fit">
          <Slider {...settings}>
            {data.map((item, index) => (
              <CardCom key={index} data={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
