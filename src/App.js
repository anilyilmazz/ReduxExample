import React from "react";
import Counter from "./Counter";
import { createStore } from "redux"

const defaultState = {
  count: 76,
  name: "bob"
}

function reducer(state, action) {
  console.log({ state, action })
  if (action.type === "DECREASE") {
    //  state.count = state.count -1 
    //  return state
    return {...state,count : state.count - action.payload}
  }
  return state
}
const store = createStore(reducer, defaultState);
console.log(store.getState());

store.dispatch({ type: "DECREASE",payload : 1 })

const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
