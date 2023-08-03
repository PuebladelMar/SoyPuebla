// import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider(){
    return(
        <div>
            <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={2}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='./images/slider/calza1.webp' ></img></SwiperSlide>
      <SwiperSlide><img src='./images/slider/calza2.webp' ></img></SwiperSlide>
      <SwiperSlide><img src='./images/slider/top1.jpeg' ></img></SwiperSlide>
      <SwiperSlide><img src='./images/slider/top2.webp' ></img></SwiperSlide>
      <SwiperSlide><img src='./images/slider/top3.jpeg' ></img></SwiperSlide>
      ...
    </Swiper>
        </div>
    )
}

export default Slider;