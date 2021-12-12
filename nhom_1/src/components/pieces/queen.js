import {Side, PieceName } from '../../constants.js';
import {Piece} from './piece.js';

export const Queen = function (color, column, row, isSelected = false, isKilled = false) {
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/queen_black.png' : '/nhom_1/assets/img/queen_white.png'
  Piece.call(this, PieceName.QUEEN,color, column, row, isSelected, isKilled, backgroundUrl);
}

