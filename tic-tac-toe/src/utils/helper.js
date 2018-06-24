
  export function declareWinner(player, squareValues) {

    if((squareValues[0] === player &&
        squareValues[1] === player &&
        squareValues[2] === player
    )||
      (player === squareValues[3] &&
       player === squareValues[4] &&
       player === squareValues[5]
    )||
      (player === squareValues[6] &&
       player === squareValues[7] &&
       player === squareValues[8]
    )||
      (player === squareValues[0] &&
       player === squareValues[3] &&
       player === squareValues[6]
    )||
      (player === squareValues[1] &&
       player === squareValues[4] &&
       player === squareValues[7]
    )||
      (player === squareValues[2] &&
       player === squareValues[5] &&
       player === squareValues[8]
    )||
      (player === squareValues[0] &&
       player === squareValues[4] &&
       player === squareValues[8]
    )||
      (player === squareValues[2] &&
       player === squareValues[4] &&
       player === squareValues[6]
    )
  ) {
    return player;
  }
    return null;
}


export default class Position {
    constructor(i) {
        this.row = Math.floor(i/3) + 1;
        this.column = i%3 + 1;
    }

    toString() {
        return `${this.row}, ${this.column}`;
    }
}
