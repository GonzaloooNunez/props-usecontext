// ./components/CalculatorContext.jsx

import React, { createContext, useState } from "react";

const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState("");

  const addNumber = (number) => {
    setSelectedNumbers([...selectedNumbers, number]);
  };

  const resetCalculator = () => {
    setSelectedNumbers([]);
    setCurrentNumber("");
  };

  return (
    <CalculatorContext.Provider
      value={{
        selectedNumbers,
        currentNumber,
        setCurrentNumber,
        addNumber,
        resetCalculator,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export { CalculatorProvider, CalculatorContext };
