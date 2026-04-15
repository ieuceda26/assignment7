import styles from "./ScoreBoard.module.css";
export default function ScoreBoard({  score }) {
    return (
        <div className={styles.scoreboard}>
            <h2>Score Board</h2>
            <span>Wins: {score.win}</span>
            <span>Losses: {score.lose}</span>
            <span>Ties: {score.tie}</span>
        </div>
    );
}