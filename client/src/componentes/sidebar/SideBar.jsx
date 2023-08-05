import React, { useState } from "react";
import "./SideBAr.css"; // Importamos los estilos CSS específicos

function SearchBarAside() {
  const [searchValue, setSearchValue] = useState("");

  const handleEventSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    // Aquí puedes realizar cualquier acción de búsqueda que necesites
    console.log("Búsqueda realizada: ", searchValue);
  };

  return (
    <aside className="search-bar-aside">
    <form className="search-form">
     
      <li className="li-filtros">
            <h2>Filtrar por color</h2>
            <select >
              <option value="">All recipes</option>
              <option value="DataBase">DataBase</option>
              <option value="Api">Api</option>
            </select>
          </li>
          <li >
            <h2>Filtrar por tallas</h2>
            <select >
              <option value="">All recipes</option>
              <option value="DataBase">DataBase</option>
              <option value="Api">Api</option>
            </select>
          </li>
          <li >
            <h2>Ordenar por precio</h2>
        
          </li>
          <li >
            <h2>Filtrar por color</h2>
            <select >
              <option value="">All recipes</option>
              <option value="DataBase">DataBase</option>
              <option value="Api">Api</option>
            </select>
          </li>
          <li >
            <h2>Filtrar por serie</h2>
            <select >
              <option value="">All recipes</option>
              <option value="DataBase">DataBase</option>
              <option value="Api">Api</option>
            </select>
          </li>
          <li >
            <h2>Filtrar por categoria</h2>
            <select >
              <option value="">All recipes</option>
              <option value="DataBase">DataBase</option>
              <option value="Api">Api</option>
            </select>
          </li>
          <li >
            <h2>Filtrar por oferta</h2>
            <select >
              <option value="">All recipes</option>
              <option value="DataBase">DataBase</option>
              <option value="Api">Api</option>
            </select>
          </li>
          <label>Precio máximo</label>
          <input placeholder="Precio mínimo"></input>
          <label>Precio mínimo</label>
          <input placeholder="Precio máximo"></input>
          <button>Ordenar</button>
          
    </form>
  </aside>
  );
}

export default SearchBarAside;
