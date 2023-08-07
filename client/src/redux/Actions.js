import axios from "axios";
import {
  GET_ALL_SIZES,
  POST_ALL_COLOR,
  GET_PRODUCTS,
  POST_PRODUCTS,
  GET_ALL_CATEGORIES,
  GET_ALL_SERIES,
  GET_PRODUCTS_BY_NAME,
  GET_FILTERED_PRODUCTS,
} from "./ActionsTypes";

export function getProducts() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/products");
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      alert("Error al obtener los productos");
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/products/category");
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: response.data,
      });
    } catch (error) {
      alert("Error al obtener los categorias");
    }
  };
}

export function getSeries() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/products/series");
      dispatch({
        type: GET_ALL_SERIES,
        payload: response.data,
      });
    } catch (error) {
      alert("Error al obtener las series");
    }
  };
}

export function getSizes() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/products/size");
      dispatch({
        type: GET_ALL_SIZES,
        payload: response.data,
      });
    } catch (error) {
      alert("Error al obtener los talles");
    }
  };
}

export function postColor() {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/products/color");
      dispatch({
        type: POST_ALL_COLOR,
        payload: response.data,
      });
    } catch (error) {
      alert("Error al obtener los colores");
    }
  };
}

export function postProducts(createProduct) {
  return async function (dispatch) {
    try {
      await axios.post(`http://localhost:3001/products/`, createProduct);
      alert('Su producto se creo correctamente');
      return dispatch({
        type: POST_PRODUCTS,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/products?name=${name}`
      );
      dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert("Error al obtener las coincidencias");
      console.error("Error al obtener las coincidencias:", error);
    }
  };
}

export function filterProducts(filters) {
  return async function (dispatch) {
    try {
      const queryParams = Object.entries(filters)
        .map(([key, value]) => {
          if (value !== null && value !== "") {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          }
          return null;
        })
        .filter((query) => query !== null)
        .join("&");
      const response = await axios.get(`http://localhost:3001/products?${queryParams}`);

      dispatch({
        type: GET_FILTERED_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      alert(`Error al filtrar ${filterType}`);
      console.error(`Error al filtrar ${filterType}`, error);
    }
  };
}
