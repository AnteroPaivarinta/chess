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
import { IClicks, IHero, ISlot } from './types.tsx';
import canMoveHero from './canMove.tsx';

const App = ()  => {

  const [state, setState] = useState(InitialSoldiers());
  const [board, setBoard] = useState<any>();
  const [clicks, setClicks] = useState<IClicks>({firstClick: null, secondClick: null});

  const findSoldier = (xAxis: number, yAxis) => {
    return state.find((value: IHero) => value.square.x === xAxis && value.square.y === yAxis);
  };

  const move = (hero: IHero, newCoords) => {
    const modifiedState = {...state[]}
  }

  const clearClicks = () => {
    setClicks({firstClick: null, secondClick: null})
  }

  const onClickHero = (object: ISlot, hero: IHero | undefined) => {

    if(clicks.firstClick != null ){
      if( (hero && clicks.firstClick) && canMoveHero(hero.name, hero.color, clicks.firstClick, object)){
        //todo move
        clearClicks();

      }
    } else{
      setClicks({...clicks, firstClick: object});
    }
  };

  const renderSquare = (xAxis: number, yAxis: number, hero: IHero | undefined) => {

    const coords = {x: xAxis, y: yAxis};
    
    if(yAxis % 2 === 0) {
      return <Square onClickHero={() => onClickHero(coords, hero)} color={xAxis % 2 === 0 ? 'black' : 'white'} hero={hero} x={xAxis} y={yAxis}/>
    } else {
      return <Square  onClickHero={() => onClickHero(coords, hero)} color={xAxis % 2 !== 0 ? 'black' : 'white'} hero={hero} x={xAxis} y={yAxis}/>
    }
  }
  useEffect(() => {
    
    const board = new Array(8).fill(null).map(() => new Array(8));
    for(let yAxis = 0; yAxis < 8; yAxis++) {
      for(let xAxis = 0; xAxis < 8; xAxis++) {
        const hero = findSoldier(xAxis, yAxis);
        board[yAxis][xAxis] = renderSquare(xAxis, yAxis, hero);  
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
