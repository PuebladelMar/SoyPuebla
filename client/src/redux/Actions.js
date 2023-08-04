import axios from "axios";
import {
    GET_PRODUCTS
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
        console.error("Error al obtener los productos:", error);
      }
    };
  }
  