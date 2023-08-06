import {
  POST_ALL_COLOR,
  GET_PRODUCTS,
  POST_PRODUCTS,
  GET_ALL_SIZES,
  GET_ALL_CATEGORIES,
  GET_ALL_SERIES,
  GET_PRODUCTS_BY_NAME,
  GET_FILTERED_PRODUCTS
} from "./ActionsTypes";

let initialState = {
  allProducts: [],
  colorList: [],
  sizesList: [],
  categories: [],
  series: [],
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
    case POST_ALL_COLOR:
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
      return  {
     ...state,
     allProducts: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
