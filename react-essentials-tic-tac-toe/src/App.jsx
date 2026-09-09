import { useState } from 'react';

import GameBoard from './components/GameBoard.jsx';
import Player from './components/Player.jsx';
import Log from './components/Log.jsx';

function deriveCurrentPlayer(gameTurns) {
  return (gameTurns[0]?.player === 'X' ? 'O' : 'X');
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = deriveCurrentPlayer(gameTurns);

  function handleSelectedSquare(rowIndex, cellIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveCurrentPlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, cell: cellIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="Player 1" symbol="X" className={currentPlayer === 'X' ? 'active' : undefined} />
          <Player name="Player 2" symbol="O" className={currentPlayer === 'O' ? 'active' : undefined} />
        </ol>
        <GameBoard selectPlayer={handleSelectedSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
