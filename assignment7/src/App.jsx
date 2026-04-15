/*
Name: Isaac Euceda
Date: 04/14/2026
CSC 372-01
Main App component that manages the state of the game, including player and computer throws, game result, and score. It also handles user interactions and game logic.
*/
import { useState, useEffect } from "react";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";
import "./App.css";

const options = ["rock", "paper", "scissors"];

function getWinner(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "win";
  return "lose";
}

export default function App() {
  const [playerThrow, setPlayerThrow] = useState(null);
  const [computerThrow, setComputerThrow] = useState(null);
  const [result, setResult] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [score, setScore] = useState({ win: 0, lose: 0, tie: 0 });

  function handleSelect(choice) {
    if (animating) return;
    const computer = options[Math.floor(Math.random() * 3)];
    const outcome = getWinner(choice, computer);

    setPlayerThrow(choice);
    setComputerThrow(computer);
    setResult(null);
    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
      setResult(outcome);
      setScore((prev) => ({ ...prev, [outcome]: prev[outcome] + 1 }));
    }, 3000);
  }

  function handleReset() {
    setPlayerThrow(null);
    setComputerThrow(null);
    setResult(null);
    setAnimating(false);
    setScore({ win: 0, lose: 0, tie: 0 });
  }

  return (
    <div className="app">
      <h1>Rock Paper Scissors</h1>
      <ScoreBoard score={score} />
      <PlayerThrow
        onSelect={handleSelect}
        playerThrow={playerThrow}
        disabled={animating}
      />
      <ComputerThrow
        computerThrow={computerThrow}
        animating={animating}
      />
      <ResultDisplay result={result} />
      <ResetButton onReset={handleReset} />
    </div>
  );
}