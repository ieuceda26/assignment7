/*
Name: Isaac Euceda
Date: 04/14/2026
CSC 372-01
ScoreBoard page where the player's score (wins, losses, ties) is displayed.
*/
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