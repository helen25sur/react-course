import { useState } from 'react';

import GameBoard from './components/GameBoard.jsx';
import Player from './components/Player.jsx';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function handleSelectedSquare() {
    setCurrentPlayer(curPlayer => curPlayer === 'X' ? 'O' : 'X');
  }
  console.log(currentPlayer === 'X' ? 'active' : '');
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="Player 1" symbol="X" className={currentPlayer === 'X' ? 'active' : undefined} />
          <Player name="Player 2" symbol="O" className={currentPlayer === 'O' ? 'active' : undefined} />
        </ol>
        <GameBoard selectPlayer={handleSelectedSquare} activeSymbol={currentPlayer} />
      </div>
      LOG
    </main>
  )
}

export default App
