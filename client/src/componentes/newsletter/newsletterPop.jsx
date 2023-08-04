import "./newsletterPop.css";

const NewsletterPop = () => {
  return (
    <div className="newsletter2">
      <h2>
        Suscribíte a nuestro newsletter y mantenete al dia con todas nuestras
        novedades
      </h2>
      <form id="newsletter2-form">
        <input
          type="email"
          id="email-input"
          placeholder="Ingresá tu correo electrónico"
          required
        />
        <button type="submit">Suscribíte</button>
      </form>
      <p id="subscription-status"></p>
    </div>
  );
};

export default NewsletterPop;
