import React from "react";
import Counter from "./Counter";
import { createStore,combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux"
import countReducer from "./countReducer"
import productReducer from "./productReducer"
import modalReducer from "./modalReducer"

const store = createStore(combineReducers({
  countState : countReducer,
  productState : productReducer,
  modalState : modalReducer

}), composeWithDevTools());
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>)
};

export default App;
