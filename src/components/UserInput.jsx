import React, { useState } from "react";

const INITIAL_VALUES = {
  initialInvestment: 1000,
  annuallInvestment: 12000,
  expectedReturn: 6,
  duration: 10,
};

function Input({ labelName, inputValue }) {
  return (
    <p>
      <label>{labelName}</label>
      <input
        type="number"
        value={inputValue}
        required
        onClick={(e) => handleChangedValues("inputValue", e.target.value)}
      />
    </p>
  );
}

export default function UserInput() {
  const [userInput, setUserInput] = useState(INITIAL_VALUES);

  function handleChangedValues(targetedInput, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [targetedInput]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          labelName="Initial Investment"
          inputValue={userInput.initialInvestment}
        />
        <Input
          labelName="Annual Investment"
          inputValue={userInput.annuallInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          labelName="Expected Return"
          inputValue={userInput.expectedReturn}
        />
        <Input labelName="Duration" inputValue={userInput.duration} />
      </div>
    </section>
  );
}
