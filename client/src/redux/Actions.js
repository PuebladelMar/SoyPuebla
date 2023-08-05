import axios from 'axios';
import {
  GET_ALL_SIZES,
  POST_ALL_COLOR,
  GET_PRODUCTS,
  POST_PRODUCTS,
  GET_ALL_CATEGORIES,
  GET_ALL_SERIES,
  GET_PRODUCTS_BY_NAME,
} from './ActionsTypes';

export function getProducts() {
  return async function (dispatch) {
    try {
      const response = await axios('http://localhost:3001/products');
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener los productos');
      // console.error('Error al obtener los productos', error);
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      const response = await axios('http://localhost:3001/products/category');
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener los categorias');
      // console.error('Error al obtener los productos:', error);
    }
  };
}

export function getSeries() {
  return async function (dispatch) {
    try {
      const response = await axios('http://localhost:3001/products/series');
      dispatch({
        type: GET_ALL_SERIES,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener las series');
      // console.error('Error al obtener los productos:', error);
    }
  };
}

export function getSizes() {
  return async function (dispatch) {
    try {
      const response = await axios('http://localhost:3001/products/size');
      dispatch({
        type: GET_ALL_SIZES,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener los talles');
      // console.error('Error al obtener los productos:', error);
    }
  };
}

export function postColor() {
  return async function (dispatch) {
    try {
      const response = await axios.post('http://localhost:3001/products/color');
      dispatch({
        type: POST_ALL_COLOR,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener los colores');
      // console.error('Error al obtener los productos:', error);
    }
  };
}

export function postProducts(createProduct) {
  return async function (dispatch) {
    try {
      await axios.post(`http://localhost:3001/products/`, createProduct);
      return dispatch({
        type: POST_PRODUCTS,
      });
    } catch (error) {
      console.log(error);
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