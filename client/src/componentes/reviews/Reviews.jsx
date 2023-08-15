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
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { getReviews } from '../../redux/Actions';
// import { postUsers } from '../../redux/Actions';
// import ReviewsForm from './ReviewsForm'



function Reviews() {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

useEffect(()=>{
  console.log('Before dispatching getReviews:', reviews);
  dispatch(getReviews())
},[getReviews])


console.log('After dispatching getReviews:', reviews);
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}

        className="swiperFooter"

        breakpoints={{
          500: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className='swiperSlide'>
          {reviews.length > 0 ? (
            reviews.map((re) => (
              <ReviewCard
                key={re.id}
                // productId={re.productId}
                title={re.title}
                userId={re.userId}
                score={re.score}
                description={re.description}
              />
            ))
          ) : (
            <p>No hay reseñas disponibles.</p>
          )}
        </SwiperSlide>
      </Swiper>

      <div className='btn-container'>
        <div className='btn-container2'>
          <NavLink to='/products/reviews'>
            <button>Dejanos tu comentario!</button>
          </NavLink>
        </div>
        <div></div>
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
