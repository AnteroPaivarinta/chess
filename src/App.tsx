import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import InitialSoldiers  from './InitialSoldiers';
import Square from './Square';
import { IClicks, IHero, ISlot } from './types';
import canMoveHero from './canMove';
import { IsThereSholdier } from './functions/isThereSoldier';
import { isLineClear } from './functions/isLineClear';

const App = ()  => {

  const [state, setState] = useState<IHero[]>(InitialSoldiers());
  const [board, setBoard] = useState<any>();
  const [clicks, setClicks] = useState<IClicks>({firstClick: null, secondClick: null, clickedHero: null});
  const [errorText, setErrorText] = useState<string>();


  const findSoldier = (xAxis: number, yAxis: number) => {
    return state.find((value: IHero) => value.square.x === xAxis && value.square.y === yAxis);
  };

  const move = (hero: IHero, newCoords: ISlot) => {
    if(IsThereSholdier(state, newCoords)){
      setErrorText("There is already soldier");
      clearClicks();
    } else {
      const index = state.findIndex((value: IHero) => value.id === hero.id);
      const copyArray: IHero[] = [...state];
      copyArray[index] = {...hero, square: newCoords};
      setState(copyArray);
    }
    
  }



  const clearClicks = () => {
    console.log('Cleared clicks')
    setClicks({firstClick: null, secondClick: null, clickedHero: null})
  }

  const onClickHero = (object: ISlot, hero: IHero | undefined) => {
    if(clicks.firstClick === null && object && hero){

      setClicks({firstClick: object, clickedHero: hero, secondClick: null});
    
    } else{
      console.log('Todo eat hero');
    }
  };

  const onClickSquare = (object: ISlot) => {
    
    const name = clicks?.clickedHero?.name;
    const color = clicks?.clickedHero?.color;
    const clickedhero = clicks?.clickedHero;

    if( (clicks.firstClick && name && color && clickedhero) && canMoveHero(name, color, clicks.firstClick, object)){
      let joo = isLineClear( state, object, clickedhero);
      console.log('LINECLEAR', joo);
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
        return <Square  
            onClickSquare={() => onClickSquare(coords)}
            onClickHero={() => onClickHero(coords, hero)} 
            color={xAxis % 2 !== 0 ? 'black' : 'white'} 
            hero={hero} 
            x={xAxis} y={yAxis}
          />
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
  }, [clicks]);
 

  
  return (
    <div style={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'row', backgroundColor: 'green', alignContent: 'center', justifyContent: 'center'}}>
      {errorText  && <div style={{color: "red"}}> {errorText} </div>}
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
