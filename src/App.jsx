import React from "react";

function App(props) {
  const obj = {
    age: 30,
    name: "John Doe",
    email: "john@example.com",
    password: "1234567890",
  };

  return (
    <div>
      나이{obj.age}세 이름은 {obj.name} 이메일 {obj.email} 패스워드
      {obj.password}
    </div>
  );
}

export default App;
