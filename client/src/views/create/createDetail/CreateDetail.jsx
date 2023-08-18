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
}) => {

  let color = useSelector((state) => state.colorList);
  color = color.filter((col) => colorImage?.some(item => item.color === col.name));
  const [selectedColor, setSelectedColor] = useState(null);
  const [ count, setCount ] = useState(0);

  useEffect(()=>{
    if(count === 1){
      setSelectedColor(colorImage[0].color);
    }
    setCount(count+1);
  },[colorImage])

  const formattedImages = colorImage
    .filter((colorItem) => colorItem.color === selectedColor)
    .flatMap((colorItem) =>
      colorItem.images.map((url) => ({
        original: url,
        thumbnail: url,
      }))
    );
  return (
    <section className="containerDetailCreate">
      <container className="secContainerCreate">
        <div>
          {formattedImages.length === 0 ? (
            <img
            className="cardImgDetailCreate"
            src={ImgCarga}
            alt="Cargar Imagen"
            />
            ) : (
            <ImageGallery
            items={formattedImages}
            className="image-gallery-icon"
            thumbnailPosition="left"
            showFullscreenButton={false}
            showPlayButton={false}
            />
          )}
        </div>
        <div>
          {nombre ? (
            <h2 className="detailNameCreate">{nombre}</h2>
          ) : (
            <h2 className="detailNameCreate">Nombre Producto</h2>
          )}

          {precio ? (
            <h2 className="detailInfoCreate">$ {precio}</h2>
          ) : (
            <h2 className="detailInfoCreate">$ 0.00</h2>
          )}

          {serie?.length !== 0 ? (
            <div>
              <h2 className="detailInfoCreate">Serie:</h2>
              {serie?.map((s, i) => (
                <h2 className="detailInfoCreate" key={i}>
                  {s}
                </h2>
              ))}
            </div>
          ) : (
            <h2 className="detailInfoCreate">Serie</h2>
          )}

          {color.length !== 0 ? (
            <div>
              <h2 className="detailInfoCreate">Colores:</h2>
              {color.map((col, i) => (
                <div>
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
                </div>
              ))}
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
                <h3>Stock:</h3>
                <ul>
                  {colorItem.stocks.map((stockItem) => (
                    <li key={stockItem.size}>
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

          {/*size?.length !== 0 ? (
            <div>
              <h2 className="detailInfoCreate">Talle:</h2>
              {{size.map((s, i) => (
                <h2 className="detailInfoCreate" key={i}>
                  {s}
                </h2>
              ))}
            </div>
          ) : (
            <h2 className="detailInfoCreate">Talle</h2>
          )}*/}

          {category?.length !== 0 ? (
            <div>
              <h2 className="detailInfoCreate">Categoria:</h2>
              {category?.map((s, i) => (
                <h2 className="detailInfoCreate" key={i}>
                  {s}
                </h2>
              ))}
            </div>
          ) : (
            <h2 className="detailInfoCreate">Categoria</h2>
          )}

          {description ? (
            <h3 className="detailNameCreate">Descripción: {description}</h3>
          ) : (
            <h3 className="detailNameCreate">Descripción</h3>
          )}
        </div>
      </container>
    </section>
  );
};

export default CreateDetail;
