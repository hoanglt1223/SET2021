import {Side, PieceName } from '../../variables.js';
import {Piece} from './piece.js';

export const Pawn = function (color, column, row, isSelected = false, isKilled = false) {
  this.isFirstMove = true;
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/pawn_black.png' : '/nhom_1/assets/img/pawn_white.png'
  Piece.call(this, PieceName.PAWN,color, column, row, isSelected, isKilled, backgroundUrl);
  
  this.showPossibleMove = (squareId) =>{
    console.log('pawn can move:')
    let possibleColumn;
    let possibleRow;

    debugger
    if(this.isFirstMove){//is first move can forward 2 square
      possibleColumn = squareId[0];
      possibleRow = Number(squareId[1]) + 2;
    } else {
      possibleColumn = squareId[0];
      possibleRow = Number(squareId[1]) + 1;
    }
    document.getElementById(possibleColumn + possibleRow).classList.toggle('c-board__square--selected')
  }
}