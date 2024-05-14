import React, { useState } from "react";

function MyBox() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>UP</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [view1, setView1] = useState(true);
  return (
    <div>
      <input
        type={"checkbox"}
        checked={view1}
        onChange={(e) => setView1(e.target.checked)}
      />
      {view1 && <MyBox />}
      {/*
     <div>
      <button>up</button>
      <p>{count}</p>
     </div

     */}
    </div>
  );
}

export default App;
