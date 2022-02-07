import React, { useState } from "react";
import NavBar from "../../components/NavBar";
const about = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <NavBar></NavBar>

      <h1>About {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
};

export default about;
