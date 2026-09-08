import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({ selectPlayer, activeSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectCell(rowIndex, cellIndex) {
    setGameBoard(prevGameBoard => {
      const newGameBoard = [...prevGameBoard.map(row => [...row])];
      newGameBoard[rowIndex][cellIndex] = activeSymbol;
      return newGameBoard;
    });
    selectPlayer();
  }
  return (
    <ol id="game-board">
      {
        gameBoard.map((row, rowIndex) => <li key={rowIndex}>
          <ol>
            {
              row.map((cell, cellIndex) => (
                <li key={cellIndex}>
                  <button onClick={() => handleSelectCell(rowIndex, cellIndex)}>
                    {cell}
                  </button>
                </li>
              ))
            }
          </ol>
        </li>)
      }

    </ol>
  )
}