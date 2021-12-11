import {Side, PieceName } from '../variables.js';
import {Piece} from './piece.js';

export const Bishop = function (color, column, row, isKilled = false) {
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/bishop_black.png' : '/nhom_1/assets/img/bishop_white.png';
  Piece.call(this, PieceName.BISHOP,color, column, row, isKilled, backgroundUrl);
}
