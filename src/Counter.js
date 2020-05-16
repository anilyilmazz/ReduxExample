import React from "react";
import {connect} from "react-redux"
function Counter(props) {
  const [count,setCount] = React.useState(3);
  return (
    <div className = "container">
      <p>{props.name}</p>
      <p>{props.count} </p>
 
      <div className = "buttons">
        <button type ="button" className = "btn" 
        onClick = {()=>setCount(count + 1) }>Inc</button>
        <button type ="button" className = "btn" 
        onClick = {()=>setCount(count -1) }>Dec</button>
        <button type ="button" className = "btn" 
        onClick = {()=>setCount(0) }>Rest</button>
      </div>
      
    </div>
  );
}
function mapStateToProps(state) {
  console.log(state);
  return {count:state.count,name:state.name}
}

export default connect(mapStateToProps) (Counter);
