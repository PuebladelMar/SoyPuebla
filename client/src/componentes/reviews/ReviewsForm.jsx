import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { postReviews, getProducts, getReviewById } from "../../redux/Actions";
import "./ReviewsForm.css";
import { useEffect, useState } from "react";

function ReviewsForm({ productId, handleLoginClick }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const userById = useSelector((state) => state.userById);
  const [userComment, setUserComment] = useState({
    score: "",
    userId: "",
    description: "",
    productId: "",
    fullName: "",
  });

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getReviewById(productId));
    if (userId.length > 0) {
      setUserComment((prevUserComment) => ({
        ...prevUserComment,
        userId: userId,
        productId: productId,
        fullName: userById?.user?.fullName,
      }));
    }
  }, [dispatch, userId, productId, userById]);

  const handleScoreChange = (score) => {
    setUserComment({
      ...userComment,
      score: score,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserComment({
      ...userComment,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (userId) {
      dispatch(postReviews(userComment));
      setUserComment({
        score: "",
        userId: userId,
        description: "",
        productId: productId,
        fullName: userById.user.fullName,
      });
      handleLoginClick();
    }
  };

  return (
    <div className="review-form-container">
      <h2>¡Dejanos tu comentario!</h2>
      <form className="review-form">
        <label htmlFor="comment">Comentario:</label>
        <textarea
          className="textarea"
          type="text"
          style={{ resize: "none" }}
          value={userComment.description}
          onChange={handleChange}
          name="description"
        />
        <label htmlFor="rating">Calificación (1-5):</label>
        <div className="rating-buttons">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              className={`rating-button ${
                userComment.score === value ? "selected-star" : ""
              }`}
              onClick={() => handleScoreChange(value)}
            >
              <FaStar
                size={25}
                color={userComment.score >= value ? "gold" : "gray"}
                style={{ margin: "0" }}
              />
            </button>
          ))}
        </div>
        {userId.length === 0 ? (
          <div className="btn-container">
            <button
              className="btn-iniciar-sesion"
              onClick={handleLoginClick}
              style={{
                backgroundColor: "rgb(81, 127, 127)",
                color: "rgb(255, 255, 255)",
              }}
            >
              Enviar Reseña
            </button>
          </div>
        ) : (
          <div className="btn-container">
            <button
              className="btn-iniciar-sesion"
              type="submit"
              onClick={handleSubmit}
              style={{
                backgroundColor: "rgb(81, 127, 127)",
                color: "rgb(255, 255, 255)",
              }}
            >
              Enviar Reseña
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ReviewsForm;
