import React from "react";
import './App.css';
import { faChessRook, faChessBishop ,faChessKnight, faChessQueen, faChessPawn, faChessKing } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISquare } from "./types";

const Square = (props:ISquare) => {
    let heroElement:any;
    switch (props.hero?.name) {
        case 'soldier':
          heroElement = <FontAwesomeIcon icon={faChessPawn} color={props.hero.color ==='white' ? 'white' : 'black'} />;
          break;
        case 'rook':
          heroElement = <FontAwesomeIcon icon={faChessRook} color={props.hero.color === 'white' ? 'white' : 'black'}/>;
          break;
        case 'horse':
          heroElement = <FontAwesomeIcon icon={faChessKnight} color={props.hero.color === 'white' ? 'white' : 'black'} />;
          break;
        case 'king':
          heroElement = <FontAwesomeIcon icon={faChessKing} color={props.hero.color ==='white' ? 'white' : 'black'}/>;
          break;
        case 'queen':
          heroElement = <FontAwesomeIcon icon={faChessQueen} color={props.hero.color ==='white' ? 'white' : 'black'}/>;
          break;
        case 'bishop':
          heroElement = <FontAwesomeIcon icon={faChessBishop} color={props.hero.color ==='white' ? 'white' : 'black'}/>;
          break;
        default:
          heroElement = null;
      }
    const element  = props.color === 'white' ?  <div className="whiteSquare">{heroElement} {props.x} {props.y}  </div> : <div className="blackSquare">{heroElement} {props.x} {props.y} </div>
    return element;
}


export default Square;