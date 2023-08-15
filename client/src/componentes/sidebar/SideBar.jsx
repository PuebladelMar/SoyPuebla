import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import * as actions from "../../redux/Actions";
import Modal from "@mui/material/Modal";
import Filtro from "../../../src/assets/images/filtro.png";
import "./SideBAr.css";

function SideBar({ handlerEventSideBar, resetFilters }) {
  const dispatch = useDispatch();
  const colorList = useSelector((state) => state.colorList);
  const series = useSelector((state) => state.series);
  const categories = useSelector((state) => state.categories);
  const sizes = useSelector((state) => state.sizesList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenColor, setIsOpenColor] = useState(false);
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [isOpenSerie, setIsOpenSerie] = useState(false);
  const selectCategoryRef = useRef(null);
  const selectColorRef = useRef(null);
  const selectSizeRef = useRef(null);
  const selectPriceRef = useRef(null);
  const selectSerieRef = useRef(null);

  const handleSelectClick = (event, toggleFunction) => {
    event.stopPropagation();
    toggleFunction();
  };

  const handleSelectToggleCategory = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const handleSelectToggleColor = () => {
    setIsOpenColor(!isOpenColor);
  };

  const handleSelectToggleSize = () => {
    setIsOpenSize(!isOpenSize);
  };

  const handleSelectToggleSerie = () => {
    setIsOpenSerie(!isOpenSerie);
  };

  const handleSelectTogglePrice = () => {
    setIsOpenPrice(!isOpenPrice);
  };

  useEffect(() => {
    const handleClickOutside = (event, ref, setIsOpen) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleDocumentClick = (event) => {
      handleClickOutside(event, selectCategoryRef, setIsOpenCategory);
      handleClickOutside(event, selectColorRef, setIsOpenColor);
      handleClickOutside(event, selectSizeRef, setIsOpenSize);
      handleClickOutside(event, selectPriceRef, setIsOpenSerie);
      handleClickOutside(event, selectSerieRef, setIsOpenPrice);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    dispatch(actions.getColor());
    dispatch(actions.getSeries());
    dispatch(actions.getCategories());
    dispatch(actions.getSizes());
  }, [dispatch]);

  return (
    <aside className="search-bar-aside">
      {windowWidth < 645 ? (
        <div className="filter-button">
          <button className="open-modal-button" onClick={handleOpenModal}>
            Filtros
            <span>
              <img src={Filtro} alt="filtro" className="img-filter" />
            </span>
          </button>
        </div>
      ) : (
        <form className="search-form-aside" onChange={handlerEventSideBar}>
          <li className="filters">
            <h2>
              Categoria<span></span>
            </h2>
            <div
              className={`select-container-filter ${
                isOpenCategory ? "open" : ""
              }`}
            >
              <select
                className="custom-select"
                name="category"
                ref={selectCategoryRef}
                onClick={handleSelectToggleCategory}
              >
                <option value={null}>Todas las categorias</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <span className="select-arrow"></span>
            </div>
          </li>
          <li className="filters">
            <h2>
              Color<span></span>
            </h2>
            <div
              className={`select-container-filter ${isOpenColor ? "open" : ""}`}
            >
              <select
                className="custom-select"
                name="color"
                ref={selectColorRef}
                onClick={handleSelectToggleColor}
              >
                <option value={null}>Todos los colores</option>
                {colorList.map((color, index) => (
                  <option key={index} value={color.name}>
                    {color.name}
                  </option>
                ))}
              </select>
              <span className="select-arrow"></span>
            </div>
          </li>
          <li className="filters">
            <h2>
              Talla<span></span>
            </h2>
            <div
              className={`select-container-filter ${isOpenSize ? "open" : ""}`}
            >
              <select
                className="custom-select"
                name="size"
                ref={selectSizeRef}
                onClick={handleSelectToggleSize}
              >
                <option value={null}>Todos las tallas</option>
                {sizes.map((size, index) => (
                  <option key={index} value={size.name}>
                    {size.name}
                  </option>
                ))}
              </select>
              <span className="select-arrow"></span>
            </div>
          </li>
          <li className="filters">
            <h2>
              Serie<span></span>
            </h2>
            <div
              className={`select-container-filter ${isOpenSerie ? "open" : ""}`}
            >
              <select
                className="custom-select"
                name="serie"
                ref={selectSerieRef}
                onClick={(event) =>
                  handleSelectClick(event, handleSelectToggleSerie)
                }
              >
                <option value={null}>Todos las series</option>
                {series.map((series, index) => (
                  <option key={index} value={series.name}>
                    {series.name}
                  </option>
                ))}
              </select>
              <span className="select-arrow"></span>
            </div>
          </li>
          <li className="filters">
            <h2>
              Precio<span></span>
            </h2>
            <div
              className={`select-container-filter ${isOpenPrice ? "open" : ""}`}
            >
              <select
                className="custom-select"
                name="order"
                ref={selectPriceRef}
                onClick={(event) =>
                  handleSelectClick(event, handleSelectTogglePrice)
                }
              >
                <option value={null}>Todos los precios</option>
                <option value="Precio Ascendente">&uarr; Precio</option>
                <option value="Precio Descendente">&darr; Precio</option>
              </select>
              <span className="select-arrow"></span>
            </div>
            {/* </li>
          <label>Precio máximo</label>
          <input
            name="maxPrice"
            placeholder="Precio máximo"
            onChange={handlerEventSideBar}
          />
          <label>Precio mínimo</label>
          <input
            name="minPrice"
            placeholder="Precio mínimo"
            onChange={handlerEventSideBar}
          />
          <li> */}
          </li>
          <li className="sale-li">
            <label className="sale-label">
              <input
                type="checkbox"
                name="sale"
                onClick={handlerEventSideBar}
                className="sale-input"
              />
              <span className="sale-span"></span>
            </label>
            <h3>Productos en oferta</h3>
          </li>
          <button
            name="limpiar Filtros"
            onClick={resetFilters}
            className="reloadButton"
          >
            Limpiar filtros
          </button>
        </form>
      )}

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          backgroundColor: "#517F7F",
          borderRadius: "10px",
          height: "33rem",
          margin: "5rem 2rem 0 2rem",
        }}
      >
        <div className="modal-content">
          <form className="search-form-aside" onChange={handlerEventSideBar}>
            <li className="li-filtros">
              <li>
                <h2>Filtrar por categoria</h2>
                <div
                  className={`select-container-filter ${
                    isOpenCategory ? "open" : ""
                  }`}
                >
                  <select
                    className="custom-select"
                    name="category"
                    ref={selectCategoryRef}
                    onClick={handleSelectToggleCategory}
                  >
                    <option value={null}>Todas las categorias</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow"></span>
                </div>
              </li>
              <h2>Filtrar por color</h2>
              <div
                className={`select-container-filter ${
                  isOpenColor ? "open" : ""
                }`}
              >
                <select
                  className="custom-select"
                  name="color"
                  ref={selectColorRef}
                  onClick={handleSelectToggleColor}
                >
                  <option value={null}>Todos los colores</option>
                  {colorList.map((color, index) => (
                    <option key={index} value={color.name}>
                      {color.name}
                    </option>
                  ))}
                </select>
                <span className="select-arrow"></span>
              </div>
            </li>
            <li>
              <h2>Filtrar por tallas</h2>
              <div
                className={`select-container-filter ${
                  isOpenSize ? "open" : ""
                }`}
              >
                <select
                  className="custom-select"
                  name="size"
                  ref={selectSizeRef}
                  onClick={handleSelectToggleSize}
                >
                  <option value={null}>Todos las tallas</option>
                  {sizes.map((size, index) => (
                    <option key={index} value={size.name}>
                      {size.name}
                    </option>
                  ))}
                </select>
                <span className="select-arrow"></span>
              </div>
            </li>
            <li>
              <h2>Filtrar por serie</h2>
              <div
                className={`select-container-filter ${
                  isOpenSerie ? "open" : ""
                }`}
              >
                <select
                  className="custom-select"
                  name="serie"
                  ref={selectSerieRef}
                  onClick={(event) =>
                    handleSelectClick(event, handleSelectToggleSerie)
                  }
                >
                  <option value={null}>Todos las series</option>
                  {series.map((series, index) => (
                    <option key={index} value={series.name}>
                      {series.name}
                    </option>
                  ))}
                </select>
                <span className="select-arrow"></span>
              </div>
            </li>
            <li>
              <h2>Ordenar por precio</h2>
              <div
                className={`select-container-filter ${
                  isOpenPrice ? "open" : ""
                }`}
              >
                <select
                  className="custom-select"
                  name="order"
                  ref={selectPriceRef}
                  onClick={(event) =>
                    handleSelectClick(event, handleSelectTogglePrice)
                  }
                >
                  <option value={null}>Todos los precios</option>
                  <option value="Precio Ascendente">&uarr; Precio</option>
                  <option value="Precio Descendente">&darr; Precio</option>
                </select>
                <span className="select-arrow"></span>
              </div>
              <button
                type="button"
                name="sale"
                className="onSaleButton"
                onClick={handlerEventSideBar}
              >
                Productos en oferta
              </button>
            </li>
            <button
              name="limpiar Filtros"
              onClick={resetFilters}
              className="reloadButton"
            >
              Limpiar filtros
            </button>
          </form>
        </div>
      </Modal>
    </aside>
  );
}

export default SideBar;
