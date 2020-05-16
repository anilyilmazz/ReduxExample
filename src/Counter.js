import React from "react";
import { connect } from "react-redux"
import { DECREASE, INCREASE, RESET } from "./actions"
function Counter({ name, count, increase, decrease, reset }) {
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
      </div>

    </div>
  );
}

function mapStateToProps(state) {
  return { count: state.count, name: state.name }
}
function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    increase: () => dispatch({ type: INCREASE, payload: 1 }),
    decrease: () => dispatch({ type: DECREASE, payload: 1 }),
    reset: () => dispatch({ type: RESET }),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
