import React, { Component } from "react";
import Slider from "react-slick";


export default function AboutUs() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="bg-[url('../../../../public/assets/about_us_newpng.png')] flex justify-center  items-center w-[100vw] p-5 gap-2">
      <div className=" text-5xl font-semibold text-white whitespace-nowrap">
        We Are
      </div>
      <div className="block justify-start items-start text-center">
        <Slider {...settings} className="block max-w-[230px]">
          <div >
            <h1 className="text-3xl font-bold lowercase">BOLD</h1>
            <h2 className="font-medium">But never curt</h2>
          </div>
          <div className="">
            <h1 className="text-3xl font-bold lowercase">explicit</h1>
            <h2 className="font-medium">But never assertive</h2>
          </div>
          <div className="">
            <h1 className="text-3xl font-bold lowercase">unapologetic</h1>
            <h2 className="font-medium">But never disrespectful</h2>
          </div>
          <div className="">
            <h1 className="text-3xl font-bold lowercase">rebellious</h1>
            <h2 className="font-medium">But never scandelious</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
}
