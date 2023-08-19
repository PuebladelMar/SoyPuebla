import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToCar, sendMail, notifyStock } from "../../redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Reviews from "../.././componentes/reviews/Reviews";
import ReviewsForm from "../../componentes/reviews/ReviewsForm";
import { getReviewById } from "../../redux/Actions";
import { FiX, FiMinus, FiPlus } from "react-icons/fi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Detail.css";
import Loader from "../../componentes/loader/Loader";


const Detail = () => {
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
  //Aplicar el Loading

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
        if(selectedColor === null){
          setSelectedColor(response.data[0].color);
        }
      } catch (error) {
        window.alert(error);
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

  // Obtener los detalles del producto según la combinación seleccionada
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
  const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad del alert

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

  const selectedColorImages = productDetails.find((product)=> product?.color === selectedColor)

  return (
    <div className="container">
      {isReady ? (
        <div className="containerDetail">
          <div className="secContainer">
            <div className="mainIMage-container">
              <img
                className="cardImgDetail"
                src={selectedColorImages?.colorImages[0]}
                alt={productDetails[0]?.name}
              />
            </div>
            <div className="detail-container">
              <div className="detailInfo">
                <h2 className="detailName">{productDetails[0]?.name}</h2>
                <h2 className="detailInfoPrecio">
                  $ {productDetails[0]?.price}
                </h2>
              </div>
              <div>
                {productDetails[0]?.series.map((s, i) => (
                  <h2 className="detailInfoSerie" key={i}>
                    Serie: {s.name}
                  </h2>
                ))}
              </div>
              <div className="color-size-container">
                <p className="detailInfoColor">Colores disponibles:</p>
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
                <div className="size-container">
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
                <div className="suscribe-container">
                  <p className="detailSelection1">
                    ¡Suscribete! Y sabras cuando esté disponible
                  </p>
                  <div className="email-container">
                    <input
                      style={{
                        border: "solid 2px",
                        borderRadius: "4px",
                        height: "2rem",
                        fontSize: "0.95rem",
                        borderColor: "rgb(190, 190, 190)",
                        color: "black",
                        width: "100%",
                        padding: "0 1rem",
                      }}
                      placeholder=" Ingresa aquí tu correo*"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubscribed}
                    ></input>
                  </div>
                  {!isSubscribed ? (
                    <button
                      onClick={notifyStockByMail}
                      className="notifyButton"
                    >
                      Suscribirte
                    </button>
                  ) : (
                    <p className="detailSelection1">
                      ¡Gracias por suscribirte!
                    </p>
                  )}
                </div>
              ) : (
                <>
                  <div className="quantity-container">
                    <button
                      className="detailAddCartButton"
                      style={{
                        width: "2rem",
                        height: "2rem",
                      }}
                      onClick={removeProduct}
                    >
                      <FiMinus />
                    </button>
                    <span className="quantity-span">{quantity}</span>
                    <button
                      className="detailAddCartButton"
                      style={{
                        width: "2rem",
                        height: "2rem",
                      }}
                      onClick={addProduct}
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <button
                    className="addCartButton"
                    style={{
                      width: "100%",
                      height: "4rem",
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
          <div className="close-button">
            <Link to="/products">
              <FiX style={{ width: "2rem", height: "2rem" }} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="loader-container"> 
          <Loader/>
          </div>
       

      )}
      {isReady && (
        <div className="description-container">
          <Accordion className="accordion" style={{ margin: "0", border: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h2 className="description-text">Descripción</h2>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="detailDesciption">
                  {productDetails[0]?.description}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
      {isReady && (
        <div className="reviews-container">
          <Reviews />
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

export default Detail;
