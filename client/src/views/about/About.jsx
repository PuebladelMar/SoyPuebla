import "./About.css";
import { useLayoutEffect } from "react";
import Puebla from "../../assets/images/PdM.png"
import Tortuga from "../../assets/images/TORTUGA_ROSA_SINFONDO.png"

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container">

      <img src={Puebla} alt="Puebla del Mar" className="img-About-Pdm" />
      <div className="about-content">
        <h1 className="about-title">¿QUIÉNES SOMOS?</h1>
        <p className="about-text">
          Somos Karina y Pamela, nos apasiona la belleza de lo sencillo y lo
          natural. <strong>Puebla del Mar</strong> es el nombre que elegimos
          para dar vida a una marca de ropa de ejercicio adaptada a nuestros
          cuerpos, estilos y gustos.
        </p>

        <h1 className="about-title">¿QUÉ HACEMOS?</h1>
        <p className="about-text">
          Durante años nos amoldamos a aquello que nos ofrecían, ajustándonos a
          modelos y talles que nos exigían a tener que adaptarnos.{" "}
          <strong>Puebla del Mar</strong> te propone el camino inverso, pretende
          que hagamos juntas ropa que se adapte a nosotras. Porque sabemos que
          nuestros cuerpos son diferentes pero también nuestros estilos, gustos
          y elecciones.
        </p>

        <h1 className="about-title">¿POR QUÉ?</h1>
        <p className="about-text">
          Nos motorizó la falta de prendas que se adaptan a las necesidades
          reales y que reproducen solo un modelo de cuerpo e impactan
          negativamente nuestra salud.
        </p>

        <h1 className="about-title">¿CÓMO LO HACEMOS?</h1>
        <p className="about-text">
          <strong>Escuchamos a un grupo de mujeres</strong>, les preguntamos
          sobre sus necesidades, qué ropa buscan. Qué y por qué las hace sentir
          cómodas. A partir de esas respuestas y de algunas preguntas diseñamos
          juntas prototipos de ropa de ejercicio.
          <br />
          Esperamos que te guste nuestro proyecto y que forme parte de tus
          actividades.
        </p>
      </div>
      <img src={Tortuga} alt="Puebla del Mar" className="img-About-Tortuga" />
    </div>
  );
};

export default About;
