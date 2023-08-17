import "./Create.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  postProducts,
  getColor,
  getSizes,
  getCategories,
  getSeries,
} from "../../redux/Actions";
import validations from "./Validations";
import UploadWidget from "../../componentes/imageUpload/imageUpload";
import MutipleUploadWidget from "../../componentes/multipleImageUpload/multipleImageUpload";
import CreateDetail from "./createDetail/CreateDetail";
import CreateColor from "./createColor/createColor";
import CreateSerie from "./createSerie/CreateSerie";
import CreateCategory from "./createCategory/CreateCategory";

const Create = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.colorList);
  const size = useSelector((state) => state.sizesList);
  const categories = useSelector((state) => state.categories);
  const series = useSelector((state) => state.series);
  const [errors, setErrors] = useState({});

  //!___________________________

  const [showAlert, setShowAlert] = useState({});

  const handleCloseAlert = (event) => {
    setShowAlert({});
    event.preventDefault();
  };

  const handleOpenColorCreate = (event) => {
    setShowAlert({color: true});
    event.preventDefault();
  };

  const handleOpenSerieCreate = (event) =>{
    setShowAlert({serie: true});
    event.preventDefault();
  };

  const handleOpenCategoryCreate = (event) =>{
    setShowAlert({category: true});
    event.preventDefault();
  };

  //!___________________________

  const [uploadedSecureUrl, setUploadedSecureUrl] = useState(null);

  const handleUpload = (singleUrl) => {
    setUploadedSecureUrl(singleUrl);
    setCreateProduct((prevState) => ({
      ...prevState,
      mainImage: singleUrl,
    }));
  };

  const [uploadedMultipleUrls, setUploadedMultipleUrls] = useState([]);

  const handleMultipleUpload = (urls) => {
    setUploadedMultipleUrls(urls);
    // preventDefault();
  };

  const combinedImagesUrls = [uploadedSecureUrl].concat(uploadedMultipleUrls);

  const [createProduct, setCreateProduct] = useState({
    name: "",
    price: 0,
    mainImage: "",
    image: [],
    sale: false,
    colorImage: [],
    description: "",
    series: [],
    category: [],
  });

  useEffect(() => {
    if (validations(createProduct)) {
      setErrors(validations(createProduct));
    }

    if (!color.length) {
      dispatch(getColor());
    }
  }, [dispatch, color.length, createProduct]);

  useEffect(() => {
    if (validations(createProduct)) {
      setErrors(validations(createProduct));
    }

    if (!size.length) {
      dispatch(getSizes());
    }
  }, [dispatch, size.length, createProduct]);

  useEffect(() => {
    if (validations(createProduct)) {
      setErrors(validations(createProduct));
    }

    if (!series.length) {
      dispatch(getSeries());
    }
  }, [dispatch, series.length, createProduct]);

  useEffect(() => {
    if (validations(createProduct)) {
      setErrors(validations(createProduct));
    }

    if (!categories.length) {
      dispatch(getCategories());
    }
  }, [dispatch, categories.length, createProduct]);

  const handleChange = (event) => {
    setCreateProduct({
      ...createProduct,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validations({ ...createProduct, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !createProduct.name ||
      !createProduct.mainImage ||
      !createProduct.description ||
      !createProduct.price ||
      !createProduct.category.length === 0 ||
      !createProduct.series.length === 0 ||
      !createProduct.colorImage.length === 0
    ) {
      alert("Debes llenar todos los campos");
    } else {
      dispatch(postProducts(createProduct));
      setCreateProduct({
        name: "",
        price: 0,
        mainImage: "",
        image: [],
        sale: false,
        colorImage: [],
        description: "",
        series: [],
        category: [],
      });
    }
  };

  const handleSelect = (event) => {
    setCreateProduct((state) => {
      if (event.target.name === "color") {
        const selectedColor = event.target.value;
        const existingColor = state.colorImage.find((item) => item.color === selectedColor);
  
        if (!existingColor) {
          const updatedColorImage = [
            ...state.colorImage,
            { color: selectedColor, stocks: [] }, // Agregar stocks vacíos
          ];
          return {
            ...state,
            colorImage: updatedColorImage,
          };
        }
      }
    });
    setErrors(
      validations({ ...createProduct, [event.target.name]: event.target.value })
    );
  };

  const handleSelectSeries = (event) => {
    setCreateProduct((state) => {
      if (event.target.name === "series") {
        if (!createProduct.series.includes(event.target.value)) {
          return {
            ...state,
            series: [...state.series, event.target.value],
          };
        } else {
          return { ...state, series: [...state.series] };
        }
      }
    });
    setErrors(
      validations({ ...createProduct, [event.target.name]: event.target.value })
    );
  };

  const handleSelectCategories = (event) => {
    setCreateProduct((state) => {
      if (event.target.name === "category") {
        if (!createProduct.category.includes(event.target.value)) {
          return {
            ...state,
            category: [...state.category, event.target.value],
          };
        } else {
          return { ...state, category: [...state.category] };
        }
      }
    });
    setErrors(
      validations({ ...createProduct, [event.target.name]: event.target.value })
    );
  };

  const handleSelectSize = (event, selectedColor) => {
    setCreateProduct((state) => {
      if (event.target.name === "size") {
        const selectedSize = event.target.value;
        if (selectedColor) {
          const updatedColorImage = state.colorImage?.map((item) =>
            item.color === selectedColor
              ? {
                  ...item,
                  stocks: [...item.stocks, { size: selectedSize }],
                }
              : item
          );
          return {
            ...state,
            colorImage: updatedColorImage,
          };
        }
      }
    });
    setErrors(
      validations({ ...createProduct, [event.target.name]: event.target.value })
    );
  };

  const handleDeleteColor = (event) => {
    setCreateProduct({
      ...createProduct,
      colorImage: createProduct.colorImage.filter((item) => item.color !== event),
    });
  };

  const handleDeleteSize = (event, color) => {
    setCreateProduct((state) => {
      const updatedColorImage = state.colorImage.map((item) =>
        item.color === color
          ? { ...item, stocks: item.stocks.filter((sizeObj) => sizeObj.size !== event) }
          : item
      );
      return {
        ...state,
        colorImage: updatedColorImage,
      };
    });
  };

  const handleDeleteCategories = (event) => {
    setCreateProduct({
      ...createProduct,
      category: createProduct.category.filter((el) => el !== event),
    });
  };

  const handleDeleteSeries = (event) => {
    setCreateProduct({
      ...createProduct,
      series: createProduct.series.filter((el) => el !== event),
    });
  };

  const getColorHexCodes = () => {
    return color
      .filter((col) => createProduct.colorImage.some(item => item.color === col.name))
      .map((col) => col.codHex);
  };

  return (
    <div className="create-main-container">
      {console.log(createProduct)}
      {showAlert.category && (
        <popups className="pop-ups">
          <>
            <div className="transparentBackgroundY"></div>

            <div className="alertContainerY">
              <p className="alertTextY">Creador de categorías</p>
              <CreateCategory />
              <div className="alertButtonsY">
                <button onClick={handleCloseAlert}>X</button>
              </div>
            </div>
          </>
        </popups>
      )}

      {showAlert.serie && (
        <popups className="pop-ups">
          <>
            <div className="transparentBackgroundY"></div>

            <div className="alertContainerY">
              <p className="alertTextY">Creador de colecciones</p>
              <CreateSerie />
              <div className="alertButtonsY">
                <button onClick={handleCloseAlert}>X</button>
              </div>
            </div>
          </>
        </popups>
      )}

      {showAlert.color && (
        <popups className="pop-ups">
          <>
            <div className="transparentBackgroundY"></div>

            <div className="alertContainerY">
              <p className="alertTextY">Creador de color</p>
              <CreateColor />
              <div className="alertButtonsY">
                <button onClick={handleCloseAlert}>X</button>
              </div>
            </div>
          </>
        </popups>
      )}

      <div className="create-container">
        <form className="create-form">
          <label htmlFor="name">Nombre: </label>
          <input
            type="string"
            name="name"
            value={createProduct?.name}
            placeholder="Nombre"
            className="custom-input"
            onChange={(event) => handleChange(event)}
          />
          <p className="error">{errors.name}</p>
          <label htmlFor="price">Precio: </label>
          <input
            type="decimal"
            name="price"
            value={createProduct?.price}
            placeholder="Precio"
            className="custom-input"
            onChange={handleChange}
          />
          <p className="error">{errors.price}</p>
          <label htmlFor="mainImage">Imagen Principal: </label>
          <UploadWidget onUpload={handleUpload} />
          {/* <textarea
            type="text"
            name="mainImage"
            value={uploadedSecureUrl}
            placeholder="Main Image"
            className="custom-textarea"
            onChange={handleChange}
          />
          <p className="error">{errors.mainImage}</p> */}
          {uploadedSecureUrl === null ? (
            <div>
              <label htmlFor="image">Imagenes complementarias: </label>
              <br />
              <br />
            </div>
          ) : (
            <div>
              <label htmlFor="image">Imagenes complementarias: </label>
              <MutipleUploadWidget onMultipleUpload={handleMultipleUpload} />
            </div>
          )}
          {/* <input
            type="text"
            name="image"
            value={createProduct.image}
            placeholder="Imagen"
            className="custom-input"
            onChange={handleChange}
          /> */}
          <label htmlFor="sale">Oferta: </label>
          <select
            name="sale"
            className="custom-select"
            defaultValue={createProduct?.sale}
            onChange={handleChange}
          >
            <option value={false} key="def">
              No
            </option>
            <option value={true} key="def1">
              Si
            </option>
          </select>
          <label htmlFor="color">Color: </label>
          {/* //!____________________ */}
          <button
            type="button"
            onClick={() => {
              handleOpenColorCreate();
            }}
            className="mainImage-upload-buttonY "
          >
            Crear color
          </button>
          {/* //!____________________ */}
          <select
            name="color"
            placeholder="Colores"
            defaultValue="def"
            onChange={handleSelect}
          >
            <option value="def" key="def" disabled>
              Selecciona uno o varios colores.
            </option>
            {color.map((el) => {
              return (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
          <p className="error">{errors.color}</p>
          <div>
            {createProduct?.colorImage.length > 0 ? (
              createProduct?.colorImage.map((col) => (
                <div key={col.color}>
                  <p>{col.color}</p>
                  <button type="button" onClick={() => handleDeleteColor(col.color)}>X</button>
                  <label htmlFor="size">Talle: </label>
                  <select
                    name="size"
                    placeholder="Talles"
                    defaultValue="def"
                    onChange={(event) => handleSelectSize(event, col.color)}
                  >
                  <option value="def" key="def" disabled>
                  Selecciona uno o varios talles.
                  </option>
                  {size.map((el) => {
                    return (
                      <option value={el.name} key={el.id}>
                      {el.name}
                      </option>
                    );
                  })}
                  </select>
                  <p className="error">{errors.size}</p>
                <div>
                {col.stocks.length > 0 ? (
                col.stocks.map((si) => (
                <div key={si.size}>
                <p>{si.size}</p>
                <button type="button" onClick={() => handleDeleteSize(si.size, col.color)}>X</button>
                  </div>
                ))
                ) : (
                  <p className="no-dietTypes"></p>
                )}
                </div>
                </div>
              ))
            ) : (
              <p className="no-dietTypes"></p>
            )}
          </div>
          {/*<label htmlFor="size">Talle: </label>
          <select
            name="size"
            placeholder="Talles"
            defaultValue="def"
            onChange={handleSelectSize}
          >
            <option value="def" key="def" disabled>
              Selecciona uno o varios talles.
            </option>
            {size.map((el) => {
              return (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
          <p className="error">{errors.size}</p>
          <div>
            {createProduct.size.length > 0 ? (
              createProduct.size.map((si) => (
                <div key={si}>
                  <p>{si}</p>
                  <button onClick={() => handleDeleteSize(si)}>X</button>
                </div>
              ))
            ) : (
              <p className="no-dietTypes"></p>
            )}
          </div>*/}
          <label htmlFor="series">Colección: </label>
          <button
            type="button"
            onClick={() => {
              handleOpenSerieCreate();
            }}
            className="mainImage-upload-buttonY "
          >
            Crear colección
          </button>
          <select
            name="series"
            placeholder="Coleccion"
            defaultValue="def"
            onChange={handleSelectSeries}
          >
            <option value="def" key="def" disabled>
              Selecciona colección.
            </option>
            {series.map((el) => {
              return (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
          <p className="error">{errors.series}</p>
          <div>
            {createProduct?.series.length > 0 ? (
              createProduct?.series.map((ser) => (
                <div key={ser}>
                  <p>{ser}</p>
                  <button onClick={() => handleDeleteSeries(ser)}>X</button>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
          <label htmlFor="category">Categoría: </label>
          <button
            type="button"
            onClick={() => {
              handleOpenCategoryCreate();
            }}
            className="mainImage-upload-buttonY "
          >
            Crear categoría
          </button>
          <select
            name="category"
            placeholder="Categoria"
            defaultValue="def"
            onChange={handleSelectCategories}
          >
            <option value="def" key="def" disabled>
              Selecciona categoría
            </option>
            {categories.map((el) => {
              return (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
          <p className="error">{errors.category}</p>
          <div>
            {createProduct?.category.length > 0 ? (
              createProduct?.category.map((cat) => (
                <div key={cat}>
                  <p>{cat}</p>
                  <button onClick={() => handleDeleteCategories(cat)}>X</button>
                </div>
              ))
            ) : (
              <p className="no-dietTypes"></p>
            )}
          </div>
          <label htmlFor="description">Descripcion: </label>
          <textarea
            type="text"
            name="description"
            placeholder="Descripcion"
            className="custom-textarea"
            onChange={handleChange}
          />
          <p className="error">{errors.description}</p>
        </form>

        <div className="div-button">
          <button
            className="submit-button"
            type="submit"
            onClick={handleSubmit}
            disabled={Object.keys(errors).length === 0 ? false : true}
          >
            Crear
          </button>
        </div>
      </div>

      {/*<div>
        <CreateDetail
          nombre={createProduct?.name}
          imagenes={combinedImagesUrls}
          precio={createProduct?.price}
          serie={createProduct?.series}
          color={getColorHexCodes()}
          size={createProduct.size}
          category={createProduct?.category}
          description={createProduct?.description}
        />
      </div>*/}
    </div>
  );
};

export default Create;
