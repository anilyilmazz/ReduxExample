import React from "react";
import {connect} from "react-redux"
import {DECREASE,INCREASE,RESET} from "./actions"
function Counter(props) {
  return (
    <div className = "container">
      <p>{props.name}</p>
      <p>{props.count} </p>
 
      <div className = "buttons">
        <button type ="button" className = "btn" 
        onClick = {()=>props.dispatch({ type: INCREASE, payload: 1 }) }>Inc</button>
        <button type ="button" className = "btn" 
        onClick = {()=>props.dispatch({ type: DECREASE, payload: 1 }) }>Dec</button>
        <button type ="button" className = "btn" 
        onClick = {()=>props.dispatch({ type: RESET, payload: 1 }) }>Rest</button>
      </div>
      
    </div>
  );
}
function mapStateToProps(state) {
  return {count:state.count,name:state.name}
}

export default connect(mapStateToProps) (Counter);
