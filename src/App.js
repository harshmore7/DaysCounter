import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);
  const date = new Date("june 21 2024");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="counter flex">
        <div className="steps flex component">
          <h1>Step : {steps}</h1>
          <div className="btn-group flex">
            <button onClick={() => steps > 0 && setSteps((c) => c - 1)}>
              Decrement
            </button>
            <button onClick={() => setSteps((c) => c + 1)}>Increment</button>
          </div>
        </div>
        <div className="count flex component">
          <h1>Count : {count}</h1>
          <div className="btn-group flex">
            <button onClick={() => setCount((c) => c - steps)}>
              Decrement
            </button>
            <button onClick={() => setCount((c) => c + steps)}>
              Increment
            </button>
          </div>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          {date.toDateString()}
        </p>
      </div>
    </>
  );
}
