// import { NavLink } from 'react-router-dom';

export default function ReviewCard({ score, description, username, profileImage }) {
  console.log(username)
  console.log(score);
  return (
    // <Link to={`/reviews/${id}`}>
    <div>
      <div>
        <div><img src={profileImage} alt="" /></div>
        <h1>{username}</h1>
        <h2>Valoracion</h2>
        <span>{score}</span>
        <h2>Descripcion</h2>
        <span>{description}</span>
      </div>
    </div>
    // </Link>
  );
}
