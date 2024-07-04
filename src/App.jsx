//App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CalculatorProvider } from "./components/CalculatorContext";
import Calculator from "./components/Calculator";
import Result from "./components/Result";

const App = () => {
  return (
    <CalculatorProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </CalculatorProvider>
  );
};

export default App;
