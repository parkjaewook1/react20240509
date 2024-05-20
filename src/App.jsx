import React from "react";

function App(props) {
  // a클릭시
  // form 서브밋 시
  function handleLinkClick(e) {
    e.stopPropagation();
    console.log("막힘");
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    console.log("다른 동작");
  }

  // 기본 동작 막고,, 콘솔에 간단한 메세지 출력
  return (
    <div>
      <a href="https://www.google.com" onClick={handleLinkClick}>
        구글
      </a>
      <hr />
      <form action="https://www.google.com" onSubmit={handleSubmitForm}>
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
