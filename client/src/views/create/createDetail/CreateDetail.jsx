import ImageGallery from "react-image-gallery";
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImgCarga from "../../../assets/images/Carga imagen.png";
import "./CreateDetail.css";

const CreateDetail = ({
  nombre,
  imagenes,
  precio,
  serie,
  color,
  size,
  category,
  description,
}) => {


  let formattedImages = imagenes.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <section className="containerDetailCreate">
      <container className="secContainerCreate">
        <div>
      {/* {console.log(imagenes)} */}
          {imagenes == false ? (
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
              {serie.map((s, i) => (
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
              {color.map((hexCode, i) => (
                <button
                  className="detailColorButtonCreate"
                  key={i}
                  style={{
                    backgroundColor: hexCode,
                    width: "30px",
                    height: "30px",
                  }}
                ></button>
              ))}
            </div>
          ) : (
            <h2 className="detailInfoCreate">Colores</h2>
          )}

          {size?.length !== 0 ? (
            <div>
              <h2 className="detailInfoCreate">Talle:</h2>
              {/*{size.map((s, i) => (
                <h2 className="detailInfoCreate" key={i}>
                  {s}
                </h2>
              ))}*/}
            </div>
          ) : (
            <h2 className="detailInfoCreate">Talle</h2>
          )}

          {category?.length !== 0 ? (
            <div>
              <h2 className="detailInfoCreate">Categoria:</h2>
              {category.map((s, i) => (
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
