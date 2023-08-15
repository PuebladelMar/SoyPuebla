import {
  GET_ALL_COLOR,
  GET_PRODUCTS,
  POST_PRODUCTS,
  GET_ALL_SIZES,
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
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  NOTIFY_STOCK,
  POST_REVIEWS,
  GET_REVIEWS,
} from "./ActionsTypes";

let initialState = {
  allProducts: [],
  colorList: [],
  sizesList: [],
  categories: [],
  series: [],
  allUsers: [],
  userId: [],
  userCart: [],
  deleteCartUser: [],
  deleteCart: [],
  favorites: [],
  reviews: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_ALL_SERIES:
      return {
        ...state,
        series: action.payload,
      };

    case POST_PRODUCTS:
      return {
        ...state,
        // allProducts: [...state.allProducts, action.payload],
      };
    case GET_ALL_COLOR:
      return {
        ...state,
        colorList: action.payload,
      };
    case GET_ALL_SIZES:
      return {
        ...state,
        sizesList: action.payload,
      };

    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_FILTERED_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case POST_USERS:
      return {
        ...state,
        allUsers: action.payload,
        userId: action.payload.user.id,
      };
    case POST_TO_CART:
      return {
        ...state,
      };
    case GET_USER_CART:
      return {
        ...state,
        userCart: action.payload,
      };

    case DELETE_CART_USER:
      return {
        ...state,
        deleteCartUser: action.payload,
      };
    case DELETE_CART:
      return {
        ...state,
        deleteCart: action.payload,
      };
    case SEND_MAIL:
      return {
        ...state,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.id !== action.payload
        ),
      };
    case SEND_MAIL:
      return {
        ...state,
      };
    case NOTIFY_STOCK:
      return {
        ...state,
      };
    case POST_REVIEWS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
