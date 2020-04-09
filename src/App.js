import React from "react";
import Board from "./Board";
import { TurnContextProvider } from "./TurnContext";
import TurnDisplay from "./turn-display";
import "./App.css";

function App() {
  // return <GameBox></GameBox>;

  return (
    <>
      <TurnContextProvider>
        <Board />
        <h3 className="game-info">Turn:</h3>
        <TurnDisplay />
      </TurnContextProvider>
    </>
  );
}

export default App;
