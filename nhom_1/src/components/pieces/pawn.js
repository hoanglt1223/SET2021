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
      const squareId = COLUMNS[indexOfCol + matrixMovesX[i]] + ROWS[indexOfRow + matrixMovesY[i]];

      if(i == 1){
        if(!this.isFirstMove){
          continue;
        }
        if(document.getElementById(squareId)?.getElementsByClassName(this.color === Side.BLACK ? Side.WHITE : Side.BLACK).length > 0){
          continue;
        }
      }

      if(i === 0 && document.getElementById(squareId)?.getElementsByClassName(this.color === Side.BLACK ? Side.WHITE : Side.BLACK).length > 0){
        continue;
      }

      if(i == 2 || i == 3){

        //if square does not have any opponents-> dont add
        if(document.getElementById(squareId)?.getElementsByClassName(this.color === Side.BLACK ? Side.WHITE : Side.BLACK).length === 0){
          continue;
        }
      }

      // if square has same color piece -> dont add
      if(document.getElementById(squareId)?.getElementsByClassName(this.color).length > 0){
        continue;
      }
      res.push(squareId);
    }
    console.log(res); 
    return res;
  }


  this.callbackMove = () => {
    this.isFirstMove = false;
  }
}