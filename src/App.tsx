import './App.css';
import React from 'react';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessRook } from '@fortawesome/free-solid-svg-icons'
import ChessBoard  from './ChessBoard.tsx';
import { useEffect, useState } from 'react';
import InitialSoldiers  from './InitialSoldiers.tsx';


const App = ()  => {

  const [state, setState] = useState(InitialSoldiers());
  console.log('STATE', state)

  let chessBoard = Array(8).fill(null).map((key, indexFirst) =>
  Array(8).fill(null).map((key, indexTwo) => (indexTwo % 2 === 0) ? 
    <div className='blackSquare'>Testi</div> : <div className='whiteSquare'>Testi</div>));
  let chessBoardFinal:React.JSX.Element[][] = chessBoard.map((value, index: number) => index % 2  === 0 ? value.reverse() : value);

  return(
    <div style={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'row', backgroundColor: 'green', alignContent: 'center', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '70%', backgroundColor: 'purple'}}>
        {chessBoardFinal.map((value:React.JSX.Element[]) => 
          <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: 'blue'}}>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', height:'100%', backgroundColor: 'rosybrown'}}>
              {value}
                <FontAwesomeIcon icon={faChessRook} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
