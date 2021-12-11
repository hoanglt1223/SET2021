import {Side, PieceName } from '../../variables.js';
import {Piece} from './piece.js';

export const King = function (color, column, row, isKilled = false) {
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/king_black.png' : '/nhom_1/assets/img/king_white.png'
  Piece.call(this, PieceName.KING,color, column, row, isKilled, backgroundUrl);
}