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
import { Piece } from './pieces/piece.js';

const Player = function (name, side) {
  this.name = name;
  this.side = side;

  this.pieces = [];
  ROWS.forEach((row, indexRow) => {
    COLUMNS.forEach((col, indexCol) => {
      if ((row < 5 && side === Side.WHITE) || (row >= 5 && side === Side.BLACK)) {
        if(row === 7 || row === 2){
          this.pieces.push(
            new Pawn(side, col, row)
          );
        } else if (row === 1 || row === 8) {
          if (col === 'a' || col === 'h') {
            this.pieces.push(
              new Rook(side, col, row)
            );
          }
          if (col === 'b' || col === 'g') {
            this.pieces.push(
              new Knight(side, col, row)
            );
          }
          if (col === 'c' || col === 'f') {
            this.pieces.push(
              new Bishop(side, col, row)
            );
          }
          if (col === 'd') {
            this.pieces.push(
              new Queen(side, col, row)
            );
          }
          if (col === 'e') {
            this.pieces.push(
              new King(side, col, row)
            );
          }
        }
      }
    })
  }) 
}

const Board = function () {
  this.playerOne = new Player('Vinh', Side.WHITE);
  this.playerTwo = new Player('Phuc', Side.BLACK);

  this.squares = [];

  ROWS.forEach((row, indexRow) => {
    COLUMNS.forEach((col, indexCol) => {
      this.squares.push(new Square(col, row));
    })
  })

  this.renderSquares = () => {
    this.squares.forEach(square => {
      document.getElementById('board').appendChild(square);
    })
  }

  this.renderPiece = (piece) => {
    // get square id 
    const squareId = piece.column + piece.row;
    const squareElement = document.getElementById(squareId);
    squareElement.appendChild(piece.element);
  }

  this.initializeBoard = () => {
    this.renderSquares();
    this.playerOne.pieces.forEach((piece) => {
      this.renderPiece(piece);
    });
    this.playerTwo.pieces.forEach((piece) => {
      this.renderPiece(piece);
    });
  }
}

const Square = function (column, row) {
  this.column = column;
  this.row = row;

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
  square.id = column + row;

  // add click event listener
  // square.onclick = () => {
  //   if(getSelectedItem()) {
  //     move(square.id);
  //   } else {
  //     select(square.id);
  //   }
  // }
  return square;
}

const board = new Board();
board.initializeBoard();
