import React, { useState, useEffect } from "react";
import "./newsletter.css";
import { sendMail } from "../../redux/Actions";
import { useSelector, useDispatch } from "react-redux";

const Newsletter = () => {
  const dispatch = useDispatch();
  const mailConfirmation = useSelector((state) => state.mailConfirmation);

  const [emailValue, setEmailValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const isValidEmail = (emailValue) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
  };

  const handledSubmit = (mailConfirmation) => {
    if (!isValidEmail(emailValue)) {
      alert("Ingresa un correo valido");
      return;
    }

    let data = {
      emailsUsers: emailValue,
      emailSubject: "Ahora estás suscrita a Soy Puebla😊",
    };
    dispatch(sendMail(data));
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  useEffect(() => {
    if (mailConfirmation.error === "Ya te encuentras suscrita") {
      setIsSubscribed(true);
      alert(mailConfirmation.error)
    }
    if (mailConfirmation === "Suscripcion exitosa") {
      setIsSubscribed(true);
      alert("Suscripción exitosa");
    }
  }, [mailConfirmation]);

  return (
    <div className="newsletter">
      <h2>Suscríbete a nuestro newsletter</h2>
      <form id="newsletter-form">
        <input
          type="email"
          id="email-input"
          placeholder="Ingresa tu correo electrónico"
          required
          value={emailValue}
          onChange={handleEmailChange}
          disabled={isSubscribed}
        />
        <button type="button" onClick={handledSubmit} disabled={isSubscribed}>
          Suscribirse
        </button>
      </form>
      {mailConfirmation && (
        <span className="isSuscribed" id="subscription-status">
          {mailConfirmation.error}
        </span>
      )}
    </div>
  );
};

export default Newsletter;
