import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './Reviews.css';
import { NavLink } from 'react-router-dom';
// import ReviewsForm from './ReviewsForm'
import { useSelector, useDispatch } from 'react-redux';
// import { postUsers } from '../../redux/Actions';
import { useState, useEffect } from 'react';

function Reviews() {
  const userId = useSelector((state) => state.userId);
  // console.log(userId);


  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        className='swiperFooter'
        breakpoints={{
          // Cuando el ancho de la ventana es menor o igual a 600px, mostrar solo 1 tarjeta
          500: {
            slidesPerView: 2,
            // spaceBetween: 5,
          },
        }}
      >
        <SwiperSlide className='swiperSlide'>
          <img
            className='imagen'
            src='/src/assets/images/imagesReseñas/mujer.jpeg'
            alt='Imagen 1'
          />
          <div className='review'>
            <h2 className='th3'>Nombre:</h2>
            <h3 className='th3'>Producto 1</h3>
            <p className='parrafo'>Esta es una reseña sobre el producto 1.</p>
            <div className='stars'>⭐⭐⭐⭐⭐</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img
            className='imagen'
            src='/src/assets/images/imagesReseñas/mujer.jpeg'
            alt='Imagen 1'
          />
          <div className='review'>
            <h2 className='th3'>Nombre:</h2>
            <h3 className='th3'>Producto 1</h3>
            <p className='parrafo'>Esta es una reseña sobre el producto 1.</p>
            <div className='stars'>⭐⭐⭐⭐⭐</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img
            className='imagen'
            src='/src/assets/images/imagesReseñas/mujer.jpeg'
            alt='Imagen 1'
          />
          <div className='review'>
            <h2 className='th3'>Nombre:</h2>
            <h3 className='th3'>Producto 1</h3>
            <p className='parrafo'>Esta es una reseña sobre el producto 1.</p>
            <div className='stars'>⭐⭐⭐⭐⭐</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='btn-container'>
        <div className='btn-container2'>
      <NavLink to='/products/reviews'>
          <button>Dejanos tu comentario!</button>
        </NavLink>
        </div>
      <div>

      </div>
        {/* {userId.length === 0 ? (
          <NavLink to='/create'>
            <button>Debes Iniciar sesion</button>
          </NavLink>
        ) : (
          <NavLink to='/review'>
            <button>Enviar comentario</button>
          </NavLink>
        )} */}
      </div>
    </div>
  );
}

export default Reviews;
