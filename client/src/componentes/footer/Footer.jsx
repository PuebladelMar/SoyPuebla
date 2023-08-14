import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <a href="/subsidiary">Sucursales | </a>
          <a href="/frequent-questions">Preguntas Frecuentes | </a>
          <a href="/about">Quienes somos | </a>
          <a href="/cambios-devoluciones">Cambios y Devoluciones | </a>
          <a href="/payMethods">Medios de pago | </a>
          <a href="/shipment">Medios de envío</a>
        </div>
        <p>© 2023 Puebla del Mar. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
