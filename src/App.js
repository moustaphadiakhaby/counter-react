import "./App.css";
import { useState } from "react";
import minus from "./img/minus.png";
import plus from "./img/plus.png";
import calculator from "./img/calculator.png";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={calculator} alt="" />
        </div>
        <h1>React Counter</h1>
      </header>
      <div className="main container">
        <div className="counterbox">
          <div
            onClick={() => {
              setCounter(counter - 1);
            }}
            className={counter <= 0 ? "hidden" : "minus"}
          >
            <img src={minus} alt="" />
          </div>
          <div className="number">{counter}</div>
          <div
            onClick={() => {
              setCounter(counter + 1);
            }}
            className={counter >= 10 ? "hidden" : "plus"}
          >
            <img src={plus} alt="" />
          </div>
        </div>
        <button
          onClick={() => {
            setCounter(0);
          }}
          className="reset"
        >
          Reset
        </button>
        <p className="sign">
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Moustapha</span>
        </p>
      </div>
    </div>
  );
}

export default App;
