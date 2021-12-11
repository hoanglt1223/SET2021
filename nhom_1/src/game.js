import {Player} from "./player.js";
import {COLUMNS, ROWS, Side} from "./variables.js";
import {Square} from "./components/square.js";

export const Game = function () {
    this.playerOne = new Player('Vinh', Side.WHITE);
    this.playerTwo = new Player('Phuc', Side.BLACK);

    this.squares = [];

    const boardElement = document.getElementById('board');

    boardElement.onclick = (e) => {
        //get a square of click
        const squareElement = e.target.tagName == 'BUTTON' ? e.target : e.target.parentElement;
        const squareId = squareElement.id;
        console.log(squareId)


        // if there 2 selected square -> move piece from square 1 to 2
        const selectedPiece = this.getSelectedPiece();
        if(selectedPiece) {
            selectedPiece.move(squareId);
        } else {
            const piece = this.getPieceBySquareId(squareId);
            console.log(piece);
            piece?.setSelected();
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

    this.getSquareBySquareId = squareId => this.squares.filter(square => square.column === squareId[0] && square.row === Number(squareId[1]))[0];

    this.getPieceBySquareId = (squareId) => {
        const pieces = this.playerOne.pieces.concat(this.playerTwo.pieces).filter(piece => piece.column === squareId[0] && piece.row === Number(squareId[1]));
        return pieces.length === 0 ? null : pieces[0];
    }
    this.getSelectedPiece = () => {
        const pieces = this.playerOne.pieces.concat(this.playerTwo.pieces).filter(piece => piece.isSelected);
        return pieces.length === 0 ? null : pieces[0];
    }
}