// const ReviewsForm = () => {
//   return (
//   <div>
//     <form>
//         <label htmlFor=""></label>
//     </form>
//   </div>
//   )
// };

// export default ReviewsForm;

// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postReviews } from '../../redux/Actions';
import './ReviewsForm.css'; // Asegúrate de importar tus estilos CSS aquí
import { useState } from 'react';

function ReviewsForm() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);

  const [userComment, setUserComment] = useState({
    title: '',
    score: '',
    userId: userId,
    description: '',
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
      !userComment.title ||
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
      });
    }
  };

  return (
    <div className='review-form-container'>
      <h2>Escribe tu Reseña</h2>
      <form className='review-form'>
        <label>Nombre del Producto:</label>
        <input
          type='text'
          value={userComment.title}
          onChange={handleChange}
          name='title'
          required
        />
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
        <button
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
