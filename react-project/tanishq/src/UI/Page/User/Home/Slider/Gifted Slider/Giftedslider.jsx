import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import GiftCard from "../../../../../Component/Card/GiftCard";
import { CardData } from "../../../../../Component/Card/Data";




export default function Giftedslider() {
  const [swiperRef, setSwiperRef] = useState(null);


  return (
    <>
      <div className=" my-[1rem] px-20">
      <Swiper
  onSwiper={setSwiperRef}
  slidesPerView={4}
  // centeredSlides={true}
  spaceBetween={10}
  pagination={{
    type: "fraction",
  }}
  navigation={true}
  modules={[Navigation]}
  className="mySwiper"
>
  {CardData.map((gift, index) => (
    <SwiperSlide key={index}>
      <GiftCard
        title={gift.title}
        img={gift.img}
        price={gift.price}
      />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </>
  );
}