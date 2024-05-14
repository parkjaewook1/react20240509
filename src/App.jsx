import React, { useEffect, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count 가 변경 될 때");
  }, [count]);
  useEffect(() => {
    console.log("mount 될 때");
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;
