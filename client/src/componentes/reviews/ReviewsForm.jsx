import { useDispatch, useSelector } from "react-redux";
import { postReviews, getProducts, getReviewById } from "../../redux/Actions";
import "./ReviewsForm.css";
import { useEffect, useState } from "react";


function ReviewsForm({ productId }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const allProducts = useSelector((state) => state.allProducts);
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getReviewById(productId));
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
      <h2>Dejanos tu comentario!</h2>
      <br></br>
      <form className="review-form">
        {/* <label>Selecciona un Producto:</label> */}
        {/* <select
          name="productId"
          value={userComment.productId}
          onChange={handleChange}
        >
          {allProducts.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select> */}
        <label htmlFor="comment">Comentario:</label>
        <input
          type="text"
          value={userComment.description}
          onChange={handleChange}
          name="description"
          required
        />
        <label htmlFor="rating">Calificación (1-5):</label>
        <input
          type="number"
          min="1"
          max="5"
          value={userComment.score}
          onChange={handleChange}
          name="score"
          required
        />
        {/* Mostrar el userId prellenado en un campo oculto */}
        <input type="hidden" value={userComment.userId} name="userId" />
        <button className="boton" type="submit" onClick={handleSubmit}>
          Enviar Reseña
        </button>
      </form>
    </div>
  );
}

export default ReviewsForm;
