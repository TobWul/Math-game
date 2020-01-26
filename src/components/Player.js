import React, { useState } from "react";
import Button from "./Button";
import { useEffect } from "react";
import style from "../style/Player.module.scss";

const Player = ({
  turn,
  changeTurn,
  availableNumbers,
  setAvailableNumbers
}) => {
  const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [possibilities, setPossibilities] = useState([]);
  const [turnNumber, setTurnNumber] = useState(1);
  const [score, setScore] = useState(0);

  const findPossibilities = (score, turnNumber) => {
    const p = [];
    let ar = [...availableNumbers];
    // console.log(turnNumber);

    if (turnNumber === 2) {
      ar.forEach(i => {
        ar = [...availableNumbers];
        ar.splice(ar.indexOf(i), 1);
        ar.forEach(j => {
          // console.log(`${score} + ${i} + ${j} = ${score + i + j}`);
          score + i + j === 15 && p.push(i);
        });
      });
    } else if (turnNumber === 3) {
      ar.forEach(i => {
        // console.log(`${score} + ${i} = ${score + i}`);
        score + i === 15 && p.push(i);
      });
    }
    // console.log(p);

    setPossibilities(p);
  };

  useEffect(() => {
    findPossibilities(score, turnNumber);
  }, [turn]);

  const click = n => {
    setScore(score + n);
    const a = availableNumbers;
    a.splice(a.indexOf(n), 1);
    setAvailableNumbers(a);
    changeTurn();
    setTurnNumber(turnNumber + 1);
  };
  return (
    <div className={style.player}>
      <div
        className={style.score}
        style={
          score === 6 || score === 9 ? { "text-decoration": "underline" } : {}
        }
      >
        {score}
      </div>
      <p>Turn: {turnNumber}</p>
      <div className={style.numbers}>
        {range.map(n => {
          return (
            <Button
              on={!availableNumbers.includes(n)}
              key={n}
              possibility={possibilities.includes(n)}
              onClick={e => turn && availableNumbers.includes(n) && click(n)}
            >
              {n}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Player;
