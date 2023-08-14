// import { NavLink } from 'react-router-dom';
import React from 'react';

export default function ReviewCard({
  userId,
  description,
  score,
  title,
  productId,
}) {
  return (
    // <Link to={`/reviews/${id}`}>
    <div>
      <div>
        <p>{title}</p>
        <p>{userId}</p>
        <p>{description}</p>
        <p>{score}</p>
        <p>{productId}</p>
      </div>
    </div>
    // </Link>
  );
}
