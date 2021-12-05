import { COLUMNS, ROWS, Side, PieceName } from './variables.js';
import {Piece} from './piece.js';

export const Rook = function (color, isKilled = false) {
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/rook_black.png' : '/nhom_1/assets/img/rook_white.png'
  Piece.call(this, PieceName.ROOK, color, isKilled, backgroundUrl);
}
