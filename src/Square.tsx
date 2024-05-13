import React from "react";
import './App.css';
import { faChessRook, faChessBishop, faChessKnight, faChessQueen, faChessPawn, faChessKing } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IHero, ISquare } from "./types";

const Square = (props:ISquare) => {
  
    const size="3x"
    const coords = {x: props.x, y: props.y};
    let heroElement:any;
    const whiteColor = "white";
    const blackColor = "black";

    const checkColor = (hero: IHero) => {
       return hero.color ==='white' ? whiteColor : blackColor;
    }

    switch (props.hero?.name) {
        case 'soldier':
          heroElement = <FontAwesomeIcon size={size} icon={faChessPawn} color={checkColor(props.hero)} />;
          break;
        case 'rook':
          heroElement = <FontAwesomeIcon size={size} icon={faChessRook} color={checkColor(props.hero)} />;
          break;
        case 'horse':
          heroElement = <FontAwesomeIcon size={size} icon={faChessKnight} color={checkColor(props.hero)} />;
          break;
        case 'king':
          heroElement = <FontAwesomeIcon size={size} icon={faChessKing} color={checkColor(props.hero)}/>;
          break;
        case 'queen':
          heroElement = <FontAwesomeIcon size={size} icon={faChessQueen} color={checkColor(props.hero)}/>;
          break;
        case 'bishop':
          heroElement = <FontAwesomeIcon size={size} icon={faChessBishop} color={checkColor(props.hero)} />;
          break;
        default:
          heroElement = null;
      }
      const element = <div onClick={() => props.onClickSquare(coords)} className={props.color === 'white' ? 'whiteSquare' : 'blackSquare'}> {heroElement && <div onClick={() => props.onClickHero(coords)} >{heroElement} </div>} {props.x} {props.y}  </div> 
    return element;
}


export default Square;