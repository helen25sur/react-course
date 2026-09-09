import { useState } from 'react';


export default function GameBoard({ selectPlayer, board }) {

  return (
    <ol id="game-board">
      {
        board.map((row, rowIndex) => <li key={rowIndex}>
          <ol>
            {
              row.map((cell, cellIndex) => (
                <li key={cellIndex}>
                  <button onClick={() => selectPlayer(rowIndex, cellIndex)} disabled={cell !== null}>
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