import React from "react";
import "./FooterContact.css"; // Importa tu archivo CSS aquí
import Newsletter from "../newsletter/newsletter";

const FooterContact = () => {
  return (
    <footer className="footerC">
      <div className="moving-background"></div>
      <div className="brand-info">
        <h3>Contactanos</h3>
        <p>Email: puebladelmar2023@gmail.com</p>
        <p>Teléfono: +1 234 567 890</p>
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
        <Newsletter />
      </div>
    </footer>
  );
};

export default FooterContact;
