import React from "react";
import "./css/Board.css";

function ResetButton({ onClick }) {
  return (
    <button className="restart" onClick={onClick}>
      Restart Game
    </button>
  );
}

export default ResetButton;
