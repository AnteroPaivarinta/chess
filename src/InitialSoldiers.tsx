import { IHero } from "./types";

const InitialSoldiers = () => {
    let z = 0;
    const soldiers:IHero[] = [];
    for (let i = 0; i < 8; i++) {
      soldiers.push({
        name: 'soldier',
        color: 'black',
        id: i.toString(),
        square: {x: i, y: 1}
      });
    }
    for (let i = 8; i < 16; i++) {
      soldiers.push({
        name: 'soldier',
        color: 'white',
        id: i.toString(),
        square: {x: z, y: 6}
      });
      z++;

    }
    const rooks = [{name: 'rook', color: 'black', id: 'br1', square: {x: 0, y: 0} }, {name: 'rook', color: 'white', id: 'wr1', square: {x: 0, y: 7} }, {name: 'rook', color: 'black', id: 'br2', square: {x: 7, y: 0} }, {name: 'rook', color: 'white', id: 'wr2', square: {x: 7, y: 7} }]
    const horses = [{name: 'horse', color: 'black', id: 'bh1', square: {x: 1, y: 0}}, {name: 'horse', color: 'black', id: 'bh2', square: {x: 6, y: 0}}, {name: 'horse', color: 'white', id: 'wh1', square: {x: 1, y: 7}}, {name: 'horse', color: 'white', id: 'wh2', square: {x: 6, y: 7}}]
    const bishops = [{name: 'bishop', color: 'black', id: 'bb1', square: {x: 2, y: 0}}, {name: 'bishop', color: 'black', id: 'bb1', square: {x: 5, y: 0}}, {name: 'bishop', color: 'white', id: 'wb1', square: {x: 2, y: 7}}, {name: 'bishop', color: 'white', id: 'wb2', square: {x: 5, y: 7}}]
    const kings = [{name: 'king', color: 'black', id: 'bk', square: {x: 3, y: 0}}, {name: 'king', color: 'white', id: 'wk', square: {x: 3, y: 7}}];
    const queens = [{name: 'queen', color: 'black', id: 'bq', square: {x: 4, y: 0}}, {name: 'queen', color: 'white', id: 'wq', square: {x: 4, y: 7}}];
    
    return soldiers.concat(rooks).concat(horses).concat(bishops).concat(kings).concat(queens);
}

export default InitialSoldiers;