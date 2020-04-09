import React, { useContext } from "react";

function ResetButton({ onClick }) {
  return (
    <button className="restart" onClick={onClick}>
      Restart Game
    </button>
  );
}

export default ResetButton;
