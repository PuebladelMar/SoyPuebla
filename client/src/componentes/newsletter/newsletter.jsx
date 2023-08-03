import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Suscríbete a nuestro newsletter</h2>
      <form id="newsletter-form">
        <input
          type="email"
          id="email-input"
          placeholder="Ingresa tu correo electrónico"
          required
        />
        <button type="submit">Suscribirse</button>
      </form>
      <p id="subscription-status"></p>
    </div>
  );
};

export default Newsletter;
