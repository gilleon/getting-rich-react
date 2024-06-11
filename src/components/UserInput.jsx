export default function UserInput({ handleChangedValues, userInput }) {
  function Input({ labelName, inputValue, onChange }) {
    return (
      <p>
        <label>{labelName}</label>
        <input
          type="number"
          value={inputValue}
          required
          onChange={(e) => onChange(e.target.value)}
        />
      </p>
    );
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          labelName="Initial Investment"
          inputValue={userInput.initialInvestment}
          onChange={(newValue) =>
            handleChangedValues("initialInvestment", newValue)
          }
        />
        <Input
          labelName="Annual Investment"
          inputValue={userInput.annualInvestment}
          onChange={(newValue) =>
            handleChangedValues("annualInvestment", newValue)
          }
        />
      </div>
      <div className="input-group">
        <Input
          labelName="Expected Return"
          inputValue={userInput.expectedReturn}
          onChange={(newValue) =>
            handleChangedValues("expectedReturn", newValue)
          }
        />
        <Input
          labelName="Duration"
          inputValue={userInput.duration}
          onChange={(newValue) => handleChangedValues("duration", newValue)}
        />
      </div>
    </section>
  );
}
