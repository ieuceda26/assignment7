/*
Name: Isaac Euceda
Date: 04/14/2026
CSC 372-01
ResetButton component that renders a button to reset the game. It calls the onReset function passed as a prop when clicked.
*/
import styles from "./ResetButton.module.css";
function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} className={styles.resetBtn}>
      Reset
    </button>
  );
}

export default ResetButton;