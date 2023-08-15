// import { NavLink } from 'react-router-dom';
import "./ReviewCard.css"

export default function ReviewCard({ score, description, fullName }) {
  console.log(fullName);
  return (
    // <Link to={`/reviews/${id}`}>
    <div className="container">
      <div>
        <h1>{fullName}</h1>
        <h2>Valoracion</h2>
        <span>{score}</span>
        <h2>Descripcion</h2>
        <span>{description}</span>
      </div>
    </div>
    // </Link>
  );
}
