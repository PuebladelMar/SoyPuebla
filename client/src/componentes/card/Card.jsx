import { Link } from "react-router-dom";
import CardEx from '../../assets/images/imagenesCards/ESTUDIO R3.png'
import "./Card.css";


function Card() {
  
    return (
      <div className="card-container">
        <Link to={`/home/`}>
        <div className="cardImage">
          <img src={CardEx} alt="Imagen del personaje" height="300px" />
        </div>

        <h2>*****</h2>
        <h3>Nombre</h3>
        <h3>Precio</h3>
        </Link>
        <button className="heart" >🤍</button>
      </div>
    );
  }
  
  export default Card;