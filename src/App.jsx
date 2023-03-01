import React, { useState } from 'react'

export default function App() {
  let [isCrossed, setIsCrossed] = useState(false);
  let [winMessage, setWinMessage] = useState();

  let itemArray = new Array(9).fill("empty");

  let reloadGame = () => {
    setIsCrossed(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  let winSituations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  

  console.log(itemArray);
  return <div>App</div>;
}