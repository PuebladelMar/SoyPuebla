// import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; 

// import { Link } from "react-router-dom";
import Card from '../card/Card';


function Slider(){
    return(
        <div>
            <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
       spaceBetween={50}
       slidesPerView={2}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       autoplay={{ delay: 3000 }} // Cambia el intervalo de tiempo según tus preferencias (en milisegundos)
       loop={true} // Habilita el bucle continuo

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        {/* <img src='./images/slider/calza1.webp' ></img> */}
        <Card/>
        </SwiperSlide>
      <SwiperSlide><img src='./images/slider/calza2.webp' ></img></SwiperSlide>
      <SwiperSlide><img src='./images/slider/top1.jpeg' ></img></SwiperSlide>
      <SwiperSlide><img src='./images/slider/top2.webp' ></img></SwiperSlide>
      <SwiperSlide><img  src='./images/slider/top3.jpeg' ></img></SwiperSlide>
      ...
    </Swiper>
        </div>
    )
}

export default Slider;