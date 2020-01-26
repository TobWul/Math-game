import React from "react";
import "./style/App.css";
import { useState } from "react";
import Player from "./components/Player";

function App() {
  const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [availableNumbers, setAvailableNumbers] = useState(range);

  const changeTurn = () => {
    setPlayer1Turn(!player1Turn);
  };

  return (
    <div className="App">
      <Player
        turn={player1Turn}
        changeTurn={changeTurn}
        availableNumbers={availableNumbers}
        setAvailableNumbers={setAvailableNumbers}
      />
      <Player
        turn={!player1Turn}
        changeTurn={changeTurn}
        availableNumbers={availableNumbers}
        setAvailableNumbers={setAvailableNumbers}
      />
    </div>
  );
}

export default App;
