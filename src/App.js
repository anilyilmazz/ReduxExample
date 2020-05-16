import React from "react";
import Counter from "./Counter";
import { createStore } from "redux"
import reducer from "./reducers"
import {Provider} from "react-redux"

const defaultState = {
  count: 0,
  name: "bob"
}
const store = createStore(reducer, defaultState);

const App = () => {
  return( 
  <Provider store = {store}>
  <Counter />
  </Provider>)
};

export default App;
