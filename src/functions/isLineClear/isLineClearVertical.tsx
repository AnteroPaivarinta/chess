import { IHero, ISlot } from "../../types";


export const isLineClearVertical = ( state: IHero[],  targetCoords: ISlot, movingHero: IHero) => {
  let startX = movingHero.square.x;
  let startY = movingHero.square.y;
  let endY = targetCoords.y;
  let bool: boolean = true;

  const value = endY < startY ? true : false;
  const startIndex = value ? endY : startY;
  const endIndex = value ? startY : endY;
  
  for(let i = startIndex; i < endIndex; i++) {
    let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === startX && value.square.y === i); // StartX  or endX, X is same
    if(hero && hero.id != movingHero.id) {
      bool = false;
      break;
    } 
  }
  return bool;
}

export default isLineClearVertical;