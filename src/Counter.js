import React from "react";

function Counter(props) {
  const amount = props.state.count;
  const name = props.state.name;
  const [count,setCount] = React.useState(1);
  return (
    <div className = "container">
      <p>counter {amount}</p>
      <p> {name}</p>

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

export default Counter;
