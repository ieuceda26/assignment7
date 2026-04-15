import styles from "./ResetButton.module.css";
function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} className="reset-button">
      Reset
    </button>
  );
}

export default ResetButton;