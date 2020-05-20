import React from 'react';
import './App.css';

class Game {
  state = {
    height: 8,
    width: 8,
    mines: 10}
}

render() ;{
  const { height, width, mines } = this.state;
  return (
    <div className="game">
      <Board height={height} width={width} mines={mines} />
    </div>
  );
}
 export default Game;