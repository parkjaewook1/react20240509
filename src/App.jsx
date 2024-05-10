import React from "react";

// props : properties
// <MyButton name="클릭3" />
function MyButton(props) {
  return (
    <button
      style={{
        padding: "10px",
        background: "green",
        color: "white",
      }}
    >
      {props.name}
    </button>
  );
}

function App(props) {
  return (
    <div>
      <button
        style={{
          padding: "10px",
          background: "blue",
          color: "white",
        }}
      >
        클릭1
      </button>
      <br />
      <button
        style={{
          padding: "10px",
          background: "blue",
          color: "white",
        }}
      >
        클릭2
      </button>
      <br />
      <MyButton name="클릭3" /> <br />
      <MyButton name="클릭4" /> <br />
    </div>
  );
}

export default App;
