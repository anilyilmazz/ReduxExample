import React from "react";
import Counter from "./Counter";
import { createStore } from "redux"
// import {DECREASE,INCREASE,RESET} from "./actions"
import reducer from "./reducers"
import {Provider} from "react-redux"

const defaultState = {
  count: 76,
  name: "bob"
}
const store = createStore(reducer, defaultState);

// store.dispatch({ type: DECREASE, payload: 1 })
// store.dispatch({ type: RESET})
// store.dispatch({ type: INCREASE, payload: 5 })

const App = () => {
  return( 
  <Provider store = {store}>
  <Counter />
  </Provider>)
};

export default App;
