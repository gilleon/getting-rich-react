import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const INITIAL_VALUES = {
    initialInvestment: 1000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  };
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
    <>
      <Header />
      <UserInput
        userInput={userInput}
        handleChangedValues={handleChangedValues}
      />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
