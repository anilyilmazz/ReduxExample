import React from "react";
import Counter from "./Counter";
import { createStore,combineReducers ,applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux"

//Reducers
import countReducer from "./countReducer"
import productReducer from "./productReducer"
import modalReducer from "./modalReducer"
//redux tjhunk

import thunk from "redux-thunk"
//Componets
import Modal from "./Modal"
import Product from "./Product"

const middleware = [thunk]

const store = createStore(combineReducers({
  countState : countReducer,
  productState : productReducer,
  modalState : modalReducer

}), composeWithDevTools(applyMiddleware(...middleware)));
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Modal/>
      <Product/>
    </Provider>)
};

export default App;
