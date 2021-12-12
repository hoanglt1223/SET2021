import {Side, PieceName } from '../../constants.js';
import {Piece} from './piece.js';

export const Bishop = function (color, column, row, isSelected = false, isKilled = false) {
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/bishop_black.png' : '/nhom_1/assets/img/bishop_white.png';
  Piece.call(this, PieceName.BISHOP,color, column, row, isSelected, isKilled, backgroundUrl);
}
