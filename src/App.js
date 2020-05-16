import React from "react";
import Counter from "./Counter";
import { createStore } from "redux"

const defaultState = {
  count: 76,
  name: "bob"
}

function reducer(state, action) {
  switch (action.type) {
    case "DECREASE":
      return { ...state, count: state.count - action.payload }
    case "INCREASE":
      return { ...state, count: state.count + action.payload }
    case "RESET":
      return { ...state, count: 0 }
    default:
      return state
  }
}
const store = createStore(reducer, defaultState);
console.log(store.getState());

store.dispatch({ type: "DECREASE", payload: 1 })
store.dispatch({ type: "RESET"})


const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
