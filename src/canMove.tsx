import { ICanMoveItems, ISlot } from "./types";
import HorsePermission from "./movingPermissions/HorsePermission.tsx";
import { BishopPermission } from "./movingPermissions/BishopPermission.tsx";
import { SoldierPermission } from "./movingPermissions/SoldierPermission.tsx";
import { KingPermission } from "./movingPermissions/KingPermission.tsx";
import { RookPermission } from "./movingPermissions/RookPermission.tsx";


export const canMoveHero = (name: string, color: string, currentSlot: ISlot, wantedSlot: ISlot) => {
  
  const wantedY = wantedSlot.y;
  const wantedX = wantedSlot.x;
  const currentY = currentSlot.y;
  const currentX = currentSlot.x;
  const optionYAxis = wantedY - currentY;
  const optionXAxis = wantedX - currentX;
  const isSameXAxis = () => currentX === wantedX;
  const isSameYAxis = () => currentY === wantedY;

  console.log('opttionX', optionXAxis);
  console.log('opttionY', optionYAxis);

  const object: ICanMoveItems = {
    wantedX: wantedX,
    wantedY: wantedY,
    currentY: currentY,
    optionXAxis: optionXAxis,
    optionYAxis: optionYAxis,
    isSameXAxis: isSameXAxis(),
    isSameYAxis: isSameYAxis(),
    currentX: currentX,
    color: color,
  };

  switch (name) {
    case 'horse':
      return HorsePermission(object)
    case 'bishop':
      return BishopPermission(object);
    case 'soldier':
      return SoldierPermission(object)
    case 'king':
      return KingPermission(object);
    case 'rook':
     return RookPermission(object);
    case "queen":
      return BishopPermission(object) || SoldierPermission(object) || KingPermission(object) || RookPermission(object);
  }
}

export default canMoveHero;

