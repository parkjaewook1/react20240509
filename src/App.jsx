import React from "react";

function App(props) {
  // object ({}, [])
  // [] : 배열, 원소를 순서대로 저장한 객체
  const a = [6, 7, 8];
  const v1 = a[0];
  const v2 = a[1];
  const v3 = a[2];

  console.log("v1", v1);
  console.log("v2", v2);
  console.log("v3", v3);

  const [x, y, z] = a;
  console.log("x", x);
  console.log("y", y);
  console.log("z", z);

  // 연습 :
  const b = ["pizza", 3.14, "lunch"];
  const x1 = b[0];
  const x2 = b[1];
  const x3 = b[2];

  console.log("x1", x1);
  console.log("x2", x2);
  console.log("x3", x3);

  const c = ["son", "lee"];
  const [a1] = c;
  console.log("a1", a1);
  const [b1, b2, b3] = c;
  console.log("b3", b3);

  const [c1, c2 = "park", c3 = "kim"] = c;
  console.log("c1", c1);
  console.log("c2", c2);
  console.log("c3", c3);

  const d = ["name", "email", "phone"];
  const [d1, d2, d3, d4 = "city"] = d;
  console.log("d1", d1);
  console.log("d2", d2);
  console.log("d3", d3);
  console.log("d4", d4);

  console.log();

  return <div></div>;
}

export default App;
