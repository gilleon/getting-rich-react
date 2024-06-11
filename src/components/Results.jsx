import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  console.log(calculateInvestmentResults(userInput));
  let results = calculateInvestmentResults(userInput);
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Value at End of Year</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{isNaN(result.year) ? "N/A" : result.year}</td>
              <td>{isNaN(result.interest) ? "N/A" : result.interest}</td>
              <td>
                {isNaN(result.valueEndOfYear)
                  ? "N/A"
                  : formatter.format(result.valueEndOfYear)}
              </td>
              <td>
                {isNaN(result.annualInvestment)
                  ? "N/A"
                  : result.annualInvestment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
