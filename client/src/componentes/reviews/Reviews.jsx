import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Reviews.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ReviewCard from "./ReviewCard";

import { getReviewById } from "../../redux/Actions";
// import { postUsers } from '../../redux/Actions';
// import ReviewsForm from './ReviewsForm'

function Reviews({ productId }) {
  const getReviewById2 = useSelector((state) => state.getReviewById);
  const dispatch = useDispatch();

  // useEffect(() => {const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setUserComment((prevComment) => ({
  //     ...prevComment,
  //     [name]: value,
  //     score: name === "score" ? parseInt(value) : prevComment.score,
  //   }));
  // };
  //   dispatch(getReviewById(productId));
  // }, [dispatch]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        await dispatch(getReviewById(productId));
        // console.log(productDetails[0].id);
      } catch (error) {
        // Manejar el error aquí si es necesario
        console.error("Error fetching review:", error);
      }
    };

    fetchReview();
  }, [dispatch]);


  return (
    <div className="review-container">
      <div className="review">
        {getReviewById2.length > 0 ? (
          getReviewById2.map((re) => (
            <ReviewCard
              key={re.id}
              title={re.title}
              score={re.score}
              fullName={re.fullName}
              description={re.description}
              productId={productId}
            />
          ))
        ) : (
          <p>No hay reseñas disponibles.</p>
        )}
      </div>

      {/* <div className="btn-container">
        <div className="btn-container2">
          <NavLink to="/products/reviews">
            <button>Dejanos tu comentario!</button>
          </NavLink>
        </div>
        <div></div>
        {userId.length === 0 ? (
          <NavLink to='/create'>
            <button>Debes Iniciar sesion</button>
          </NavLink>
        ) : (
          <NavLink to='/review'>
            <button>Enviar comentario</button>
          </NavLink>
        )}
      </div> */}
    </div>
  );
}

export default Reviews;
