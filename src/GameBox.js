import React from "react";
import "./css/Square.css";

function GameBox({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default GameBox;
