import React, { useState } from "react";
import List from "./List";
function App() {
  const [list, setList] = useState(<List />);
  const [number, setNumber] = useState(5);

  const changeEvenet = () => {
    setList([]);
    setNumber(0);
  };
  return (
    <main>
      <section className="container">
        <h3>{number} Birthday Today</h3>
        {list}
        <button
          className="btn"
          onClick={() => {
            changeEvenet();
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
