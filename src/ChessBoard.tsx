import React from 'react';

const ChessBoard = () => {
    let chessBoard = Array(8).fill(null).map((key, indexFirst) =>
    Array(8).fill(null).map((key, indexTwo) => (indexTwo % 2 === 0) ? 
      <div className='blackSquare'>Testi</div> : <div className='whiteSquare'>Testi</div>));
    let chessBoardFinal = chessBoard.map((value, index) => index % 2  === 0 ? value.reverse() : value);
    return chessBoardFinal
}


export default ChessBoard;