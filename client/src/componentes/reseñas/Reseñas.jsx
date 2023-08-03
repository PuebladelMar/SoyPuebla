import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './Reseñas.css';

function Reseñas(){
    return(
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide className='swiperSlide'>
                    <img className='imagen' src='./src/assets/mujer.jpeg' alt="Imagen 1" />
                    <div className="review">
                    <h2 className='th3'>Nombre:</h2>
                        <h3 className='th3'>Producto 1</h3>
                        <p className='parrafo'>Esta es una reseña sobre el producto 1.</p>
                        <div className="stars">
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <img className='imagen' src='./src/assets/mujer2.png' alt="Imagen 2" />
                    <div className="review">
                    <h2 className='th3'>Nombre:</h2>
                        <h3 className='th3'>Producto 2</h3>
                        <p className='parrafo'>Lorem, ipsum dolor sit amet itecto ipsam impedit voluptatibus atque vitae necessitatibus qui aliquid quae, eos eaque velit eligendi pariatur?</p>
                        <div className="stars">
                            ⭐⭐⭐⭐
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <img className='imagen' src='./src/assets/mujer3.jpeg' alt="Imagen 3" />
                    <div className="review">
                    <h2 className='th3'>Nombre:</h2>
                        <h3 className='th3'>Producto 3</h3>
                        <p className='parrafo'>Esta es una reseña sobre el producto 3.</p>
                        <div className="stars">
                            ⭐⭐⭐
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Reseñas;
