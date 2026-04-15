/*
Name: Isaac Euceda
Date: 04/14/2026
CSC 372-01
ComputerThrow page where the computer's throw is displayed. Shows an animation while the computer is "thinking" and then reveals the final choice.
*/
import { useEffect, useState } from "react";
import styles from "./ComputerThrow.module.css";

const options = ["rock", "paper", "scissors"];

function ComputerThrow({ computerThrow, animating }) {
  const [displayed, setDisplayed] = useState(null);

    useEffect(() => {
        if (!animating) {
            setDisplayed(computerThrow);
            return;
        }
        let count  = 0;
        const interval = setInterval(() => {
            setDisplayed(options[count % options.length]);
            count++;
        }, 500);
        return () => clearInterval(interval);
    }, [animating, computerThrow]);

    const imgSrc = displayed ? `/images/${displayed}.PNG` : "/images/question-mark.PNG";
    const imgAlt = displayed ? displayed.charAt(0).toUpperCase() + displayed.slice(1) : "Computer Choice";
  
    return (
    <section id="computer" className={styles.section}>
      <h2>Computer Throw</h2>
          <img
            id="computer-choice"
            src={imgSrc}
            alt={imgAlt}
            className={styles.computerImage}
            />
    </section>
  );
}

export default ComputerThrow;