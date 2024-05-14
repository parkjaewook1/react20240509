import React, { useState } from "react";

function MyBox() {
  const [text, setText] = useState("");

  // onChange : 행동 할 때 바뀌기위한
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <div></div>
      <p>{text}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyBox />
      <hr />
      <MyBox />
    </div>
  );
}

export default App;
