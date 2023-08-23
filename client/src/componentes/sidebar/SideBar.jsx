import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import * as actions from "../../redux/Actions";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "@mui/material";
import { FiSliders, FiShoppingCart, FiRotateCcw } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./SideBAr.css";

const initialState = {
  isOpenCategory: false,
  isOpenColor: false,
  isOpenSize: false,
  isOpenPrice: false,
  isOpenSerie: false,
  isOff: false,
  selectedCategory: null,
  selectedColor: null,
  selectedSize: null,
  selectedPrice: null,
  selectedSerie: null,
};

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
  const isMatch = useMediaQuery("(max-width: 644px)");
  const isMatch2 = useMediaQuery("(max-width: 560px)");
  const isMatch3 = useMediaQuery("(max-width: 430px)");
  const [filterState, setFilterState] = useState(initialState);

  const handleResetFilters = (event) => {
    event.preventDefault();
    resetFilters();
    setFilterState(initialState);
  };

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
          <Link to="/Cart">
          <button className="open-modal-button">
            <span className="open-modal-span">Carrito</span>
            <span className="open-modal-span">
            <FiShoppingCart />
            </span>
          </button>
          </Link>
          <button className="open-modal-button" onClick={handleResetFilters}>
            <span className="open-modal-span">Deshacer</span>
            <span className="open-modal-span">
              <FiRotateCcw />
            </span>
          </button>
          <button className="open-modal-button" onClick={handleOpenModal}>
            <span className="open-modal-span">Filtros</span>
            <span className="open-modal-span">
              <FiSliders />
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
                onClick={() => handleSelectToggleCategory()}
                value={filterState.selectedCategory || ""}
                onChange={(event) =>
                  setFilterState({
                    ...filterState,
                    selectedCategory: event.target.value,
                  })
                }
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
                onClick={() => handleSelectToggleColor()}
                value={filterState.selectedColor || ""}
                onChange={(event) =>
                  setFilterState({
                    ...filterState,
                    selectedColor: event.target.value,
                  })
                }
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
                onClick={() => handleSelectToggleSize()}
                value={filterState.selectedSize || ""}
                onChange={(event) =>
                  setFilterState({
                    ...filterState,
                    selectedSize: event.target.value,
                  })
                }
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
                value={filterState.selectedSerie || ""}
                onChange={(event) =>
                  setFilterState({
                    ...filterState,
                    selectedSerie: event.target.value,
                  })
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
                value={filterState.selectedPrice || ""}
                onChange={(event) =>
                  setFilterState({
                    ...filterState,
                    selectedPrice: event.target.value,
                  })
                }
              >
                <option value={null}>Todos los precios</option>
                <option value="Precio Ascendente">&uarr; Precio</option>
                <option value="Precio Descendente">&darr; Precio</option>
              </select>
              <span className="select-arrow"></span>
            </div>
          </li>
          <li className="sale-li">
            <label className="sale-label">
              <input
                type="checkbox"
                name="sale"
                checked={filterState.isOff}
                onChange={() =>
                  setFilterState({
                    ...filterState,
                    isOff: !filterState.isOff,
                  })
                }
                className="sale-input"
              />
              <span
                className={`sale-span ${filterState.isOff ? "off" : ""}`}
              ></span>
            </label>
            <h3>Productos en oferta</h3>
          </li>
          <button
            name="limpiar Filtros"
            onClick={handleResetFilters}
            className="reloadButton"
          >
            Limpiar filtros
          </button>
        </form>
      )}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        style={{
          backgroundColor: "transparent",
          backdropFilter: "none",
          borderRadius: "10px",
          maxHeight: "80vh",
          width: "80%",
          margin: isMatch3
            ? "5rem 2.5rem"
            : isMatch2
            ? "5rem 3rem"
            : isMatch && "5rem 4rem",
          padding: "0",
          overflowY: "auto",
        }}
      >
        <div className="modal-content">
          <form
            className="search-form-aside-modal"
            onChange={handlerEventSideBar}
          >
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
                  onClick={() =>
                    handleSelectClick(event, handleSelectToggleCategory)
                  }
                  value={filterState.selectedCategory || ""}
                  onChange={(event) =>
                    setFilterState({
                      ...filterState,
                      selectedCategory: event.target.value,
                    })
                  }
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
                className={`select-container-filter ${
                  isOpenColor ? "open" : ""
                }`}
              >
                <select
                  className="custom-select"
                  name="color"
                  ref={selectColorRef}
                  onClick={() =>
                    handleSelectClick(event, handleSelectToggleColor)
                  }
                  value={filterState.selectedColor || ""}
                  onChange={(event) =>
                    setFilterState({
                      ...filterState,
                      selectedColor: event.target.value,
                    })
                  }
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
                className={`select-container-filter ${
                  isOpenSize ? "open" : ""
                }`}
              >
                <select
                  className="custom-select"
                  name="size"
                  ref={selectSizeRef}
                  onClick={() =>
                    handleSelectClick(event, handleSelectToggleSize)
                  }
                  value={filterState.selectedSize || ""}
                  onChange={(event) =>
                    setFilterState({
                      ...filterState,
                      selectedSize: event.target.value,
                    })
                  }
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
                className={`select-container-filter ${
                  isOpenSerie ? "open" : ""
                }`}
              >
                <select
                  className="custom-select"
                  name="serie"
                  ref={selectSerieRef}
                  onClick={() =>
                    handleSelectClick(event, handleSelectToggleSerie)
                  }
                  value={filterState.selectedSerie || ""}
                  onChange={(event) =>
                    setFilterState({
                      ...filterState,
                      selectedSerie: event.target.value,
                    })
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
                className={`select-container-filter ${
                  isOpenPrice ? "open" : ""
                }`}
              >
                <select
                  className="custom-select"
                  name="order"
                  ref={selectPriceRef}
                  onClick={() =>
                    handleSelectClick(event, handleSelectTogglePrice)
                  }
                  value={filterState.selectedPrice || ""}
                  onChange={(event) =>
                    setFilterState({
                      ...filterState,
                      selectedPrice: event.target.value,
                    })
                  }
                >
                  <option value={null}>Todos los precios</option>
                  <option value="Precio Ascendente">&uarr; Precio</option>
                  <option value="Precio Descendente">&darr; Precio</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </li>
            <li className="sale-li">
              <label className="sale-label">
                <input
                  type="checkbox"
                  name="sale"
                  checked={filterState.isOff}
                  onClick={() =>
                    setFilterState({
                      ...filterState,
                      isOff: !filterState.isOff,
                    })
                  }
                  className="sale-input"
                />
                <span
                  className={`sale-span ${filterState.isOff ? "off" : ""}`}
                ></span>
              </label>
              <h3>Productos en oferta</h3>
            </li>
            <button
              name="limpiar Filtros"
              onClick={handleResetFilters}
              className="reloadButton-modal"
            >
              Limpiar filtros
            </button>
          </form>
          <button className="button-close-modal" onClick={handleCloseModal}>
            Cerrar
          </button>
        </div>
      </Modal>
    </aside>
  );
}

export default SideBar;
