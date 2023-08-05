import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCTS_BY_NAME } from "./ActionsTypes";

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
      console.error("Error al obtener los productos:", error);
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
