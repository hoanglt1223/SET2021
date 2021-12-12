import {Side, PieceName, COLUMNS, ROWS } from '../../variables.js';
import {Piece} from './piece.js';

export const Pawn = function (color, column, row, isSelected = false, isKilled = false) {
  this.isFirstMove = true;
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/pawn_black.png' : '/nhom_1/assets/img/pawn_white.png'
  Piece.call(this, PieceName.PAWN,color, column, row, isSelected, isKilled, backgroundUrl);
  
  this.possibleMoves = () =>{
    const indexOfCol = COLUMNS.indexOf(this.column);
    const indexOfRow = ROWS.indexOf(this.row);
    let res = [];
    let matrixMovesY;
    if(this.color === Side.WHITE) {
      matrixMovesY = [1, 2, 1, 1];
    } else {
      matrixMovesY = [-1, -2, -1, -1];
    }
    let matrixMovesX = [0, 0, 1, -1];
    for(let i = 0; i<4; i++) {
      if(i == 1 && !this.isFirstMove){
        continue;
      }
      res.push(COLUMNS[indexOfCol + matrixMovesX[i]] + ROWS[indexOfRow + matrixMovesY[i]]);
    }
    console.log(res); 
    return res;
  }
}