import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  // const [ loading, setLoading ] = useState('Loading...');

  // let {
  //   name,
  //   price,
  //   mainImage,
  //   image,
  //   description,
  //   sale,
  //   category,
  //   series
  // } = productDetails[0];

  // if(productDetails.length === 0) {
  //   return 'Loading...'
  // }

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`
        );
        setProductDetails(response.data);
      } catch (error) {
        window.alert(error);
      }
    };
    fetchProductDetails();
  }, []);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedSize(null); // Reiniciar la talla seleccionada al cambiar el color
  };

  // Función para cambiar la talla seleccionada
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

  return (
    <div>
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

            {productDetails[0]?.series.map((s) => (
              <h2 className="detailInfo">Serie: {s.name}</h2>
            ))}

            {/* <img src={image} alt="" />  */}

          
            <div>
            {uniqueColor.map((item) => (
              <button
              className="detailColorButton"
              key={item.color}
              onClick={() => handleColorChange(item.color)}
              style={{ 
                backgroundColor: item.codHex,
                width: '30px',
                height: '30px',
              }}
              
              >
                {/* {item.color} */}
              </button>
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
                // disabled={item.stock === 0} 
                style={{ 
                  width: '40px',
                  height: '30px',
                }}
                >
                  {item.size}
                </button>
              ))}
              </div>

           
            {selectedCombination ? (
              <p className="detailSelection1">Stock disponible: {selectedCombination.stock}</p>
            ) : (
              <p className="detailSelection0">Seleccione un color y una talla</p>
            )}

            <p className="detailDesciption">{productDetails[0]?.description}</p>

            <button
            id="detailAddCartButton" 
            className="detailAddCartButton"
            style={{ 
              width: '150px',
              height: '30px',
            }}>Añadir al carrito</button>
          </div>
        </div>


      <div>
        <Link to="/products">
          <button className="botonX">X</button>
        </Link>
      </div>

      </div>

    </div>
  );
};

export default Detail;
