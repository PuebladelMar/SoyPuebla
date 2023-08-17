import { useDispatch, useSelector } from "react-redux";
import { postReviews, getProducts } from "../../redux/Actions";
import "./ReviewsForm.css";
import { useEffect, useState } from "react";
import { Typography, Rating } from "@mui/material";

function ReviewsForm({ productId }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const allProducts = useSelector((state) => state.allProducts);
  const allUsers = useSelector((state) => state.allUsers);
  const [score, setScore] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [userComment, setUserComment] = useState({
    score: "",
    userId: userId,
    description: "",
    productId: productId,
    fullName: allUsers.user.fullName,
  });

  const handleChange = (event) => {
    const { name, value } = event.target; // Usamos name en lugar de title
    setUserComment({
      ...userComment,
      [name]: value,
      score: score,
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
      setScore(0);
    }
  };

  return (
    <div className="review-form-container">
      <h2>Dejanos tu comentario!</h2>
      <br></br>
      <form className="review-form">
        <label>Selecciona un Producto:</label>
        <select
          name="productId"
          value={userComment.productId}
          onChange={handleChange}
        >
          {allProducts.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <label htmlFor="comment">Comentario:</label>
        <input
          type="text"
          value={userComment.description}
          onChange={handleChange}
          name="description"
          required
        />
        <label htmlFor="rating">Calificación (1-5):</label>
        {/* <input
          type="number"
          min="1"
          max="5"
          value={userComment.score}
          onChange={handleChange}
          name="score"
          required
        /> */}
        <Typography className=" coment" component="legend" value={userComment.score + 1}></Typography>
        <Rating className="stars-container"
          name="simple-read-only"
          value={score}
          onChange={(event, newValue) => {
            setScore(newValue);
          }}
        />
        
        <input type="hidden" value={userComment.userId} name="userId" />
        <button className="boton" type="submit" onClick={handleSubmit}>
          Enviar Reseña
        </button>
      </form>
    </div>
  );
}

export default ReviewsForm;
