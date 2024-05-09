function someMethod() {
  return "hello js";
}
function someMethod2(param) {
  return param + param;
}

function App() {
  const a = 5;
  const b = 9;
  return (
    <>
      <div>
        <p>
          {a} X {b} = {a * b}
        </p>
        <p>{someMethod()}</p>
        <p>{someMethod2("react")}</p>
      </div>
    </>
  );
}

export default App;
