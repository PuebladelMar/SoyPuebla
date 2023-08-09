import axios from "axios";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import image from "../../assets/images/imagenesCarrete/image1.jpg";
import image2 from "../../assets/images/imagenesCarrete/image2.jpg";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-617b343c-694c-44b2-a447-349bcd889b8b");


  //aquí recibo un array con los elementos de props y le voy haciendo push a itemLIst
  const itemList = [
    //productos harcodeados
    {
      title: "Product ref: 323 c33904",
      description: "Remera",
      price: 100,
      quantity: 1,
      currency_id: "ARS",
      image: image,
    },
    {
      title: "Product ref: 15 d4376",
      description: "Pantalon con bota ancha",
      price: 200,
      quantity: 3,
      currency_id: "ARS",
      image: image2,
    },
  ];
  // Función para agregar un artículo al carrito
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return itemList.reduce((total, item) => total + (item.price* item.quantity), 0);
  };

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/mp/create_preference",
        {
          products: itemList
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
    <div className="cart-container">
      <h2>Detalle de la orden : </h2>
      <div className="cart-items">
        {itemList.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.description} />
            <div className="item-details">
              <p>{item.description}</p>
              <p>{item.title}</p>
              <p>${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <p>Total: ${calculateTotal()}</p>
      <div className="cart-summary">
        <div>
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
      <button className="checkout-button" onClick={handleBuy}>Pagar</button>
      </div>
      <NavLink to="/products" className="cart-link">
        Volver
      </NavLink>
    </div>
  );
};

export default Cart;
