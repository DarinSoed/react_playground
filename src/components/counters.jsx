import React from "react";
import Counter from "./counter";

function Counters (props) {
    const { onReset, counters, onDelete, onIncrement, onDecrement } = props;
     console.log(counters)
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
       
      </div>
    ); 
}

export default Counters;
