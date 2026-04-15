/*
Name: Isaac Euceda
Date: 04/14/2026
CSC 372-01
ResultDisplay page where the result of the game is displayed (win, lose, tie).
*/
import styles from "./ResultDisplay.module.css";
function ResultDisplay({ result }) {
  return (
    <div className="result-display">
      <h2>{result}</h2>
    </div>
  );
}

export default ResultDisplay;