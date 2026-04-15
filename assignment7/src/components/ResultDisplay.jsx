import styles from "./ResultDisplay.module.css";
function ResultDisplay({ result }) {
  return (
    <div className="result-display">
      <h2>{result}</h2>
    </div>
  );
}

export default ResultDisplay;