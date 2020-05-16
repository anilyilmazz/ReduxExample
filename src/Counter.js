import React from "react";
import { connect } from "react-redux"
import { decrease, increase, reset,modal_open } from "./actions"
function Counter({ name, count, increase, decrease, reset,modal_open }) {
  return (
    <div className="container">
      <p>{name}</p>
      <p>{count} </p>

      <div className="buttons">
        <button type="button" className="btn"
          onClick={() => increase(1)}>Inc</button>
        <button type="button" className="btn"
          onClick={() => decrease(1)}>Dec</button>
        <button type="button" className="btn"
          onClick={reset}>Reset</button>
           <button type="button" className="btn"
          onClick={modal_open}>Open Modal</button>
      </div>

    </div>
  );
}

function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name }
}
const mapDispatchToProps ={
  increase,
  decrease,
  reset,
  modal_open
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//     reset: () => dispatch(reset()),
//     open: () => dispatch(modal_open("name","text"))
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
