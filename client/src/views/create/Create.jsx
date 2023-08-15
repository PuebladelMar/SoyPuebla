import "./Create.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  postProducts,
  postColor,
  getSizes,
  getCategories,
  getSeries,
} from "../../redux/Actions";
import validations from "./Validations";
import UploadWidget from "../../componentes/imageUpload/imageUpload";
import MutipleUploadWidget from "../../componentes/multipleImageUpload/multipleImageUpload";
import CreateDetail from "./createDetail/CreateDetail";

const Create = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.colorList);
  const size = useSelector((state) => state.sizesList);
  const categories = useSelector((state) => state.categories);
  const series = useSelector((state) => state.series);
  const [errors, setErrors] = useState({});

  const [uploadedSecureUrl, setUploadedSecureUrl] = useState(null);

  const handleUpload = (singleUrl) => {
    setUploadedSecureUrl(singleUrl); 
    setCreateProduct((prevState) => ({
      ...prevState,
      mainImage: singleUrl, 
    }))
  };

    const [uploadedMultipleUrls, setUploadedMultipleUrls] = useState([]);
  
    const handleMultipleUpload = (urls) => {
      setUploadedMultipleUrls(urls);
    };


    const combinedImagesUrls = [uploadedSecureUrl].concat(uploadedMultipleUrls);


  const [createProduct, setCreateProduct] = useState({
    name: "",
    price: 0,
    mainImage: "",
    image: [],
    sale: false,
    color: [],
    size: [],
    description: "",
    series: [],
    category: [],
  });



  useEffect(() => {
    if (validations(createProduct)) {
      setErrors(validations(createProduct));
    }

    if (!color.length) {
      dispatch(postColor());
    }
  }, [dispatch, color, createProduct]);

  useEffect(() => {
    if (validations(createProduct)) {
      setErrors(validations(createProduct));
    }

    if (!size.length) {
      dispatch(getSizes());
    }
  }, [dispatch, size, createProduct]);

  useEffect(() => {
    if (validations(createProduct)) {
      setErrors(validations(createProduct));
    }

    if (!series.length) {
      dispatch(getSeries());
    }
  }, [dispatch, series, createProduct]);

  useEffect(() => {
    if (validations(createProduct)) {
      setErrors(validations(createProduct));
    }

    if (!categories.length) {
      dispatch(getCategories());
    }
  }, [dispatch, categories, createProduct]);

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
      !createProduct.color.length === 0 ||
      !createProduct.size.length === 0
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
        color: [],
        size: [],
        description: "",
        series: [],
        category: [],
      });
    }
  };

  const handleSelect = (event) => {
    setCreateProduct((state) => {
      if (event.target.name === "color") {
        if (!createProduct.color.includes(event.target.value)) {
          return {
            ...state,
            color: [...state.color, event.target.value],
          };
        } else {
          return { ...state, color: [...state.color] };
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

  const handleSelectSize = (event) => {
    setCreateProduct((state) => {
      if (event.target.name === "size") {
        if (!createProduct.size.includes(event.target.value)) {
          return {
            ...state,
            size: [...state.size, event.target.value],
          };
        } else {
          return { ...state, size: [...state.size] };
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
      color: createProduct.color.filter((el) => el !== event),
    });
  };

  const handleDeleteSize = (event) => {
    setCreateProduct({
      ...createProduct,
      size: createProduct.size.filter((el) => el !== event),
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
      .filter((col) => createProduct.color.includes(col.name))
      .map((col) => col.codHex);
  };

  return (
    <div className="create-main-container">
      <div className="create-container">
        <form className="create-form">
          <label htmlFor="name">Nombre: </label>
          <input
            type="string"
            name="name"
            value={createProduct.name}
            placeholder="Nombre"
            required
            className="custom-input"
            onChange={(event) => handleChange(event)}
          />
          <p className="error">{errors.name}</p>

          <label htmlFor="price">Precio: </label>
          <input
            type="decimal"
            name="price"
            value={createProduct.price}
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
            required
            className="custom-textarea"
            onChange={handleChange}
          />
          <p className="error">{errors.mainImage}</p> */}

       

        {uploadedSecureUrl === null

        ? (
        <div>
        <label htmlFor="image">Imagenes complementarias: </label>
        <br />
        <br />
        
        </div>
        )

        : ( 
        <div>        
        <label htmlFor="image">Imagenes complementarias: </label>
        <MutipleUploadWidget onMultipleUpload={handleMultipleUpload}/>
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
            defaultValue={createProduct.sale} 
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
          <select
            name="color"
            placeholder="Colores"
            defaultValue="def"
            onChange={handleSelect}
            required
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
            {createProduct.color.length > 0 ? (
              createProduct.color.map((col) => (
                <div key={col}>
                  <p>{col}</p>
                  <button onClick={() => handleDeleteColor(col)}>X</button>
                </div>
              ))
            ) : (
              <p className="no-dietTypes"></p>
            )}
          </div>

          <label htmlFor="size">Talle: </label>
          <select
            name="size"
            placeholder="Talles"
            defaultValue="def"
            onChange={handleSelectSize}
            required
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
          </div>

          <label htmlFor="series">Coleccion: </label>
          <select
            name="series"
            placeholder="Coleccion"
            defaultValue="def"
            onChange={handleSelectSeries}
            required
          >
            <option value="def" key="def" disabled>
              Selecciona coleccion.
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
            {createProduct.series.length > 0 ? (
              createProduct.series.map((ser) => (
                <div key={ser}>
                  <p>{ser}</p>
                  <button onClick={() => handleDeleteSeries(ser)}>X</button>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>

          <label htmlFor="category">Categoria: </label>
          <select
            name="category"
            placeholder="Categoria"
            defaultValue="def"
            onChange={handleSelectCategories}
            required
          >
            <option value="def" key="def" disabled>
              Selecciona uno o varios talles.
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
            {createProduct.category.length > 0 ? (
              createProduct.category.map((cat) => (
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
            required
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

      <div>
        <CreateDetail
          nombre={createProduct.name}
          imagenes={combinedImagesUrls}
          precio={createProduct.price}
          serie={createProduct.series}
          color={getColorHexCodes()}
          size={createProduct.size}
          category={createProduct.category}
          description={createProduct.description}
        />
      </div>
    </div>
  );
};

export default Create;
