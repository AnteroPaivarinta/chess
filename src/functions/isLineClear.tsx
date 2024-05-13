
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
    if( startX < endX  && startY <= endY ) {
      //console.log("Vaihe", 1)
      let indexY = startY;
      for(let i = startX; i <= endX; i++ ) {
        let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === indexY);
        indexY = indexY + 1;
        if(hero){
          bool = false;
          break;
        } 
      }
    }
    if( startX > endX  && startY >= endY  ) {
      let indexY = startY;
      //console.log("Vaihe", 2)
      for(let i = endX; i <= startX; i++ ) {
       
        let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === indexY);
        indexY = indexY + 1;
        console.log("löytyykö sankaria X"+i+", Y: "+indexY)
        if(hero){
          bool = false;
          break;
        } 
      }
    }
    if( startX > endX  && startY <= endY  ) {
      let indexY = startY;
      //console.log("Vaihe", 3)
      for(let i = endX; i <= startX; i++ ) {
        let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === indexY);
        indexY = indexY + 1;
        if(hero){
          bool = false;
          break;
        } 
      }
    }
    if( startX < endX  && startY >= endY  ) {
      //onsole.log("Vaihe", 4)
    }
  }
  console.log("tulostaako?");
  return bool;

}