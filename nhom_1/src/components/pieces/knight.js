import {Side, PieceName, COLUMNS, ROWS } from '../../constants.js';
import {Piece} from './piece.js';

export const Knight = function (color, column, row, isSelected = false, isKilled = false) {
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/knight_black.png' : '/nhom_1/assets/img/knight_white.png'
  Piece.call(this, PieceName.KNIGHT,color, column, row, isSelected, isKilled, backgroundUrl)

  this.possibleMoves = () =>{
    const indexOfCol = COLUMNS.indexOf(this.column);
    const indexOfRow = ROWS.indexOf(this.row);
    let res = [];
    let matrixMovesY = [1, -1, 2, 2, -1, 1, -2, -2]
    let matrixMovesX = [2, 2, 1, -1, -2, -2, 1, -1];
    for(let i = 0; i<8; i++) {

      
      const squareId = COLUMNS[indexOfCol + matrixMovesX[i]] + ROWS[indexOfRow + matrixMovesY[i]];
            if(document.getElementById(squareId)?.getElementsByClassName(this.color).length > 0){
        continue;
      }
      res.push(squareId);    }
    return res;
  }
}
