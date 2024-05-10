import React from "react";

function MyComp(color) {
  return (
    <div style={{ color: color }}>
      <h1>Lorem.</h1>
      <p>Lorem ipsum dolor.</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      {/*red color*/}
      <MyComp />
      {/*  blue color*/}
      <MyComp />
    </div>
  );
}

export default App;
