import {Player} from "./player.js";
import {COLUMNS, ROWS, Side} from "./variables.js";
import {Square} from "./components/square.js";

export const Game = function (playerOneName, playerTwoName) {
    this.playerOne = new Player(playerOneName, Side.WHITE);
    this.playerTwo = new Player(playerTwoName, Side.BLACK);

    this.squares = [];

    const boardElement = document.getElementById('board');

    boardElement.onclick = (e) => {
        //get a square of click
        const squareElement = e.target.tagName == 'BUTTON' ? e.target : e.target.parentElement;
        const squareId = squareElement.id;

        // if there 2 selected square -> move piece from square 1 to 2
        const selectedPiece = this.getSelectedPiece();
        if(selectedPiece) {
            const pieceTo = this.getPieceBySquareId(squareId);

            if(selectedPiece === pieceTo){
                pieceTo.toggleSelected();
                this.toggleHighlightPossibleMoves(selectedPiece.possibleMoves());
                console.log('eee')
                return;
            }

            if(selectedPiece.possibleMoves().includes(squareId)){
                if(pieceTo){
                    if(pieceTo === selectedPiece){
                        pieceTo.toggleSelected();
                        console.log('eee')
                        return;
                    }
                    if(pieceTo.color !== selectedPiece.color){
                        selectedPiece.kill(pieceTo);
                    } 
                }
                this.toggleHighlightPossibleMoves(selectedPiece.possibleMoves());
                selectedPiece.move(squareId);
            }
        } else {
            const piece = this.getPieceBySquareId(squareId);
            this.toggleHighlightPossibleMoves(piece.possibleMoves());
            piece?.toggleSelected();            
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
        console.log(piece)
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
        const pieces = this.playerOne.pieces.concat(this.playerTwo.pieces).filter(piece => piece.column === squareId[0] && piece.row === Number(squareId[1]) && !piece.isKilled);
        return pieces.length === 0 ? null : pieces[0];
    }
    this.getSelectedPiece = () => {
        const pieces = this.playerOne.pieces.concat(this.playerTwo.pieces).filter(piece => piece.isSelected && !piece.isKilled);
        return pieces.length === 0 ? null : pieces[0];
    }
    this.toggleHighlightPossibleMoves = (squareIds) =>{
        squareIds.map(squareId => {
            document.getElementById(squareId)?.classList.toggle('c-board__square--possible')
        })
    }
}