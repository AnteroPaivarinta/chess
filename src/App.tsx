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
import Square from './Square.tsx';
import { IHero } from './types.tsx';

const App = ()  => {

  const [state, setState] = useState(InitialSoldiers());
  const [board, setBoard] = useState<any>();
  const findSoldier = (xAxis: number, yAxis) => {
    return state.find((value: IHero) => value.square.x === xAxis && value.square.y === yAxis);
  };
  const renderSquare = (xAxis: number, yAxis: number) => {
    if(yAxis % 2 === 0) {
      //console.log(xAxis % 2 === 0, yAxis, 'FIRST')
      if(xAxis % 2 === 0) {
        return <Square color='black' hero={findSoldier(xAxis, yAxis)} x={xAxis} y={yAxis}/>
      } else {
        return <Square color='white' hero={findSoldier(xAxis, yAxis)} x={xAxis} y={yAxis}/>
      }
    } else {
      //console.log(xAxis % 2 !== 0, yAxis, 'SECOND', xAxis)
      if((xAxis % 2 !== 0)) {
        return <Square color='black' hero={findSoldier(xAxis, yAxis)} x={xAxis} y={yAxis}/>
      } else {
        return <Square color='white' hero={findSoldier(xAxis, yAxis)} x={xAxis} y={yAxis}/>
      }
    }
  }
  useEffect(() => {
    
    const board = new Array(8).fill(null).map(() => new Array(8));
    for(let yAxis = 0; yAxis < 8; yAxis++) {
      for(let xAxis = 0; xAxis < 8; xAxis++) {
        console.log('X:', xAxis, 'Y:', yAxis)
        board[yAxis][xAxis] = renderSquare(xAxis, yAxis);  
      }
    }
    setBoard(board);
  }, []);
 

  
  return (
    <div style={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'row', backgroundColor: 'green', alignContent: 'center', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '70%', backgroundColor: 'purple'}}>
        { board && board.map((value:any) => 
          <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: 'blue'}}>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', height:'100%', backgroundColor: 'rosybrown'}}>
              {value}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
