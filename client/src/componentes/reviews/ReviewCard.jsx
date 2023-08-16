// import { NavLink } from 'react-router-dom';
import "./ReviewCard.css";
import { Typography, Rating } from "@mui/material";
import { useState } from "react";

export default function ReviewCard({ score, description, fullName }) {
  console.log(fullName);

  const [value, setValue] = useState(score);
  return (
    // <Link to={`/reviews/${id}`}>
    <div className="container">
      <div>
        <h1>{fullName}</h1>
        <br></br>
        {/* <h2>Valoracion</h2> */}
        <span>{score}</span>
        {/* <h2>Descripcion</h2> */}
        <span>{description}</span>
        <Typography component="legend" value={value}></Typography>
        <Rating
          name="simple-read-only"
          value={value}
         readOnly //
            
          
        />
      </div>
    </div>
    // </Link>
  );
}
