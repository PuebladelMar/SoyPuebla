import { GET_PRODUCTS, GET_PRODUCTS_BY_NAME } from "./ActionsTypes";

let initialState = {
  allProducts: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        allProducts: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
