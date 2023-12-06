import { ICanMoveItems } from "../types";

export const RookPermission = (object: ICanMoveItems) => {
  const {wantedX, currentX, currentY, wantedY} = object;
  if ((wantedX != currentX && currentY === wantedY) || (wantedX === currentX && currentY !== wantedY)) {
    return true;
  }
  else {
    return false;
  }
}