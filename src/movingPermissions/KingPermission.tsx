import { ICanMoveItems } from "../types";

export const KingPermission = (object: ICanMoveItems) => {
  const {optionYAxis, optionXAxis,isSameXAxis, color, isSameYAxis} = object;
  return (isSameXAxis && (optionYAxis === 1 || optionYAxis === -1)) || (isSameYAxis && (optionXAxis === 1 || optionXAxis === -1));
}