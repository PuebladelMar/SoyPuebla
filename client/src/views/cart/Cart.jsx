import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserCart, deleteCart, deleteCartUser } from "../../redux/Actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../componentes/loader/Loader";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { FiX } from "react-icons/fi";
import { useMediaQuery } from "@mui/material";
import "./Cart.css";

const Cart = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const userCart = useSelector((state) => state.userCart);
  const userId = useSelector((state) => state.userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMatch = useMediaQuery("(max-width: 525px)");
  initMercadoPago("TEST-617b343c-694c-44b2-a447-349bcd889b8b");

  useEffect(() => {
    if (!userId.length) {
      navigate("/home");
      alert("debes iniciar sesión para ir al carrito");
    } else {
      const asyncFunction = async()=>{
        await dispatch(getUserCart(userId));
        setIsReady(true)
      }
      asyncFunction();
    }
  }, [dispatch]);

  const itemList = userCart.map((item) => {
    const priceWithDiscount = item.product.price * (1 - item.product.sale / 100);
  
    return {
      description: item.product.name,
      price: priceWithDiscount,
      quantity: item.quantity,
      currency_id: "ARS",
    };
  });

  const calculateTotal = () => {
    return userCart.reduce(
      (total, item) => total + item.product.price * (1 - item.product.sale / 100) * item.quantity,
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
      // console.log(error);
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

  const CalculateSale = (price, sale) =>{
    return price * (1 - sale / 100)
  }

  return (
    <div className="container-cart">
      {isReady ? (
      <div className="cart-container">
        <h1 className="titleCart">Carrito de compras</h1>
        <h2 style={{ fontSize: "1.1rem", cursor: "default" }}>
          Detalle de la orden :
        </h2>
        <div className="cart-items">
          {userCart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img
                className="img-cart"
                src={item.images[0]}
                alt={item.description}
              />
              <div className="item-detail">
                <p className="product-name">{item.product.name}</p>
                <p>Color: {item.color.name}</p>
                <p>Talle: {item.size.name}</p>
                <p>Precio unitario: $ {CalculateSale(item.product.price, item.product.sale)}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Total producto: $ {CalculateSale(item.product.price, item.product.sale) * item.quantity}</p>
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
        <p
          style={{
            fontSize: "1.4rem",
            color: "green",
            cursor: "default",
            marginTop: "1rem",
            marginBottom: isMatch ? "1rem" : "0",
          }}
        >
          Compra total: $ {calculateTotal()}
        </p>
        {isMatch ? (
          <div className="buttons-cart-container">
            <button className="checkout-button-big" onClick={handleBuy}>
              Pagar
            </button>
            <div className="cart-summary">
              <button className="checkout-button" onClick={deleteAllCart}>
                Vaciar carrito
              </button>
              <NavLink to="/history" className="checkout-button">
                Ver historial
              </NavLink>
            </div>
          </div>
        ) : (
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
        )}
        <NavLink to="/products" className="cart-link" styles={{}}>
          Volver
        </NavLink>
      </div>
      ) : (
        <div className='loader-container'>
        <Loader />
        </div>
      )}
    </div>
  );
};

export default Cart;
