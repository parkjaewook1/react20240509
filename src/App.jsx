import React from "react";
// 다른 파일에 있는 변수를 현재 파일에서 사용
import { value1, value2, value3, value4 } from "./MyValues.jsx";

function App(props) {
  return (
    <div>
      <div>values1 : {value1}</div>
      <div>values1 : {value2}</div>
      <div>values3 : {value3}</div>
      <div>values4 : {value4}</div>
    </div>
  );
}

export default App;
