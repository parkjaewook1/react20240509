import React from "react";

function App(props) {
  const a = {
    name: "John",
    age: 44,
    address: {
      street: "Lorem Ipsum",
      city: "seoul",
    },
  };

  // 얕은 복사(shallow copy)
  const { ...b } = a;
  b.age = 55;
  console.log("b.age", b.age);
  console.log("a.age", a.age);

  console.log("a.address.city", a.address.city);
  console.log("b.address.city", b.address.city);

  // 깊은 복사(deep copy)
  // 얕은 복사를 여러번 해서 해결
  //
  const { ...c } = a;
  const { ...address1 } = a.address;
  c.address = address1;
  c.address.city = "london";
  return <div></div>;
}

export default App;
