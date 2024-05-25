
import { IHero, ISlot } from "../types";

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
      if(isXSame()){ 
        const value  =  endY < startY ? true : false;
        const startIndex = value ? endY : startY;
        const endIndex = value ? startX : endX;
        for(let i = startIndex; i < endIndex; i++) {
          let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === startX && value.square.y === i); // StartX  or endX, X is same
          if(hero && hero.id != movingHero.id) {
            console.log("HERO1", hero);
            bool = false;
            break;
          } 
        }
      }

      if(isYSame()){ 
        const value  =  endX < startX ? true : false;
        const startIndex = value ? endX : startX;
        const endIndex = value ? startX : endX;
        for(let i = startIndex; i < endIndex; i++) {
          let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === startY); // StartY  or endY, Y is same
          if(hero && hero.id != movingHero.id) {
            console.log("HERO1", hero);
            bool = false;
            break;
          } 
        }
      }

    default:
      // code block
  }
 
  return bool;

}