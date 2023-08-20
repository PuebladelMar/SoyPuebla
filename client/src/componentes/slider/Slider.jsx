import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import image1 from "../../assets/images/imagenesCarrete/Yoga 1.png";
import image2 from "../../assets/images/imagenesCarrete/Modelos 1.png";
import image3 from "../../assets/images/imagenesCarrete/Sport 1.png";
import image4 from "../../assets/images/imagenesCarrete/Muscle 1.png";

import "./Slider.css"

function Slider() {
  return (
    <div className="slider-container">
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={-10}
      slidesPerView={1}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      loop={true}
    >
        <SwiperSlide>
          <div className="img-slider">
            <img
              src={image1}
              alt="Imagen 1"
              style={{
                // width: "auto",
                height: "100%",
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
                width: "auto",
                height: "100%",
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
                width: "auto",
                height: "100%",
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
                width: "auto",
                height: "100%",
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
      </Swiper>
    </div>
  );
}

export default Slider;
