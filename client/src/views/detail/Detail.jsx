import axios from "axios";
import { useEffect, useState, useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCar, notifyStock } from "../../redux/Actions";
import Reviews from "../../componentes/reviews/Reviews";
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
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import Swal from 'sweetalert2'

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
  const [ImagesToRender, setImagesToRender] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const uniqueColor = obtenerColoresUnicos(productDetails);
  const [thumbnailPosition, setThumbnailPosition] = useState("left");
  const sale = productDetails[0]?.sale

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProductDetails(response.data);
        setIsReady(true);
        
        const defaultColor = response.data[0]?.color;
        setSelectedColor(defaultColor);

        setImagesToRender(
          response.data[0]?.colorImages.map((url) => ({
            original: url,
            thumbnail: url,
          }))
        );
      } catch (error) {
        window.alert(error);
      }
    };
    fetchProductDetails();
  }, [id]);

  const handleLoginClick = (event) => {
    event.preventDefault();
    Swal.fire("Debes iniciar Sesion");
    dispatch(getReviewById(productDetails[0].id));
  };

  const handleColorChange = (color) => {
    if (selectedColor !== color) {
      setSelectedColor(color);
      setSelectedSize(null);

      const images = productDetails.find(
        (product) => product?.color === color
      )?.colorImages;

      if (images) {
        const formattedImages = images.map((url) => ({
          original: url,
          thumbnail: url,
        }));
        setImagesToRender(formattedImages);
      } else {
        setImagesToRender([]);
      }
    }
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
      Swal.fire("Ingresa un correo valido");
      return;
    }

    let data = {
      user_email: email,
      stock_id: selectedCombination.stockId,
    };

    dispatch(notifyStock(data));
    setIsSubscribed(true);
  };

  useEffect(() => {
    if (window.innerWidth < 1071) {
      setThumbnailPosition("bottom");
    } else {
      setThumbnailPosition("left");
    }

    const handleResize = () => {
      if (window.innerWidth < 1071) {
        setThumbnailPosition("bottom");
      } else {
        setThumbnailPosition("left");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function formatNumber(number) {
    const wholeNumber = Math.floor(number); 
    return wholeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  

  return (
    <div className="container-detail">
      {isReady ? (
        <div className="containerDetail">
          <div className="secContainer">
            <div className="mainIMage-container">
              {ImagesToRender && ImagesToRender.length > 0 && (
                <div className="image-galery-containerDeatil">
                  <ImageGallery
                    items={ImagesToRender}
                    className="image-gallery-icon"
                    thumbnailPosition={thumbnailPosition}
                    showFullscreenButton={false}
                    showPlayButton={false}
                  />
                  {sale == 0 ? (
                <h3 className="saleBanner0"></h3>
              ) : (
                <h3 className="saleBanner">{sale}% off</h3>
              )}
                </div>
              )}
            </div>
            <div className="detail-container">
              <div className="detailInfo">
                <h2 className="detailName">
                  {productDetails[0]?.name}{" "}
                  <span className="span-product-name"></span>{" "}
                </h2>
                
                {sale == 0 ? (
            <h3 className="saleBanner0"></h3>
          ) : (
            <h3 className="saleButton">SALE</h3>
          )}

          {sale == 0 ? (
              <h2 className="detailInfoPrecio">
              $ {formatNumber(productDetails[0]?.price)}
            </h2>
            ) : (
              <h3 className="precioDescuentoContainerDetail ">
                <span className="originalPriceDetail"> $ {formatNumber(productDetails[0]?.price)} </span>
                <span className="discountedPriceDetail">
                  $ {formatNumber(Math.floor(productDetails[0]?.price * (1 - sale / 100)))}
                </span>
              </h3>
            )
           }

              </div>
              <div>
                <h2 className="detailInfoSerie">
                  Serie:
                  {productDetails[0]?.series.map((s, i) => (
                    <span key={i}> {s.name}. </span>
                  ))}
                </h2>
              </div>
              <div className="color-size-container">
                <p className="detailInfoColor">Colores disponibles:</p>
                <div className="color-container">
                  {uniqueColor.map((item) => (
                    <button
                      className={`detailColorButton ${
                        selectedColor === item.color ? "selected" : ""
                      }`}
                      key={item.color}
                      onClick={() => {
                        handleColorChange(item.color);
                        setSelectedSize(null);
                      }}
                      style={{
                        backgroundColor: item.codHex,
                        width: "30px",
                        height: "30px",
                      }}
                    ></button>
                  ))}
                </div>
                <div className="size-container">
                  {productDetails
                    .filter((item) => item.color === selectedColor)
                    .map((item) => (
                      <button
                        className={`detailSizeButton ${
                          selectedSize === item.size ? "selected" : ""
                        }`}
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
                  <p className="alertText">El Producto se añadido a su carrito</p>
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
          <Loader />
        </div>
      )}
      {isReady && (
        <div className="description-container">
          <Accordion
            className="accordion"
            style={{ margin: "0", border: "none" }}
          >
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
