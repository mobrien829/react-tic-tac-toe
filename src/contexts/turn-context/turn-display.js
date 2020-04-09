import React, { useContext } from "react";
import { TurnContext } from "./TurnContext";

function TurnDisplay() {
  const [turn] = useContext(TurnContext);

  return <div className="game-info">{turn}</div>;
}

export default TurnDisplay;
