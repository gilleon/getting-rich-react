import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const INITIAL_VALUES = {
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };
  const [userInput, setUserInput] = useState(INITIAL_VALUES);

  const validation = userInput.duration >= 1;

  function handleChangedValues(targetedInput, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [targetedInput]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        handleChangedValues={handleChangedValues}
      />
      {validation ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center"> Wrong input added</p>
      )}
    </>
  );
}

export default App;
