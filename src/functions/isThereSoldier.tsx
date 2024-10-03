// When user want to move its soldier to somewhere, this component will check if its filled by other soldier.

import { IHero, ISlot } from "../types";

export const IsThereSoldier = (soldiersState: IHero[], targetCoords: ISlot) => {
  return soldiersState.find((value: IHero) => value.square.x === targetCoords.x && value.square.y === targetCoords.y) ? true : false
}