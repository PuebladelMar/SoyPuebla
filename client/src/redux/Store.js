import { createStore, applyMiddleware, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk';
// import Reducer from './Reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  //   Reducer,
  composeEnhancer(applyMiddleware(ThunkMiddleware))
);

export default Store;
