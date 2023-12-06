export interface IHero {
    color: string,
    name: string,
    square: ISlot;
    id: string;
}

export interface ISlot {
    x: number, 
    y: number
}

export interface ISquare {
    color: string,
    hero: IHero | undefined,
    x?: number,
    y?:number,
}
