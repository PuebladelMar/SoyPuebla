import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const [ productDetails, setProductDetails ] = useState([]);
    const [ selectedColor, setSelectedColor ] = useState(null);
    const [ selectedSize, setSelectedSize ] = useState(null);
    const [ allColors, setAllColors ] = useState([]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/products/${id}`);
              setProductDetails(response.data);
              console.log(response.data)
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
    
      return (
        <div>
          {/* Renderizar los botones de selección de colores */}
          {productDetails.map((item) => (
            <button
              key={item.color}
              onClick={() => handleColorChange(item.color)}
              style={{ backgroundColor: item.codHex }}
            >
              {item.color}
            </button>
          ))}
    
          {/* Renderizar los botones de selección de tallas */}
          {productDetails
            .filter((item) => item.color === selectedColor)
            .map((item) => (
              <button
                key={item.size}
                onClick={() => handleSizeChange(item.size)}
                //disabled={item.stock === 0} // Deshabilitar botones agotados
              >
                {item.size}
              </button>
            ))}
    
          {/* Mostrar el stock disponible según la combinación seleccionada */}
          {selectedCombination ? (
            <p>Stock disponible: {selectedCombination.stock}</p>
          ) : (
            <p>Seleccione un color y una talla</p>
          )}
        </div>
      );
}

export default Detail;