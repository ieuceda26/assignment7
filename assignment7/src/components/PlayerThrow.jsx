import styles from "./PlayerThrow.module.css";

export default function PlayerThrow({ onSelect, playerThrow, disabled }) {
  const options = ["rock", "paper", "scissors"];

  return (
    <section id="player" className={styles.section}>
      <h2>Player Throw</h2>
      <div className={styles.choices}>
        {options.map((t) => (
          <img
            key={t}
            src={`/images/${t}.PNG`}
            alt={t.charAt(0).toUpperCase() + t.slice(1)}
            id={t}
            className={`${styles.choice} ${playerThrow === t ? styles.selected : ""}`}
            onClick={() => !disabled && onSelect(t)}
            style={{ cursor: disabled ? "not-allowed" : "pointer" }}
          />
        ))}
      </div>
    </section>
  );
}