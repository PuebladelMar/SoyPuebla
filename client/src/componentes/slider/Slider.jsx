// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import image1 from "../../assets/images/imagenesCarrete/image1.jpg";
import image2 from "../../assets/images/imagenesCarrete/image2.jpg";
import image3 from "../../assets/images/imagenesCarrete/image3.jpg";
import image4 from "../../assets/images/imagenesCarrete/image4.jpg";

// import { Link } from "react-router-dom";
import Card from "../card/Card";

function Slider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={-10}
        slidesPerView={2}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="img-slider">
            <img
              src={image1}
              alt="Imagen 1"
              style={{
                width: "30rem",
                height: "15rem",
                borderRadius: "2px",
                opacity: "0.85",
                transform: "scale(1)",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-slider">
            <img
              src={image2}
              alt="Imagen 2"
              style={{
                width: "30rem",
                height: "15rem",
                borderRadius: "2px",
                opacity: "0.85",
                transform: "scale(1)",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-slider">
            <img
              src={image3}
              alt="Imagen 3"
              style={{
                width: "30rem",
                height: "15rem",
                borderRadius: "2px",
                opacity: "0.85",
                transform: "scale(1)",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-slider">
            <img
              src={image4}
              alt="Imagen 4"
              style={{
                width: "30rem",
                height: "15rem",
                borderRadius: "2px",
                opacity: "0.85",
                transform: "scale(1)",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </SwiperSlide>
        <div
          className="swiper-button-prev"
          style={{ color: "whitesmoke" }}
        ></div>{" "}
        <div
          className="swiper-button-next"
          style={{ color: "whitesmoke" }}
        ></div>{" "}
        {/* <Card/> */}
      </Swiper>
      
    </div>
  );
}

export default Slider;
