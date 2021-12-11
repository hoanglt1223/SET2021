import {Side, PieceName } from '../variables.js';
import {Piece} from './piece.js';

export const Pawn = function (color, column, row, isKilled = false) {
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/pawn_black.png' : '/nhom_1/assets/img/pawn_white.png'
  Piece.call(this, PieceName.PAWN,color, column, row, isKilled, backgroundUrl);
}