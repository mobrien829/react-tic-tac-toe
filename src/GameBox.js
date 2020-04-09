import React, { useContext } from "react";
import { TurnContext } from "./contexts/turn-context/TurnContext";

function GameBox({ value, onClick }) {
  const [turn, setTurn] = useContext(TurnContext);

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default GameBox;
