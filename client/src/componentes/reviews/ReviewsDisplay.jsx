// Componente donde deseas mostrar las reseñas

import { useSelector } from 'react-redux';

function ReviewsDisplay() {
  const reviews = useSelector((state) => state.reviews);

  return (
    <div>
      <h2>Reseñas de Usuarios</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Calificación: {review.score}</p>
          <p>Comentario: {review.description}</p>
          {/* Mostrar más detalles de la reseña si es necesario */}
        </div>
      ))}
    </div>
  );
}

export default ReviewsDisplay;
