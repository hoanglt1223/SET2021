import { COLUMNS, ROWS, Side, PieceName } from '../variables.js';
import {Piece} from './piece.js';

export const Queen = function (color, square = null, isKilled = false) {
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/queen_black.png' : '/nhom_1/assets/img/queen_white.png'
  Piece.call(this, PieceName.QUEEN, color, square, isKilled, backgroundUrl);
}

