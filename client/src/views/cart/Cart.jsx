import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserCart, deleteCart, deleteCartUser } from "../../redux/Actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { FiX } from "react-icons/fi";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [preferenceId, setPreferenceId] = useState(null);
  const userCart = useSelector((state) => state.userCart);
  const userId = useSelector((state) => state.userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  initMercadoPago("TEST-617b343c-694c-44b2-a447-349bcd889b8b");

  useEffect(() => {
    if (!userId.length) {
      navigate("/home");
      alert("debes iniciar seción para ir al carrito");
    } else {
      dispatch(getUserCart(userId));
    }
  }, [dispatch]);

  const itemList = userCart.map((item) => ({
    description: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
    currency_id: "ARS",
  }));

  const calculateTotal = () => {
    return userCart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const createPreference = async () => {
    try {
      await axios
        .post("http://localhost:3001/mp/create_preference", {
          products: itemList,
        })
        .then((response) => {
          window.location.href = response.data.response.body.init_point;
        });
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

  const deleteAllCart = async () => {
    await dispatch(deleteCartUser(userId, false));
    await dispatch(getUserCart(userId));
  };

  const handlerDeleteCart = async (itemId) => {
    await dispatch(deleteCart(itemId));
    await dispatch(getUserCart(userId));
  };

  return (
    <div className="container-cart">
      <div className="cart-container">
        <h1 className="titleCart">Bienvenida a tu carrito de compras</h1>
        <h2 style={{ fontSize: "0.9rem" }}>
          Detalle de la orden :
        </h2>
        <div className="cart-items">
          {userCart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img className="img-cart" src={item.images[0]} alt={item.description} />
              <div className="item-details">
                <p>Nombre de producto: {item.product.name}</p>
                <p>Color: {item.color.name}</p>
                <p>Talle: {item.size.name}</p>
                <p>Precio unitario: $ {item.product.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Total producto: ${item.product.price * item.quantity}</p>
                <button
                  className="closeButton"
                  onClick={() => handlerDeleteCart(item.cartId)}
                >
                 <FiX style={{ width: "2rem", height: "2rem" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.8rem", color: "green" }}>
          Compra total: ${calculateTotal()}
        </p>
        <div className="cart-summary">
          <button className="checkout-button" onClick={deleteAllCart}>
            Vaciar carrito
          </button>
          <button className="checkout-button" onClick={handleBuy}>
            Pagar
          </button>
          <NavLink to="/history" className="checkout-button">
            Ver historial
          </NavLink>
        </div>
        <NavLink to="/products" className="cart-link" styles={{}}>
          Volver
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
