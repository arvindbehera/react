/* eslint-disable */
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  const refCounter = useRef(counter);

  const handleCount = () => {
    setCounter((prev) => prev + 1); //increment for state
    refCounter.current++; //increment for ref
    console.log("State", counter); //it will take the
    console.log("Ref", refCounter.current);
  };

  return (
    <div>
      <h3>HOOKS</h3>
      <h3>{counter}</h3> {/* initial render */}
      <button onClick={handleCount}>Add</button>
    </div>
  );
}

export default App;
