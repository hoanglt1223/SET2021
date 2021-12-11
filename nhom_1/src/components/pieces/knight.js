import {Side, PieceName } from '../../variables.js';
import {Piece} from './piece.js';

export const Knight = function (color, column, row, isSelected = false, isKilled = false) {
  const backgroundUrl = color === Side.BLACK ? '/nhom_1/assets/img/knight_black.png' : '/nhom_1/assets/img/knight_white.png'
  Piece.call(this, PieceName.KNIGHT,color, column, row, isSelected, isKilled, backgroundUrl)

}
