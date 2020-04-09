import React, { useContext } from "react";
import { TurnContext } from "./TurnContext";

function GameBox({ value, onClick }) {
  const [turn, setTurn] = useContext(TurnContext);
  const useButton = () => {
    console.log(turn);
    turn === "X" ? setTurn("O") : setTurn("X");
  };
  return (
    <button className="square" onClick={useButton}>
      {value}
    </button>
  );
}

export default GameBox;
