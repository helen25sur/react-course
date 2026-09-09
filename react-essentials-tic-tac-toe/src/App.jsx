import { useState } from 'react';

import GameBoard from './components/GameBoard.jsx';
import Player from './components/Player.jsx';
import Log from './components/Log.jsx';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectedSquare(rowIndex, cellIndex) {
    setCurrentPlayer(curPlayer => curPlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const curPlayer = (prevTurns[0]?.player === 'X' ? 'O' : 'X');

      const updatedTurns = [{ square: { row: rowIndex, cell: cellIndex }, player: curPlayer }, ...prevTurns];
      return updatedTurns;
    })
  }
  console.log(currentPlayer === 'X' ? 'active' : '');
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
