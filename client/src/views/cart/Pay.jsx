import { useState } from "react";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import "./Pay.css"; // Asegúrate de crear y enlazar el archivo de estilos

const Pay = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-617b343c-694c-44b2-a447-349bcd889b8b");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/mp/create_preference",
        {
          description: "pantalon",
          price: 100,
          quantity: 1,
          currency_id: "ARS",
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };
  return (
    <div className="pay-container">
      <p className="product-description">
        ¿Deseas iniciar tu compra? Haz clic en el siguiente botón:
      </p>
      <button className="pay-button" onClick={handleBuy}>
        Iniciar compra
      </button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
      <NavLink to="/Cart" className="cart-link">
        Volver
      </NavLink>
    </div>
  );
};

export default Pay;
