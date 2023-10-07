import React, { useState } from "react";
import { create, all } from "mathjs";
import "./Calculator.css";

const math = create(all);

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = math.evaluate(input);
        setResult(calculatedResult.toString());
        setInput(calculatedResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "Del") {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    "",
    "",
    "Del",
    "C",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="calculator">
      <div className="display">{input || result || "0"}</div>
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className={
              ["+", "-", "*", "/"].includes(button)
                ? "operator"
                : button === "="
                ? "equals"
                : button === "C"
                ? "clear"
                : "digit"
            }
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
