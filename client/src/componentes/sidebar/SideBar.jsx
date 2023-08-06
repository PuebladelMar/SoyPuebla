import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../../redux/Actions";
import "./SideBAr.css";
// import { color } from "@mui/system";

function SideBar({ handlerEventSideBar }) {
  const dispatch = useDispatch();
  const colorList = useSelector((state) => state.colorList);
  const series = useSelector((state) => state.series);
  const categories = useSelector((state) => state.categories);

  // Estados para los precios máximo y mínimo
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  // const [enOferta, setEnOferta] = useState(false); // Estado para la opción "en oferta"

  useEffect(() => {
    dispatch(actions.postColor());
    dispatch(actions.getSeries());
    dispatch(actions.getCategories());
  }, [dispatch]);

  const handlePrecioMaximoChange = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setMaxPrice(value);
      if (minPrice !== "" && parseInt(value) < parseInt(minPrice)) {
        setMinPrice(value);
      }
    }
  };

  const handlePrecioMinimoChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setMinPrice(value);

      if (maxPrice !== "" && parseInt(value) > parseInt(maxPrice)) {
        setMaxPrice(value);
      }
    }
  };

  // const handleEnOfertaChange = (event) => {
  //   event.preventDefault()
  //   setEnOferta(event.target.checked);
  //   // Aquí puedes hacer lo que necesites con el estado de la opción "en oferta"
  // };

  return (
    <aside className="search-bar-aside">
      <form className="search-form" onChange={handlerEventSideBar}>
        <li className="li-filtros">
          <li>
            <h2>Filtrar por categoria</h2>
            <select name="category">
              <option value="">Todos las categorias</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </li>
          <h2>Filtrar por color</h2>
          <select name="color">
            <option value="">Todos los colores</option>
            {colorList.map((color, index) => (
              <option key={index} value={color.name}>
                {color.name}
              </option>
            ))}
          </select>
        </li>
        <li>
          <h2>Filtrar por tallas</h2>
          <select name="size">
            <option value="">Todos las tallas</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="X">X</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </li>
        <li>
          <h2>Filtrar por serie</h2>
          <select name="serie">
            <option value="">Todos las series</option>
            {series.map((serie, index) => (
              <option key={index} value={serie.name}>
                {serie.name}
              </option>
            ))}
          </select>
        </li>
        <li>
          <h2>ordenar por precio</h2>
          <select name="order">
            <option value="">Todos los precios</option>
            <option value="Precio Ascendente">Precio ascendente</option>
            <option value="Precio Descendente">Precio descendente</option>
          </select>
        </li>
        <label>Precio máximo</label>
        <input
          name="Precio Descendente"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={handlePrecioMaximoChange}
        />
        <label>Precio mínimo</label>
        <input
          name="Precio Ascendente"
          placeholder="Precio mínimo"
          value={minPrice}
          onChange={handlePrecioMinimoChange}
        />
        <li>
          <button
            type="button"
            name="sale"
            className="onSaleButton"
            onClick={handlerEventSideBar}
          >
            ver productos en oferta
          </button>
        </li>
        <button
          name="limpiar Filtros"
          onClick={handlerEventSideBar}
          className="reloadButton"
        >
          LimpiarFiltros
        </button>
      </form>
    </aside>
  );
}

export default SideBar;
