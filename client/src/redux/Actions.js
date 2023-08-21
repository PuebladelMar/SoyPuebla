import axios from 'axios';
import {
  GET_ALL_SIZES,
  GET_ALL_COLOR,
  GET_PRODUCTS,
  POST_PRODUCTS,
  GET_ALL_CATEGORIES,
  GET_ALL_SERIES,
  GET_PRODUCTS_BY_NAME,
  GET_FILTERED_PRODUCTS,
  GET_USERS,
  POST_USERS,
  PUT_USERS,
  DELETE_USERS,
  POST_TO_CART,
  GET_USER_CART,
  SEND_MAIL,
  DELETE_CART,
  DELETE_CART_USER,
  ADD_HISTORY,
  ADD_TO_FAVORITES, 
  REMOVE_FROM_FAVORITES,
  NOTIFY_STOCK,
  POST_REVIEWS,
  GET_REVIEWS,
  GET_ALL_FAV,
  GET_USER_BY_ID,
  GET_USER_BY_NAME,
  GET_REVIEW_BY_ID,
  GET_ALL_HISTORY,
  PUT_COLORS,
  POST_INFORMATION,
  GET_LATEST_INFORMATION,
  POST_QUESTIONS,
  DELETE_QUESTIONS,
  GET_ALL_QUESTIONS,
  DELETE_COLOR,
} from "./ActionsTypes";


export function getProducts() {
  return async function (dispatch) {
    try {
      const response = await axios("/products");
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener los productos');
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      const response = await axios("/products/category");
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener los categorias');
    }
  };
}

export function getSeries() {
  return async function (dispatch) {
    try {
      const response = await axios("/products/series");
      dispatch({
        type: GET_ALL_SERIES,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener las series');
    }
  };
}

export function getSizes() {
  return async function (dispatch) {
    try {
      const response = await axios("/products/size");
      dispatch({
        type: GET_ALL_SIZES,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener los talles');
    }
  };
}

export function getColor() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/products/color");
      dispatch({
        type: GET_ALL_COLOR,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener los colores');
    }
  };
}

export function postProducts(createProduct) {
  return async function (dispatch) {
    try {
      await axios.post(`/products/`, createProduct);
      alert("Su producto se creo correctamente");
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
      const response = await axios(`/products?name=${name}`);
      dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener las coincidencias');
      console.error('Error al obtener las coincidencias:', error);
    }
  };
}

export function filterProducts(filters) {
  return async function (dispatch) {
    try {
      const queryParams = Object.entries(filters)
        .map(([key, value]) => {
          if (value !== null && value !== '') {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          }
          return null;
        })
        .filter((query) => query !== null)
        .join("&");
      const response = await axios.get(`/products?${queryParams}`);
      dispatch({
        type: GET_FILTERED_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      alert("Error al filtrar");
      console.error("Error al filtrar", error);
    }
  };
}

export function getUsers() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/users");
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener usuarios');
    }
  };
}

export function postUsers(userClerkId, user, fullName) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/users/`, {
        clerkId: userClerkId,
        user: user,
        fullName: fullName,
      });
      return dispatch({
        type: POST_USERS,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function addToCar(userId, stockId, quantity) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/cart`, {
        userId,
        stockId,
        quantity,
      });

      alert("Se ha añadido el producto al carrito");

      return dispatch({
        type: POST_TO_CART,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export const getUserCart = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/cart/${userId}`);
      const data = await response.json();

      dispatch({ type: GET_USER_CART, payload: data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export function sendMail(data) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/notify/email`, {
        emailSubject: data.emailSubject ,
        emailsUsers: data.emailsUsers,
        
      });
      return dispatch({
        type: SEND_MAIL,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function deleteCart(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`http://localhost:3001/cart/${id}`);
      dispatch({
        type: DELETE_CART,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function deleteCartUser(id, sale) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/cart/user?id=${id}&&sale=${sale}`
      );
      dispatch({
        type: DELETE_CART_USER,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function addHistory(userId, state) {
  return async function (dispatch) {
    try {
      await axios.post(`/history/${userId}`, { state: state });
      dispatch({
        type: ADD_HISTORY,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function addToFavorites(userId, productId) {
  return async function (dispatch) {
    try {
     await axios.post(`http://localhost:3001/cart/fav/`, {
      userId: userId,
      productId: productId
    });
      dispatch({
        type: ADD_TO_FAVORITES,
        payload: productId,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function getAllFav(userId) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/cart/fav/${userId}`);
      dispatch({
        type: GET_ALL_FAV,
        payload: response.data,
      });
    } catch (error) {
      alert("Error al obtener usuarios");
    }
  };
}

export function removeFromFavorites(userId, productId ) {
  return async function(dispatch) {
    try {
      const response = await axios.delete(`http://localhost:3001/cart/fav/`, {
        data: {
          userId,
          productId,
        }
      });
      dispatch({
        type: REMOVE_FROM_FAVORITES,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function notifyStock(data) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/notify/stockNotify`, {
        user_email: data.user_email,
        stock_id: data.stock_id,
      });
      return dispatch({
        type: NOTIFY_STOCK,

      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function postReviews(userComment) {
 
  return async function (dispatch) {
    try {
     
      await axios.post(`/products/review`, 
        userComment,
      );

      alert('Su comentario se envió correctamente');
      return dispatch({
        type: POST_REVIEWS,
        payload: userComment ,
      });
    } catch (error) {
      alert(error);
    }
  };
}

export function getReviews() {
  return async function (dispatch) {
    try {
      const response = await axios('/products/review');
      dispatch({
        type: GET_REVIEWS,
        payload: response.data,
      });
    } catch (error) {
      alert('Error al obtener los comentarios');
    }
  };
}

export function deleteUser(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`http://localhost:3001/users/user${id}`);
      dispatch({
        type: DELETE_USERS,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/users/user${id}`);
      dispatch({
        type: GET_USER_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function editUser(id, userRole, banUser) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`http://localhost:3001/users/user${id}`,{
        userRole: userRole,
        banUser: banUser,
      });
      dispatch({
        type: PUT_USERS,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function getUserByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/users?name=${name}`);
      dispatch({
        type: GET_USER_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}


export function getReviewById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/products/review/${id}`);
      dispatch({
        type: GET_REVIEW_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function getAllHistory() {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/history`);
      dispatch({
        type: GET_ALL_HISTORY,
        payload: response.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}


export function editColors(id, name, codHex ) {
  return async function (dispatch) {
    try {
      console.log("Datos que se envían en la solicitud PUT:", { id, name, codHex });
      const response = await axios.put(`http://localhost:3001/products/${id}`,{
        name: name,
        codHex: codHex
        
      });
      dispatch({
        type: PUT_COLORS,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

      export function getAllInformation() {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/information`);
      dispatch({
        type: GET_LATEST_INFORMATION,
        payload: response.data,
      });
    } catch (error) {
      alert(error);

    }
  };
}


export function deleteSeries(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
       ` http://localhost:3001/products/series/${id}`
      );
      dispatch({
        type: DELETE_SERIES,
        payload: response.data,
      });
    } catch (error) {
      alert('daleee rey');
    }
  };
}
export function postInformation({ email, phone, instagram, facebook, whatsapp, image }) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/information`,{
        email, phone, instagram, facebook, whatsapp, image 
      });
      dispatch({
        type: POST_INFORMATION,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
} 
    
    
export function getAllQuestions() {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/question`);
      dispatch({
        type: GET_ALL_QUESTIONS,
        payload: response.data,
      });
    } catch (error) {
      alert(error);

    }
  };
}


export function deleteQuestions(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
       `http://localhost:3001/question/${id}`
      );
      dispatch({
        type: DELETE_QUESTIONS,
        payload: response.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}

export function postQuestions({questions, answers }) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/question`,{
        questions, answers 
      });
      dispatch({
        type: POST_QUESTIONS,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
} 
export function deleteColor(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      dispatch({
        type: DELETE_COLOR,
        payload: id,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}