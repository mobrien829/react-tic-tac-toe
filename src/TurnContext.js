import React, { useState, createContext } from "react";

export const TurnContext = createContext();

export const TurnContextProvider = (props) => {
  const [turn, setTurn] = useState("X");
  return (
    <TurnContext.Provider value={[turn, setTurn]}>
      {props.children}
    </TurnContext.Provider>
  );
};
