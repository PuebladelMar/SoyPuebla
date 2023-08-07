import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../../redux/Actions";
import "./SideBAr.css";
// import { color } from "@mui/system";

function SideBar({ handlerEventSideBar, resetFilters }) {
  const dispatch = useDispatch();
  const colorList = useSelector((state) => state.colorList);
  const series = useSelector((state) => state.series);
  const categories = useSelector((state) => state.categories);
  const sizes = useSelector((state) => state.sizesList)


  useEffect(() => {
    dispatch(actions.postColor());
    dispatch(actions.getSeries());
    dispatch(actions.getCategories());
    dispatch(actions.getSizes());
  }, [dispatch]);

  return (
    <aside className="search-bar-aside">
      <form className="search-form-aside" onChange={handlerEventSideBar}>
        <li className="li-filtros">
          <li>
            <h2>Filtrar por categoria</h2>
            <select name="category">
              <option value={null}>Todas las categorias</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </li>
          <h2>Filtrar por color</h2>
          <select name="color">
            <option value={null}>Todos los colores</option>
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
            <option value={null}>Todos las tallas</option>
            {sizes.map((size, index)=> (
              <option key={index} value={size.name}>
                {size.name}
              </option>
            ))}
          </select>
        </li>
        <li>
          <h2>Filtrar por serie</h2>
          <select name="serie">
            <option value={null}>Todos las series</option>
            {series.map((series, index) => (
              <option key={index} value={series.name}>
                {series.name}
              </option>
            ))}
          </select>
        </li>
        <li>
          <h2>Ordenar por precio</h2>
          <select name="order">
            <option value={null}>Todos los precios</option>
            <option value="Precio Ascendente">Precio ascendente</option>
            <option value="Precio Descendente">Precio descendente</option>
          </select>
        </li>
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
          onClick={resetFilters}
          className="reloadButton"
        >
          Limpiar filtros
        </button>
      </form>
    </aside>
  );
}

export default SideBar;
