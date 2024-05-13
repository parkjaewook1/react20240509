import React, { useState } from "react";

function App(props) {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [team, setTeam] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          placeholder={"나이"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          placeholder={"국가"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setTeam(e.target.value)}
          placeholder={"팀"}
        />
      </div>
      <div>
        {age}세 {name}은 {country}국적으로 {team}소속 선수
      </div>
    </div>
  );
}

export default App;
