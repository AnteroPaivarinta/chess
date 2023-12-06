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
  const [clicks, setClicks] = useState<IClicks>({firstClick: null, secondClick: null, clickedHero: null});

  const findSoldier = (xAxis: number, yAxis: number) => {
    return state.find((value: IHero) => value.square.x === xAxis && value.square.y === yAxis);
  };

  const move = (hero: IHero, newCoords: ISlot) => {
    const index = state.findIndex((value: IHero) => value.id === hero.id);
    const copyArray = [...state];
    copyArray[index]  = {...hero, square: newCoords};
    setState(copyArray);
  }

  const clearClicks = () => {
    console.log('??')
    setClicks({firstClick: null, secondClick: null, clickedHero: null})
  }

  const onClickHero = (object: ISlot, hero: IHero | undefined) => {
    console.log('ONCLICKHERIO')
    console.log('CLICKS', clicks)
    if(clicks.firstClick === null && object && hero){
      console.log('onClickhero true arvo', {firstClick: object, clickedHero: hero, secondClick: null})

      setClicks({firstClick: object, clickedHero: hero, secondClick: null});
    
    } else{
      console.log('Todo eat hero');
    }
  };

  const onClickSquare = (object: ISlot) => {
    console.log('?', clicks)
    const name = clicks?.clickedHero?.name;
    const color = clicks?.clickedHero?.color;
    const clickedhero = clicks?.clickedHero;

    if( (clicks.firstClick && name && color && clickedhero) && canMoveHero(name, color, clicks.firstClick, object)){
      console.log('True arvo')
      move(clickedhero, object);
      clearClicks();
    } else{
      console.log('Elseen mentiin')
    }
  }

  const renderSquare = (xAxis: number, yAxis: number, hero: IHero | undefined) => {

    const coords = {x: xAxis, y: yAxis};
    
    if(yAxis % 2 === 0) {
      return <Square onClickSquare={() => onClickSquare(coords)}  onClickHero={() => onClickHero(coords, hero)} color={xAxis % 2 === 0 ? 'black' : 'white'} hero={hero} x={xAxis} y={yAxis}/>
    } else {
      return <Square  onClickSquare={() => onClickSquare(coords)} onClickHero={() => onClickHero(coords, hero)} color={xAxis % 2 !== 0 ? 'black' : 'white'} hero={hero} x={xAxis} y={yAxis}/>
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
    console.log('USE-EFFECT', state);
  }, [clicks]);
 

  
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
