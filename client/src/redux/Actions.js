import axios from 'axios';
import {
  POST_ALL_SIZES,
  POST_ALL_COLOR,
  GET_PRODUCTS,
  POST_PRODUCTS,
  GET_ALL_CATEGORIES,
  GET_ALL_SERIES,
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
      const response = await axios('http://localhost:3001/products');
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
      const response = await axios('http://localhost:3001/products');
      dispatch({
        type: GET_ALL_SERIES,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener los series');
      // console.error('Error al obtener los productos:', error);
    }
  };
}

export function postSizes() {
  return async function (dispatch) {
    try {
      const response = await axios.post('http://localhost:3001/products/size');
      dispatch({
        type: POST_ALL_SIZES,
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
