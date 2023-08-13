import ImgCarga from "../../../assets/images/Carga imagen.png";
import "./CreateDetail.css";

const CreateDetail = ({ nombre, imagen, precio, serie, color }) => {
  return (
    <section className="containerDetailCreate">
      <container className="secContainerCreate">
        <div>
          {imagen ? (
            <img className="cardImgDetailCreate" src={imagen} alt="Uploaded" />
          ) : (
            <img
              className="cardImgDetailCreate"
              src={ImgCarga}
              alt="Cargar Imagen"
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

        
        </div>
      </container>

      {/* <div className="containerDetail">

            
          <div className="secContainer">
            <div>
              <img                   />
            </div>
  
            <div>
              <h2 className="detailName">{productDetails[0]?.name}</h2>
              <h2 className="detailInfo">$ {productDetails[0]?.price}</h2>
  
              {productDetails[0]?.series.map((s,i) => (
                <h2 className="detailInfo" key={i}>Serie: {s.name}</h2>
              ))}
  
             
  
            
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
                <p>{quantity}</p>
              <button
              id="detailAddCartButton" 
              className="detailAddCartButton"
              style={{ 
                width: '150px',
                height: '30px',
              }}
              onClick={addProduct}
              >+</button>
              <button
              id="detailAddCartButton" 
              className="detailAddCartButton"
              style={{ 
                width: '150px',
                height: '30px',
              }}
              onClick={removeProduct}
              >-</button>
        
            </div>
  
            <button
              id="detailAddCartButton" 
              className="detailAddCartButton"
              style={{ 
                width: '150px',
                height: '30px',
              }}
             
              onClick={() => { handleAddToCart();}}
              >Añadir al carrito </button>
  
            {showAlert && (
        <>
          <div className="transparentBackground"></div>
          <div className="alertContainer">
            <p className="alertText" >Producto añadido al carrito</p>
            <div className="alertButtons">
              <button onClick={handleCloseAlert}>Seguir comprando</button>
              <button onClick={() => window.location.href = '/Cart'}>Ir al carrito</button>
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
  
        </div> */}
    </section>
  );
};

export default CreateDetail;
