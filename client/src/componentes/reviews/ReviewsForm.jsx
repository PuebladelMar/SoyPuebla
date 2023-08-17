import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postReviews, getProducts, getReviewById } from "../../redux/Actions";
import "./ReviewsForm.css";
import { useEffect, useState } from "react";

function ReviewsForm({ productId }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const allUsers = useSelector((state) => state.allUsers);
  const [isReady, setIsReady] = useState(false);
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
        fullName: allUsers.user.fullName,
      }));
    }
  }, [dispatch, userId, productId, allUsers]);
  console.log(isReady);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserComment({
      ...userComment,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    if (userId) {
      event.preventDefault();
      dispatch(postReviews(userComment));
      setUserComment({
        score: "",
        userId: userId,
        description: "",
        productId: productId,
        fullName: allUsers.user.fullName,
      });
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
        <input
          className="rating"
          style={{ width: "4rem" }}
          type="number"
          min="1"
          max="5"
          value={userComment.score}
          onChange={handleChange}
          name="score"
        />
        {userId.length === 0 ? (
          <div className="btn-container">
            <Link to="https://worthy-insect-17.accounts.dev/sign-in">
              <button className="btn-iniciar-sesion">Inicia sesion</button>
            </Link>
          </div>
        ) : (
          <button className="boton" type="submit" onClick={handleSubmit}>
            Enviar Reseña
          </button>
        )}
      </form>
    </div>
  );
}

export default ReviewsForm;
