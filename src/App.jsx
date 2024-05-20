import React from "react";

function App(props) {
  const names = ["January", "February", "March", "April"];
  // 배열을 map 메소드 사용해서 컴포넌트 만들 때
  // key prop을 사용해서 효율성을 높일 것
  // key prop에 값을 주로 primary key가 사용됨
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
        ;
      </ul>
    </div>
  );
}

export default App;
