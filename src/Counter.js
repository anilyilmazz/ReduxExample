import React from "react";
import { connect } from "react-redux"
import { DECREASE, INCREASE, RESET,MODAL_OPEN } from "./actions"
function Counter({ name, count, increase, decrease, reset,open }) {
  return (
    <div className="container">
      <p>{name}</p>
      <p>{count} </p>

      <div className="buttons">
        <button type="button" className="btn"
          onClick={increase}>Inc</button>
        <button type="button" className="btn"
          onClick={decrease}>Dec</button>
        <button type="button" className="btn"
          onClick={reset}>Reset</button>
           <button type="button" className="btn"
          onClick={open}>Open Modal</button>
      </div>

    </div>
  );
}

function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name }
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    increase: () => dispatch({ type: INCREASE, payload: 1 }),
    decrease: () => dispatch({ type: DECREASE, payload: 1 }),
    reset: () => dispatch({ type: RESET }),
    open: () => dispatch({ type: MODAL_OPEN })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
