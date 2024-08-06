import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../../../public/assets/web_site_6261a0b2-3916-47ac-b085-0a457d82877d.jpg";
export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-[1375px] m-auto rounded mb-12">
      <Slider {...settings}>
        <img src={image} alt="" className="w-full" />
        <img src={image} alt="" className="w-full" />
        <img src={image} alt="" className="w-full" />
        <img src={image} alt="" className="w-full" />
      </Slider>
    </div>
  );
}
