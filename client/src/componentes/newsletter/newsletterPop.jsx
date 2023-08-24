import "./newsletterPop.css";
import { NavLink } from "react-router-dom";
import { sendMail } from "../../redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useMediaQuery } from '@mui/material';

const NewsletterPop = () => {
  const dispatch = useDispatch();
  const mailConfirmation = useSelector((state) => state.mailConfirmation);
  const isMatch = useMediaQuery('(max-width: 529px)');
  const [emailValue, setEmailValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const isValidEmail = (emailValue) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
  };

  const handledSubmit = () => {
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
    if (mailConfirmation === "Ya te encuentras suscrita") {
      setIsSubscribed(true);
    }
    if (mailConfirmation === "Suscripcion exitosa") {
      setIsSubscribed(true);
      alert("Suscripción exitosa");
    }
    console.log("Valor de mailConfirmation:", mailConfirmation);
  }, [mailConfirmation]);

  return (
    <div className="newsletter2">
      <h2>
        Suscribíte a nuestro newsletter y mantenete al dia con todas nuestras
        novedades
      </h2>
      <form id="newsletter2-form-pop">
        <input
          type="email"
          id="email-input"
          placeholder= {isMatch ? "Ingresá tu correo" : "Ingresá tu correo electrónico"}
          required
          value={emailValue}
          onChange={handleEmailChange}
          disabled={isSubscribed}
        />
        <NavLink to="/home">
          <button type="button" onClick={handledSubmit} disabled={isSubscribed}>
            Suscribíte
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default NewsletterPop;
