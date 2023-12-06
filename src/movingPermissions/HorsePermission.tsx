import { ICanMoveItems, ISlot } from "../types";

const HorsePermission = (object: ICanMoveItems) => {
  const {optionYAxis, optionXAxis} = object;

  if (optionYAxis === 2 || optionYAxis === -2){
    if(optionXAxis === 1 || optionXAxis === -1){
      return true;
    } else {
      return false;
    }
  }
  else if(optionYAxis === 1 || optionYAxis === -1){
    if(optionXAxis === 2 || optionXAxis === -2){
      return true;
    } else {
      return false;
    }
  }
  else{
    return false;
  }
};
export default HorsePermission;