
import { IHero, ISlot } from "../types";
import isLineClearHorizontal from "./isLineClear/isLineClearHorizontal";
import isLineClearVertical from "./isLineClear/isLineClearVertical";

export const isLineClear = ( state: IHero[],  targetCoords: ISlot, movingHero: IHero ) => {
  
  let startX = movingHero.square.x;
  let startY = movingHero.square.y;
  let endX = targetCoords.x;
  let endY = targetCoords.y;
  let bool: boolean = true;

  const isXSame = () => startX === endX;
  const isYSame = () => startY === endY;
  console.log('STARTX', startX)
  console.log('STARTY', startY)
  console.log('ENDY', endY)
  console.log('ENDX', endX)

  console.log("isXSAME", isXSame())
  switch(movingHero.name) {
    case "bishop":

      if( startX < endX  && startY < endY ) { // 4
        console.log("Vaihe", 4)
        let yIndex = startY;
        for(let i = startX; i < endX; i++) {
          let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === yIndex);
        
          if(hero && hero.id != movingHero.id) {
            console.log("HERO1", hero);
            bool = false;
            break;
          } 
          yIndex++;
        }
      }
      if( startX > endX  && startY > endY  ) { // 1
        console.log("Vaihe", 1)
        let yIndex = endY;
        for(let i = endX; i < startX; i++) {
          let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === yIndex);
          console.log("ETSITÄÄN: X:"+i+", Y:"+yIndex)
         
          if(hero && hero.id != movingHero.id){
            console.log("HERO1", hero);
            console.log("LÖYTYI PAIKASTA X: "+i+", Y: "+ yIndex);
            bool = false;
            break;
          } 
          yIndex++;
        }
      }
      if( startX > endX  && startY < endY  ) { // 3
        console.log("Vaihe", 3)
        let yIndex = endY;
        for(let i = endX; i < startX; i++) {
          let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === yIndex);
          if(hero && hero.id != movingHero.id){
            console.log("HERO1", hero);
            bool = false;
            break;
          } 
          yIndex--;
        }
      }
      if( startX < endX  && startY > endY  ) { //2
        console.log("Vaihe", 2)
        let yIndex = startY;
        for(let i = startX; i < endX; i++) {
          let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === yIndex);
         
          if(hero && hero.id != movingHero.id){
            console.log("HERO1", hero);
            bool = false;
            break;
          } 
          yIndex--;
        }
      }
      break;
    case "queen":
      if( startX < endX  && startY < endY ) { // 4
        console.log("Vaihe", 4)
        let yIndex = startY;
        for(let i = startX; i < endX; i++) {
          let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === yIndex);
        
          if(hero && hero.id != movingHero.id) {
            console.log("HERO1", hero);
            bool = false;
            break;
          } 
          yIndex++;
        }
      }
      if( startX > endX  && startY > endY  ) { // 1
        console.log("Vaihe", 1)
        let yIndex = endY;
        for(let i = endX; i < startX; i++) {
          let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === yIndex);
          console.log("ETSITÄÄN: X:"+i+", Y:"+yIndex)
         
          if(hero && hero.id != movingHero.id){
            console.log("HERO1", hero);
            console.log("LÖYTYI PAIKASTA X: "+i+", Y: "+ yIndex);
            bool = false;
            break;
          } 
          yIndex++;
        }
      }
      if( startX > endX  && startY < endY  ) { // 3
        console.log("Vaihe", 3)
        let yIndex = endY;
        for(let i = endX; i < startX; i++) {
          let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === yIndex);
          if(hero && hero.id != movingHero.id){
            console.log("HERO1", hero);
            bool = false;
            break;
          } 
          yIndex--;
        }
      }
      if( startX < endX  && startY > endY  ) { //2
        console.log("Vaihe", 2)
        let yIndex = startY;
        for(let i = startX; i < endX; i++) {
          let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === yIndex);
          if(hero && hero.id != movingHero.id) {
            console.log("HERO1", hero);
            bool = false;
            break;
          } 
          yIndex--;
        }
      }
      if( isXSame() ) { 

        bool = isLineClearVertical( state, targetCoords, movingHero )
      }

      if( isYSame() ) {

       bool = isLineClearVertical( state, targetCoords, movingHero)
      }
    case "rook":
      if( isXSame() ) { 

        bool = isLineClearVertical( state, targetCoords, movingHero )
      }

      if( isYSame() ) {

       bool = isLineClearHorizontal( state, targetCoords, movingHero)
      }
      
    default:
      // code block
  }
 
  return bool;

}