import React, { useState } from "react";

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
  let winner=()=>{
    for (let i = 1; i <= itemArray.length; i++) {
        for (let j = 0; j < winSituations.length; j++) {
          if(itemArray[i] && itemArray[i-1] && itemArray[i+1] == winSituations[j]) {
            setWinMessage("YOU WIN");
            break;
          }
        }
    }
  }

  console.log(itemArray);
  return <div>App</div>;
}
