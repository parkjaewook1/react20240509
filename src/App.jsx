import React from "react";

function App(props) {
  const a = {
    name: "John",
  };

  const b = a;

  console.log(a === b);

  console.log("a.name", a.name);
  console.log("b.name", b.name);

  b.name = "Jane";

  console.log("a.name", a.name);
  console.log("b.name", b.name);

  return <div></div>;
}

export default App;
