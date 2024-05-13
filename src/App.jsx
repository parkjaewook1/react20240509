import React from "react";
// import : 다른 파일에 있는 변수를 현재 파일에서 사용
// 다른 파일의 같은 변수를 import 할 때 as로 다른 별칭을 줄 수 있음
import { value1, value2, value3 as v3, value4 } from "./MyValues.jsx";
import {
  action1,
  action2,
  action3,
  myAddress,
  MyComp as YourComp,
  myStr,
  value3 as vv3,
} from "./MyComps.jsx";
import { HerComp } from "./HerComp.jsx";

function App(props) {
  action1();
  action2();
  action3();
  return (
    <div>
      <div>value1 : {value1}</div>
      <div>value2 : {value2}</div>
      <div>value3 : {vv3}</div>
      <div>v3 : {v3}</div>
      <div>value4 : {value4.team}</div>
      <div>myStr : {myStr}</div>
      <div>myAddress : {myAddress}</div>
      <YourComp />
      <HerComp />
    </div>
  );
}

export default App;
