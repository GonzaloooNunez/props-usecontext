// ./components/Result.jsx

import React, { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";
import { Link } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const { selectedNumbers, resetCalculator } = useContext(CalculatorContext);

  const total = selectedNumbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="result">
      <h2>Result</h2>
      <div className="total">Total: {total}</div>
      <div className="numbers">Numbers: {selectedNumbers.join(", ")}</div>
      <button onClick={resetCalculator}>Reset</button>
      <Link to="/" className="link">
        Back to Calculator
      </Link>
    </div>
  );
};

export default Result;
