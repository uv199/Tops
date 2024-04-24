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
import CardCom from "../../../../../Component/Card/CardCom";

export default function Giftedslider({ data }) {
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
          {data?.map?.((e) => {
            return (
              <SwiperSlide>
                <CardCom />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
