import React, { useState } from "react";

function App(props) {
  const [car, setCar] = useState({
    name: "",
    model: "",
    price: 0,
    company: "",
  });

  function handleNameChange(e) {
    setCar({ ...car, name: e.target.value });
  }
  function handlePriceChange(e) {
    const { ...nextCar } = car;
    nextCar.price = e.target.value;
    setCar(nextCar);
  }
  function handleCompanyChange(e) {
    function handleChange(e) {
      const { ...nextCar } = car;
      nextCar.company = e.target.value;
      nextCar[e.target.name] = e.target.value;
      setCar(nextCar);
    }
    function handleModelChange(e) {
      setCar({ ...car, model: e.target.value });
    }

    return (
      <div>
        <div>
          <input type="text" placeholder={"이름"} onChange={handleNameChange} />
          <input
            type="text"
            placeholder={"이름"}
            name={"name"}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="text" placeholder={"모델"} onChange={handleModelChange} />
          <input
            type="text"
            placeholder={"모델"}
            name={"model"}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={"회사"}
            onChange={handleCompanyChange}
            name={"company"}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder={"가격"}
            onChange={handlePriceChange}
            name={"price"}
            onChange={handleChange}
          />
        </div>

        <ul>
          <li>이름 : {car.name}</li>
          <li>모델 : {car.model}</li>
          <li>회사 : {car.company}</li>
          <li>가격 : {car.price}</li>
        </ul>
      </div>
    );
  }

  export default App;

