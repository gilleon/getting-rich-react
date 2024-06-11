export default function UserInput({ handleChangedValues, userInput }) {
  function Input({ labelName, inputValue }) {
    return (
      <p>
        <label>{labelName}</label>
        <input
          type="number"
          value={inputValue}
          required
          onChange={(e) => handleChangedValues("inputValue", e.target.value)}
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
        />
        <Input
          labelName="Annual Investment"
          inputValue={userInput.annualInvestment}
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
