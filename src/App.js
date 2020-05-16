import React from "react";
import Counter from "./Counter";
import { createStore } from "redux"
import {DECREASE,INCREASE,RESET} from "./actions"
import reducer from "./reducers"
const defaultState = {
  count: 76,
  name: "bob"
}
const store = createStore(reducer, defaultState);
console.log(store.getState());

store.dispatch({ type: DECREASE, payload: 1 })
store.dispatch({ type: RESET})
store.dispatch({ type: INCREASE, payload: 2 })




const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
