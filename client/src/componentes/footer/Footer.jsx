import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>© 2023 Puebla del Mar. Todos los derechos reservados.</p>

        <div className="social-icons">
          <a
            href="https://www.whatsapp.com/?lang=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="src/assets/images/Whatsapp.png" alt="WhatsApp" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="src/assets/images/face.png" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="src/assets/images/Insta.png" alt="Instagram" />
          </a>
        </div>

        <div className="footer-links">
          <a href="/centro-ayuda">Centro de Ayuda</a>
          <a href="/preguntas-frecuentes">Preguntas Frecuentes</a>
          <a href="/suscripcion">Suscripción al Newsletter</a>
          <a href="/centro-ayuda">Quienes somos</a>
          <a href="/centro-ayuda">Cambios y Devoluciones</a>
          <a href="/centro-ayuda">Medios de pago</a>
          <a href="/centro-ayuda">Medios de envío</a>
        </div>

        <div className="brand-info">
          <h3>Contactanos</h3>
          <p>Email: info@xxxxxxxx.com</p>
          <p>Teléfono: +1 234 567 890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
