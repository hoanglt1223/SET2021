import {Side, PieceName, COLUMNS, ROWS } from '../../constants.js';
import {Piece} from './piece.js';

export const Queen = function (color, column, row, isSelected = false, isKilled = false) {
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/queen_black.png' : '/nhom_1/assets/img/queen_white.png'
  Piece.call(this, PieceName.QUEEN,color, column, row, isSelected, isKilled, backgroundUrl);

  this.possibleMoves = () => {
    const indexOfCol = COLUMNS.indexOf(this.column);
    const indexOfRow = ROWS.indexOf(this.row);
    let res = [];
    let queenDirectionsMatrix = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, -1], [-1, 1]];
    queenDirectionsMatrix.forEach(direction => {
      for (let i = 1; i < 8; i++) {
        const squareId = COLUMNS[indexOfCol + direction[0] * i] + ROWS[indexOfRow + direction[1] * i];
        if (document.getElementById(squareId)?.getElementsByClassName(this.color).length > 0) {
          break;
        } else if(document.getElementById(squareId)?.getElementsByClassName(this.color === Side.WHITE ? Side.BLACK : Side.WHITE).length > 0){
          res.push(squareId);
          break;
        }
        res.push(squareId);
      }
    })
    return res;
  };
}

