import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Reviews.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviewById, deleteReviews } from "../../redux/Actions";
import { RiDeleteBin6Line } from "react-icons/ri";

function Reviews({ productId }) {
  const getReviewById2 = useSelector((state) => state.getReviewById);
  const userById = useSelector((state) => state.userById);
  const dispatch = useDispatch();
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        await dispatch(getReviewById(productId));
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    };
    fetchReview();
  }, [dispatch]);

  const handleShowMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3);
    setShowAllReviews(true);
  };

  const handleHideReviews = () => {
    setVisibleReviews(3);
    setShowAllReviews(false);
  };

  const handleDeleteReviews = async (id) => {
    await dispatch(deleteReviews(id));
    location.reload();
    await dispatch(getReviewById(productId));
  };

  return (
    <div className="review-container">
      <div className="review">
        {getReviewById2.length > 0 ? (
          getReviewById2
            .slice(0, showAllReviews ? getReviewById2.length : visibleReviews)
            .map((re) => (
              <div key={re.id} className="review-card">
                <ReviewCard
                  title={re.title}
                  score={re.score}
                  fullName={re.fullName}
                  description={re.description}
                  productId={productId}
                />
                {(userById?.user?.userRole === "administrator" ||
                  userById?.user?.userRole === "superadministrator") && (
                  <button
                    className="delete-color"
                    type="submit"
                    onClick={() => handleDeleteReviews(re.id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                )}
              </div>
            ))
        ) : (
          <p>No hay reseñas disponibles.</p>
        )}
        {getReviewById2.length > visibleReviews && !showAllReviews && (
          <button className="show-more-button" onClick={handleShowMoreReviews}>
            Ver más reseñas
          </button>
        )}
        {showAllReviews && (
          <button className="show-more-button" onClick={handleHideReviews}>
            Ocultar reseñas
          </button>
        )}
      </div>
    </div>
  );
}

export default Reviews;
