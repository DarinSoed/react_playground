import React from "react";

function Counter (props){
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  const formatCount= () => {
    let { value } = props.counter;
    return value === 0 ? "Zero" : value;
  }

    return (
      <div>
        <span className={getBadgeClasses()}>{formatCount()}</span>
        <button
          onClick={() => props.onIncrement(props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => props.onDecrement(props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => props.onDelete(props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  
}

export default Counter;
