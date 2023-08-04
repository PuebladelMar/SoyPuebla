import "./Landing.css";
// import style from '../landing/Landing.css';
import { NavLink } from "react-router-dom";
import PopUpNews from "../../componentes/newsletter/popupNewsletter";

function Landing() {
  return (
    <div className="landing-container">
      <img
        src="src/assets/images/1.png"
        alt=""
        className="landing-image"
      />
      <PopUpNews />
      <NavLink to="/home">
        <button className="boton-landing">Ingresar</button>
      </NavLink>
    </div>
  );
}

export default Landing;
