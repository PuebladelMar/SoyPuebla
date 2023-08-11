import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { getUserCart } from "../../redux/Actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [preferenceId, setPreferenceId] = useState(null);
  const userCart = useSelector((state) => state.userCart);
  const userId = useSelector((state) => state.userId);
  const dispatch = useDispatch();
  initMercadoPago("TEST-617b343c-694c-44b2-a447-349bcd889b8b");

  useEffect(() => {
    dispatch(getUserCart(userId));
  }, [dispatch]);
console.log(userId);
  //aquí recibo un array con los elementos de props y le voy haciendo push a itemLIst
  const itemList = userCart.map((item) => ({
    description: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
    currency_id: "ARS",
  }));
  // Función para agregar un artículo al carrito
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return userCart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/mp/create_preference",
        {
          products: itemList,
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
        {userCart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.product.mainImage} alt={item.description} />
            <div className="item-details">
              <p>{item.product.name}</p>
              <p>{item.color.name}</p>
              <p>Talle:{item.size.name}</p>
              <p>${item.product.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>${item.product.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <p>Total: ${calculateTotal()}</p>
      <div className="cart-summary">
        <div>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
        <button className="checkout-button" onClick={handleBuy}>
          Pagar
        </button>
      </div>
      <NavLink to="/products" className="cart-link">
        Volver
      </NavLink>
    </div>
  );
};

export default Cart;
