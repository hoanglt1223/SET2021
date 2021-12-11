import { COLUMNS, ROWS, Side} from './variables.js';
import { Queen } from './components/pieces/queen.js'
import {Bishop} from './components/pieces/bishop.js';
import {Knight} from './components/pieces/knight.js';
import {Rook} from './components/pieces/rook.js';
import {King} from './components/pieces/king.js';
import {Pawn} from './components/pieces/pawn.js';
import { getSelectedItem } from './utilities/localStorage.js';
import { move } from './utilities/move.js';
import { select } from './utilities/select.js';
import { Piece } from './components/pieces/piece.js';

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
            console.log(this.pieces);
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

  const boardElement = document.getElementById('board');

  boardElement.onclick = (e) => {
    //get a square of click
    const squareElement = e.target.tagName == 'BUTTON' ? e.target : e.target.parentElement;
    const squareId = squareElement.id;

    //hightlight selected
    squareElement.classList.toggle('c-board__square--selected');

    // if there 2 selected square -> move piece from square 1 to 2
    const selectedSquares = document.getElementsByClassName('c-board__square--selected');
    if(selectedSquares.length == 2) {
      const selectedSquare = selectedSquares[0]; 
    }
  }
  this.element = boardElement; 

  ROWS.forEach((row, indexRow) => {
    COLUMNS.forEach((col, indexCol) => {
      this.squares.push(new Square(col, row));
    })
  })

  this.renderSquares = () => {
    this.squares.forEach(square => {
      document.getElementById('board').appendChild(square.element);
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
  
  this.getSquareBySquareId = squareId => this.squares.filter(square => square.column === squareId && square.row === squareId)[0];

  this.getPieceBySquareId = (squareId) => {
    const pieces = this.playerOne.pieces.concat(this.playerTwo.pieces).filter(piece => piece.column === squareId[0] && piece.row === squareId[1]);
    return pieces.length === 0 ? null : pieces[0];
  }
  this.getSelectedPiece = () => {
    const pieces = this.playerOne.pieces.concat(this.playerTwo.pieces).filter(piece => piece.isSelected);
    return pieces.length === 0 ? null : pieces[0];
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
  // square.onclick = () => {
  //   square.classList.toggle('c-board__square--selected');
  // }
  this.element = square;
}
document.addEventListener

const board = new Board();
board.initializeBoard();
