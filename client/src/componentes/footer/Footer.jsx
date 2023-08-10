import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>© 2023 Puebla del Mar. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/centro-ayuda">Centro de Ayuda</a>
          <a href="/preguntas-frecuentes">Preguntas Frecuentes</a>
          <a href="/about">Quienes somos</a>
          <a href="/cambios-devoluciones">Cambios y Devoluciones</a>
          <a href="/medios-pago">Medios de pago</a>
          <a href="/medios-envio">Medios de envío</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
