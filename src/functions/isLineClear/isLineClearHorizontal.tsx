import { IHero, ISlot } from "../../types";


export  const isLineClearHorizontal = ( state: IHero[],  targetCoords: ISlot, movingHero: IHero) => {
  let startX = movingHero.square.x;
  let startY = movingHero.square.y;
  let endX = targetCoords.x;
  let bool: boolean = true;

  const value  =  endX < startX ? true : false;
  const startIndex = value ? endX : startX;
  const endIndex = value ? startX : endX;

  for(let i = startIndex; i < endIndex; i++) {
    let hero: IHero | undefined = state.find((value:IHero) => value.square.x  === i && value.square.y === startY); // StartY  or endY, Y is same
    if(hero && hero.id != movingHero.id) {
      bool = false;
      break;
    }  
  }
  return bool;
  
}

export default isLineClearHorizontal;

