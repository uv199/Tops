// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="../../../../public/Main Slider/chains-desktop.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../../../public/Main Slider/earrings-desktop.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../../../public/Main Slider/Exchange.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../../../public/Main Slider/glamdays-desktop.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../../../public/Main Slider/rivaah-rb-desktop.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../../../public/Main Slider/rings-desktop.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../../../public/Main Slider/mangalsutra-desktop.jpg" alt="" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
