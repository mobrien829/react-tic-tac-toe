import React from "react";
import GameBox from "./GameBox";

function Board() {
  return (
    <div className="game-board">
      <div className="board-row">
        <GameBox value={0} />
        <GameBox value={1} />
        <GameBox value={2} />
      </div>
      <div className="board-row">
        <GameBox value={3} />
        <GameBox value={4} />
        <GameBox value={5} />
      </div>
      <div className="board-row">
        <GameBox value={6} />
        <GameBox value={7} />
        <GameBox value={8} />
      </div>
    </div>
  );
}

export default Board;
