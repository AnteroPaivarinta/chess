import { ICanMoveItems } from "../types";

export const SoldierPermission = (object: ICanMoveItems) => {
  const {optionYAxis, isSameXAxis, color} = object;
  if(isSameXAxis){
    if(color === 'black'){
      const value = optionYAxis === 1  ? true: false;
      return value;
    } else if(color === "white") {
      const value = optionYAxis === -1   ? true: false;
      return value;
    }
  } else{
    return false;
  }
};