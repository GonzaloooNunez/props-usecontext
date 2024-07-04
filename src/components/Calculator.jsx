// ./components/Calculator.jsx

import React, { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";
import { Link } from "react-router-dom";
import "./Calculator.css";

const Calculator = () => {
  const { currentNumber, setCurrentNumber, addNumber } =
    useContext(CalculatorContext);

  const handleButtonClick = (number) => {
    setCurrentNumber(currentNumber + number);
  };

  const handleAddNumber = () => {
    if (currentNumber !== "") {
      addNumber(parseFloat(currentNumber));
      setCurrentNumber("");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{currentNumber}</div>
      <div className="buttons">
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i} onClick={() => handleButtonClick(i.toString())}>
            {i}
          </button>
        ))}
        <button className="Add" onClick={handleAddNumber}>
          Add
        </button>
      </div>
      <Link to="/result">See Result</Link>
    </div>
  );
};

export default Calculator;
