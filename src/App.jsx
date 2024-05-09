import React from "react";

function App(props) {
  const a = {};
  console.log("a", typeof a);

  const b = [];
  console.log("b", typeof b);

  // 배열: 여러 값을 순서(index)대로 가지고 있는 객체

  const c = ["son", "lee", "kim", "hwang"];
  console.log("c", c);
  console.log("c의 0", c[0]);
  console.log("c의 1", c[1]);
  console.log("c의 2", c[2]);
  console.log("c의 3", c[3]);

  return <div></div>;
}

export default App;
