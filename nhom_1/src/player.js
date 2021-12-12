import {COLUMNS, ROWS, Side} from "./constants.js";
import {Pawn} from "./components/pieces/pawn.js";
import {Rook} from "./components/pieces/rook.js";
import {Knight} from "./components/pieces/knight.js";
import {Bishop} from "./components/pieces/bishop.js";
import {Queen} from "./components/pieces/queen.js";
import {King} from "./components/pieces/king.js";

export const Player = function (name, side) {
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