function App() {
  const name = "강인";
  const age = 19; // or 30;
  return (
    <div>
      <p>{name}</p>
      {name === "흥민" && <p>공격수</p>}
      {name === "강인" && <p>미드필더</p>}

      {age >= 20 && <p>투표 가능</p>}
      {age < 20 && <p>투표 불가능</p>}
    </div>
  );
}

export default App;
