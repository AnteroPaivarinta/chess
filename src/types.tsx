export interface IHero {
    color: string,
    name: string,
    square: ISlot;
    id: string;
}

export interface ISlot {
    x: number, 
    y: number, 
}

export interface ISquare {
    color: string,
    hero: IHero | undefined,
    x: number,
    y:number,
    onClickHero: (object: ISlot) => void;
    onClickSquare: (object: ISlot) => void;
}

export interface ICanMoveItems {
    wantedY: Number;
    wantedX: Number;
    currentY: Number;
    currentX: Number;
    optionXAxis: Number;
    optionYAxis: Number;
    isSameXAxis: Boolean;
    isSameYAxis: Boolean;
    color: string;
  };

export interface IClicks {
    clickedHero: IHero | undefined | null
    firstClick: ISlot | null,
    secondClick: ISlot | null,
}

  