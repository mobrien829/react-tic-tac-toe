import React from "react";
import Board from "./Board";
import { TurnContextProvider } from "./contexts/turn-context/TurnContext";
import TurnView from "./contexts/turn-context/turn-view";
import "./App.css";

function App() {
  // return <GameBox></GameBox>;

  return (
    <>
      <TurnContextProvider>
        <Board />
        <TurnView />
      </TurnContextProvider>
    </>
  );
}

export default App;
