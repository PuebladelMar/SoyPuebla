import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImgCarga from "../../../assets/images/Carga imagen.png";
import "./CreateDetail.css";

const CreateDetail = ({
  nombre,
  precio,
  serie,
  colorImage,
  category,
  description,
  sale,
}) => {
  let color = useSelector((state) => state.colorList);
  color = color.filter((col) =>
    colorImage?.some((item) => item.color === col.name)
  );
  const [selectedColor, setSelectedColor] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 1) {
      setSelectedColor(colorImage[0].color);
    }
    setCount(count + 1);
  }, [colorImage]);

  const formattedImages = colorImage
    .filter((colorItem) => colorItem.color === selectedColor)
    .flatMap((colorItem) =>
      colorItem.images.map((url) => ({
        original: url,
        thumbnail: url,
      }))
    );

    function formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    


  return (
    <section className="containerDetailCreate">
      <container className="secContainerCreate">
        <slideshow>
          {formattedImages.length === 0 ? (
            <img
              className="cardImgDetailCreate"
              src={ImgCarga}
              alt="Cargar Imagen"
            />
          ) : (
            <div className="image-gallery-container">
              <ImageGallery
                items={formattedImages}
                className="image-gallery-icon"
                thumbnailPosition="left"
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
        </slideshow>

        <info>
          {nombre ? (
            <h2 className="detailNameCreate">
              {nombre} <separator></separator>
            </h2>
          ) : (
            <h2 className="detailNameCreate">
              Nombre Producto <separator></separator>
            </h2>
          )}

          {sale == 0 ? (
            <h3 className="saleBanner0"></h3>
          ) : (
            <h3 className="saleButton">SALE</h3>
          )}

          {precio ? (
            sale == 0 ? (
              <h2 className="detailInfoCreate">$ {formatNumber(precio)}</h2>
            ) : (
              <h3 className="precioDescuentoContainer">
                <span className="originalPrice"> $ {formatNumber(precio)} </span>
                <span className="discountedPrice">
                  $ {formatNumber(Math.floor(precio * (1 - sale / 100)))}
                </span>
              </h3>
            )
          ) : (
            <h2 className="detailInfoCreate">$ 0.00</h2>
          )}

          {color.length !== 0 ? (
            <div>
              <h2 className="detailInfoCreate">Colores: </h2>
              <colores className="colores-container">
                {color.map((col, i) => (
                  <button
                    className="detailColorButtonCreate"
                    key={i}
                    style={{
                      backgroundColor: col.codHex,
                      width: "30px",
                      height: "30px",
                    }}
                    onClick={() => setSelectedColor(col.name)}
                  ></button>
                ))}
              </colores>
            </div>
          ) : (
            <h2 className="detailInfoCreate">Colores</h2>
          )}
          {selectedColor && (
            <div>
              {colorImage.map((colorItem) => {
                if (colorItem.color === selectedColor) {
                  return (
                    <div key={colorItem.color}>
                      <h3 className="detailInfoCreate">Stock:</h3>
                      <ul className="stocksContainer">
                        {colorItem.stocks.map((stockItem) => (
                          <li className="detailInfoStocks" key={stockItem.size}>
                            {stockItem.size}: {stockItem.amount}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}

          {serie?.length !== 0 ? (
            <div className="coleccionContainer">
              <h2 className="detailInfoCreate">Colección: </h2>
              <div className="coleccionContainerSec">
                {serie?.map((s, i) => (
                  <coleccion>
                    <h2 className="detailInfoCreate" key={i}>
                      {s}
                    </h2>
                  </coleccion>
                ))}
              </div>
            </div>
          ) : (
            <h2 className="detailInfoCreate">Colección</h2>
          )}

          {category?.length !== 0 ? (
            <div className="categoriaContainer">
              <h2 className="detailInfoCreate">Categoria:</h2>
              <div className="categoriaContainerSec">
                {category?.map((s, i) => (
                  <categoria>
                    <h2 className="detailInfoCreate" key={i}>
                      {s}
                    </h2>
                  </categoria>
                ))}
              </div>
            </div>
          ) : (
            <h2 className="detailInfoCreate">Categoria</h2>
          )}

          {description ? (
            <div className="descripcionContainer">
              <h3 className="detailInfoCreate">Descripción: </h3>
              <h4 className="detailInfoDescription">{description}</h4>
            </div>
          ) : (
            <h3 className="detailInfoCreate">Descripción</h3>
          )}
        </info>
      </container>
    </section>
  );
};

export default CreateDetail;
