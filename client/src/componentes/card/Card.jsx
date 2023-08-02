import { Link } from "react-router-dom";
import "./Card.css";

function Card() {
  
  
    return (
      <div className="card-container">
        <Link to={`/home/`}>
          <h2>NOMBRE CON LINK</h2>
        </Link>
  
        <h3>precio</h3>
  
        <div className="cardImage">
          <img  alt="Imagen del personaje" height="300px" />
        </div>
  
      </div>
    );
  }
  
  export default Card;