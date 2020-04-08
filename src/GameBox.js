import React from "react";

function GameBox({ value, onClick }) {
  console.log("gamebox render");
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default GameBox;
