import { COLUMNS, ROWS, Side} from './variables.js';
import { Queen } from './pieces/queen.js'
import {Bishop} from './pieces/bishop.js';
import {Knight} from './pieces/knight.js';
import {Rook} from './pieces/rook.js';
import {King} from './pieces/king.js';
import {Pawn} from './pieces/pawn.js';
import { getSelectedItem } from './utilities/localStorage.js';
import { move } from './utilities/move.js';
import { select } from './utilities/select.js';

const Board = function () {
  this.blackPieces = [];
  this.whitePieces = [];
  this.squares = [];

  ROWS.forEach((row, indexRow) => {
    COLUMNS.forEach((col, indexCol) => {
      let pieceColor;
      if (row < 5) {
        pieceColor = Side.WHITE;
      } else {
        pieceColor = Side.BLACK;
      }
      if (row === 7 || row === 2) {
        this.squares.push(new Square(col, row, new Pawn(pieceColor)));
      } else if (row === 1 || row === 8) {
        if (col === 'a' || col === 'h') {
          this.squares.push(new Square(col, row, new Rook(pieceColor)));

        }
        if (col === 'b' || col === 'g') {
          this.squares.push(new Square(col, row, new Knight(pieceColor)));

        }
        if (col === 'c' || col === 'f') {
          this.squares.push(new Square(col, row, new Bishop(pieceColor)));

        }
        if (col === 'd') {
          this.squares.push(new Square(col, row, new Queen(pieceColor)));

        }
        if (col === 'e') {
          this.squares.push(new Square(col, row, new King(pieceColor)));

        }
      }
      else {
        this.squares.push(new Square(col, row, null));
      }
    })
  })

  this.render = () => {
    this.squares.forEach(square => {
      document.getElementById('board').appendChild(square);
    })
  }
}

const Square = function (column, row, piece) {
  this.column = column;
  this.row = row;
  this.piece = piece;

  // render and return
  const square = document.createElement('button');
  square.classList.add('c-board__square');
  if ((COLUMNS.indexOf(column) + ROWS.indexOf(row)) % 2 === 0) {
    square.classList.add('c-board__square--black');
  } else {
    square.classList.add('c-board__square--white');
  }
  if (column === 'a') {
    const letter = document.createElement('p');
    letter.innerHTML = row;
    letter.className = 'c-row-letter';
    square.appendChild(letter);
  }
  if (row === 1) {
    const letter = document.createElement('p');
    letter.innerHTML = column;
    letter.className = 'c-column-letter';
    square.appendChild(letter);
  }
  // add piece to square
  if (piece) {
    square.appendChild(piece.getElement());
  }
  square.id = column + row;

  // add click event listener
  square.onclick = () => {
    if(getSelectedItem()) {
      console.log('ahihi');
      move(square.id);
    } else {
      select(square.id);
    }
  }
  return square;
}

debugger
const board = new Board();
board.render();
