import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>© 2023 Puebla del Mar. Todos los derechos reservados.</p>
        <p>DUEÑAS?</p>

        <div className="social-icons">
          <a
            href="https://www.whatsapp.com/?lang=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/Whatsapp.png" alt="WhatsApp" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/images/Whatsapp.png" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/Insta.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
