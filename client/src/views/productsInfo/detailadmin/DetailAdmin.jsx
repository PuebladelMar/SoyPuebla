import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToCar, notifyStock } from "../../../redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Reviews from "../../../componentes/reviews/Reviews";
import ReviewsForm from "../../../componentes/reviews/ReviewsForm";
import { getReviewById } from "../../../redux/Actions";

const DetailAdmin = () => {
  const { id } = useParams();
  const userId = useSelector((state) => state.userId);
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        await dispatch(getReviewById(productDetails[0].id));
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    };

    fetchReview();
  }, [dispatch, productDetails]);

  const handleLoginClick = (event) => {
    event.preventDefault();
    alert("Debes iniciar Sesion");
    dispatch(getReviewById(productDetails[0].id));
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProductDetails(response.data);
        setIsReady(true);
      } catch (error) {
        // window.alert(error);
      }
    };
    fetchProductDetails();
  }, [id, setProductDetails]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedSize(null);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const selectedCombination =
    selectedColor && selectedSize
      ? productDetails.find(
          (item) => item.color === selectedColor && item.size === selectedSize
        )
      : null;

  function obtenerColoresUnicos(arr) {
    const coloresUnicos = [];
    const coloresVistos = new Set();

    arr.forEach((item) => {
      const claveUnica = `${item.color}-${item.codHex}`;
      if (!coloresVistos.has(claveUnica)) {
        coloresVistos.add(claveUnica);
        coloresUnicos.push({ color: item.color, codHex: item.codHex });
      }
    });
    return coloresUnicos;
  }

  const uniqueColor = obtenerColoresUnicos(productDetails);
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const addProduct = () => {
    quantity < selectedCombination.stock ? setQuantity(quantity + 1) : null;
  };
  const removeProduct = () => {
    quantity > 1 ? setQuantity(quantity - 1) : null;
  };

  const handleAddToCart = () => {
    setShowAlert(true);
    dispatch(addToCar(userId, selectedCombination?.stockId, Number(quantity)));
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const notifyStockByMail = () => {
    if (!isValidEmail(email)) {
      alert("Ingresa un correo valido");
      return;
    }

    let data = {
      user_email: email,
      stock_id: selectedCombination.stockId,
    };

    dispatch(notifyStock(data));
    setIsSubscribed(true);
  };

  return (
    <div className="container">
      <div className="containerDetail">
        <div className="secContainer">
          <div>
            <img
              className="cardImgDetail"
              src={productDetails[0]?.mainImage}
              alt={productDetails[0]?.name}
            />
          </div>
          <div>
            <h2 className="detailName">{productDetails[0]?.name}</h2>
            <h2 className="detailInfo">$ {productDetails[0]?.price}</h2>
            {productDetails[0]?.series.map((s, i) => (
              <h2 className="detailInfo" key={i}>
                Serie: {s.name}
              </h2>
            ))}
            <p className="detailInfo">
              Selecciona uno de los colores disponibles:
            </p>
            <div>
              {uniqueColor.map((item) => (
                <button
                  className="detailColorButton"
                  key={item.color}
                  onClick={() => {
                    if (selectedColor === item.color) {
                      setSelectedColor(null);
                    } else {
                      handleColorChange(item.color);
                      setSelectedSize(null);
                    }
                  }}
                  style={{
                    backgroundColor: item.codHex,
                    width: "30px",
                    height: "30px",
                    border: selectedColor === item.color ? null : 1,
                  }}
                ></button>
              ))}
            </div>
            <div>
              {productDetails
                .filter((item) => item.color === selectedColor)
                .map((item) => (
                  <button
                    className="detailSizeButton"
                    key={item.size}
                    onClick={() => handleSizeChange(item.size)}
                    style={{
                      width: "40px",
                      height: "30px",
                    }}
                  >
                    {item.size}
                  </button>
                ))}
            </div>
            {selectedCombination ? (
              <p className="detailSelection1">
                Stock disponible: {selectedCombination.stock}
              </p>
            ) : (
              <p className="detailSelection0">
                Seleccione un color y una talla
              </p>
            )}
            {selectedCombination && selectedCombination.stock === 0 ? (
              <>
                <p className="detailSelection1">
                  Suscribete si deseas que te avisemos cuando esté disponible:
                </p>
                <div>
                  <input
                    style={{
                      border: "solid 2px",
                      borderRadius: "4px",
                      width: "17rem",
                      height: "2rem",
                      fontSize: "0.95rem",
                      borderColor: "rgb(190, 190, 190)",
                      color: "black",
                    }}
                    placeholder=" Ingresa aquí tu correo*"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubscribed}
                  ></input>
                </div>
                {!isSubscribed ? (
                  <button onClick={notifyStockByMail} className="notifyButton">
                    Suscribirte
                  </button>
                ) : (
                  <p className="detailSelection1">¡Gracias por suscribirte!</p>
                )}
              </>
            ) : (
              <>
                <button
                  id="detailAddCartButton"
                  className="detailAddCartButton"
                  style={{
                    width: "2rem",
                    height: "1.8rem",
                  }}
                  onClick={removeProduct}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  id="detailAddCartButton"
                  className="detailAddCartButton"
                  style={{
                    width: "2rem",
                    height: "1.8rem",
                    marginLeft: "0.5rem",
                  }}
                  onClick={addProduct}
                >
                  +
                </button>
                <button
                  id="detailAddCartButton"
                  className="detailAddCartButton"
                  style={{
                    width: "150px",
                    height: "30px",
                  }}
                  onClick={() => {
                    handleAddToCart();
                  }}
                  disabled={userId.length === 0 || !selectedCombination}
                >
                  Añadir al carrito
                </button>
              </>
            )}
            <p className="detailDesciption">{productDetails[0]?.description}</p>
          </div>
          {showAlert && (
            <>
              <div className="transparentBackground"></div>
              <div className="alertContainer">
                <p className="alertText">Producto añadido al carrito</p>
                <div className="alertButtons">
                  <button onClick={handleCloseAlert}>Seguir comprando</button>
                  <button>
                    <Link to="/Cart">Ir al carrito</Link>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <div>
          <Link to="/products">
            <button className="botonX">X</button>
          </Link>
        </div>
      </div>
      {isReady && (
        <div className="reviews-container">
          <Reviews />
          {console.log(productDetails)}
          {productDetails[0] && (
            <ReviewsForm
              productId={productDetails[0].id}
              handleLoginClick={handleLoginClick}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DetailAdmin;
