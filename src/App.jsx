import React, { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function MyButton({ count, onClick }) {
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>CLICK {count}</button>
        <button onClick={onClick}>CLICK {count}</button>
      </div>
    );
  }

  function MyBox() {
    return <div>{3} 번 클릭됨</div>;
    function MyBox({ count }) {
      return <div>{count} 번 클릭됨</div>;
    }
    function App(props) {
      const [count, setCount] = useState(0);

      function handleClick() {
        setCount(count + 1);
      }

      return (
        <div>
          <MyButton />
          <MyButton count={count} onClick={handleClick} />
          <hr />
          <MyBox />
          <MyBox count={count} />
        </div>
      );
    }

    export default App;

