import React from "react";
import Counter from "./Counter";
import { createStore,combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux"

//Reducers
import countReducer from "./countReducer"
import productReducer from "./productReducer"
import modalReducer from "./modalReducer"

//Componets
import Modal from "./Modal"

const store = createStore(combineReducers({
  countState : countReducer,
  productState : productReducer,
  modalState : modalReducer

}), composeWithDevTools());
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Modal/>
    </Provider>)
};

export default App;
