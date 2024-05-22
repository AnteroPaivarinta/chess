
import { IHero, ISlot } from "../types";

export const isLineClear = ( state: IHero[],  targetCoords: ISlot, movingHero: IHero ) => {
  
  let startX = movingHero.square.x;
  let startY = movingHero.square.y;
  let endX = targetCoords.x;
  let endY = targetCoords.y;
  let bool: boolean = true;

  console.log('STARTX', startX)
  console.log('STARTY', startY)
  console.log('ENDY', endY)
  console.log('ENDX', endX)
  if( movingHero.name === "bishop" ) {
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
  }
  return bool;

}