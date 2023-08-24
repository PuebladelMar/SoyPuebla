import { Link } from "react-router-dom";
import "./ErrorPage.css";
import errorPage from "../.././assets/images/404.png";

function ErrorPage() {
  return (
    <div className="not-found">
      <img
      className="error-image-container"
        src={errorPage}
        alt="No se puedo cargar la imagen"
      ></img>
      <p className="notFound-text">
        Estas tratando de ingresar a una pagina fuera de servicio.
      </p>
      <Link to="/home">Click aquí para regresar</Link>
    </div>
  );
}

export default ErrorPage;
