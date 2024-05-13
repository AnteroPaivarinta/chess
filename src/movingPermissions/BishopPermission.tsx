import { ICanMoveItems } from "../types";

export const BishopPermission = (object: ICanMoveItems) => {
  const {optionYAxis, optionXAxis} = object;
  return optionYAxis === optionXAxis || (- optionYAxis === optionXAxis) || (- optionXAxis === optionXAxis);
}