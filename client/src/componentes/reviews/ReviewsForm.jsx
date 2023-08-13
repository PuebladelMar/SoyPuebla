


import { useDispatch, useSelector } from 'react-redux';
import { postReviews, getProducts } from '../../redux/Actions';
import './ReviewsForm.css'; 
import { useEffect, useState } from 'react';

function ReviewsForm( {productList} ) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const allUsers = useSelector((state) => state.allUsers);
  const allProducts = useSelector((state) => state.allProducts);

useEffect(()=>{
  dispatch(getProducts());
},[dispatch]);

  const [userComment, setUserComment] = useState({
    // title: '',
    score: '',
    userId: userId,
    description: '',
    // productId: '', 
  });

  const handleChange = (event) => {
    const { name, value } = event.target; // Usamos name en lugar de title
    setUserComment({
      ...userComment,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      // userComment.title ||
      !userComment.score ||
      !userComment.userId ||
      !userComment.description
      
    ) {
      alert('Por favor llena todos los campos');
    } else {
      dispatch(postReviews(userComment));
      setUserComment({
        title: '',
        score: '',
        userId: userId,
        description: '',
        // productId: '',
      });
    }
console.log(userComment);
  };



  return (
    <div className='review-form-container'>
      <h2>Dejanos tu comentario!</h2><br></br>
      <form className='review-form'>
      <label>Selecciona un Producto:</label>
      <select>
  {allProducts.map((product) => (
    <option key={product.id} value={product.id}>
      {product.name}
    </option>
  ))}
</select>
        <label htmlFor='comment'>Comentario:</label>
        <input
          type='text'
          value={userComment.description}
          onChange={handleChange}
          name='description'
          required
        />
        <label htmlFor='rating'>Calificación (1-5):</label>
        <input
          type='number'
          min='1'
          max='5'
          value={userComment.score}
          onChange={handleChange}
          name='score'
          required
        />
        {/* Mostrar el userId prellenado en un campo oculto */}
        <input type='hidden' value={userComment.userId} name='userId' />
        <button className='boton'
          type='submit'
          onClick={handleSubmit}
        >
          Enviar Reseña
        </button>
      </form>
    </div>
  );
}

export default ReviewsForm;
