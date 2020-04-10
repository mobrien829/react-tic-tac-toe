import React from "react";
import Board from "./Board";
import { TurnContextProvider } from "./contexts/turn-context/TurnContext";
import "./css/App.css";

function App() {
  return (
    <>
      <TurnContextProvider>
        <Board />
      </TurnContextProvider>
    </>
  );
}

export default App;
