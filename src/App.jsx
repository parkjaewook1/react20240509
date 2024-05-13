import React, { useState } from "react";

function MyNumber() {
  const [number, setNumber] = useState(5000000000);
  return (
    <div>
      {number} <hr />
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setNumber(number * 10)}>X</button>
      <button onClick={() => setNumber(number / 10)}>/</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyNumber />
    </div>
  );
}

export default App;
