/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import { useCallback, useMemo, useState, useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.style.color = "red";
  }, []);

  return (
    <div>
      <h1>Functional Component</h1>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
