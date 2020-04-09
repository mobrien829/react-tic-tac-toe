import React, { useState, useContext } from "react";
import GameBox from "./GameBox";
import { TurnContext } from "./contexts/turn-context/TurnContext";
import { findWinner } from "./winner-logic";
import { boardFilled } from "./game-logic";

function Board() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [turn, setTurn] = useContext(TurnContext);

  const winner = findWinner(boxes);

  const clickHandler = (i) => {
    const nextBoxes = boxes.slice();
    nextBoxes[i] = turn;
    setBoxes(nextBoxes);
    turn === "X" ? setTurn("O") : setTurn("X");
  };
  const renderBox = (i) => {
    return <GameBox value={boxes[i]} onClick={() => clickHandler(i)} />;
  };

  const winnerInfo = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (boardFilled(boxes)) {
      return "Draw lol";
    } else {
      return `Next turn: ${turn}`;
    }
  };

  return (
    <>
      <div className="game-board">
        <div className="board-row">
          {renderBox(0)}
          {renderBox(1)}
          {renderBox(2)}
        </div>
        <div className="board-row">
          {renderBox(3)}
          {renderBox(4)}
          {renderBox(5)}
        </div>
        <div className="board-row">
          {renderBox(6)}
          {renderBox(7)}
          {renderBox(8)}
        </div>
      </div>
      <div className="game-info">{winnerInfo()}</div>
    </>
  );
}

export default Board;
