import React, { useState } from "react";
import NavBar from "./navbar";
import Counters from "./counters";

function Increment() {
  const [state, setState] = useState(
    {counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]});

  const handleIncrement = (c) => {
     const counters = [...state.counters];
    const index = counters.indexOf(c);
    counters[index] = { ...c };
    counters[index].value++;
    setState({ counters });
  };
  const handleReset = () => {
    const counters = state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    setState({ counters });
  };
  const handleDelete = (counterId) => {
    const counters = state.counters.filter((c) => c.id !== counterId);
    setState({ counters });
  };

    return (
      <React.Fragment>
        <NavBar
          totalCounters={state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={state.counters}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDelete={handleDelete}
          />
        </main>
      </React.Fragment>
    );
  
}

export default Increment;
