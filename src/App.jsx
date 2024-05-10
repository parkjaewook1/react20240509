import React from "react";

function MyComp({ headColor, bodyColor }) {
  function MyComp({ headStyle, bodyStyle }) {
    return (
      <div>
        <h1 style={{ color: headColor }}>Lorem.</h1>
        <p style={{ color: bodyColor }}>Lorem ipsum dolor.</p>
        <h1 style={headStyle}>Lorem.</h1>
        <p style={bodyStyle}>Lorem ipsum dolor.</p>
      </div>
    );
  }

  function App(props) {
    return (
      <div>
        <MyComp headColor={"skyblue"} bodyColor={"gold"} />
        <MyComp headColor={"gray"} bodyColor={"linen"} />
        <MyComp
          headStyle={{
            padding: "5px",
            border: "1px solid lightgray",
            color: "blue",
          }}
          bodyStyle={{
            margin: "5px",
            border: "1px dotted skyblue",
            color: "red",
            textAlign: "center",
          }}
        />
      </div>
    );
  }

  export default App;

