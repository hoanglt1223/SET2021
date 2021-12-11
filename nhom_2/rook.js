function Rook(color) {
    ChessMan.call(this);
    this.setImage('rook', color);

    this.statusMoved = false;

    this.moved = () => {
        this.statusMoved = true;
    }

    this.hasMoved = () => {
        return this.statusMoved;
    }

    this.getPossibleMoves = (chessmap) => {
        let possibleMoves = [];

        for (let y = this.position_Y - 1; y >= 0; y--) {
            if (!chessmap[y][this.position_X].havingChessman() || chessmap[y][this.position_X].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: this.position_X,
                    y: y,
                    opponent: chessmap[y][this.position_X].havingChessman(),
                });

            }
            if (chessmap[y][this.position_X].havingChessman()) {
                break;
            }
        }

        for (let y = this.position_Y + 1; y < NUMBER_SQUARE; y++) {
            if (!chessmap[y][this.position_X].havingChessman() || chessmap[y][this.position_X].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: this.position_X,
                    y: y,
                    opponent: chessmap[y][this.position_X].havingChessman(),
                });

            }
            if (chessmap[y][this.position_X].havingChessman()) {
                break;
            }
        }

        for (let x = this.position_X - 1; x >= 0; x--) {
            if (!chessmap[this.position_Y][x].havingChessman() || chessmap[this.position_Y][x].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: x,
                    y: this.position_Y,
                    opponent: chessmap[this.position_Y][x].havingChessman(),
                });
            }
            if (chessmap[this.position_Y][x].havingChessman()) {
                break;
            }
        }

        for (let x = this.position_X + 1; x < NUMBER_SQUARE; x++) {
            if (!chessmap[this.position_Y][x].havingChessman() || chessmap[this.position_Y][x].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: x,
                    y: this.position_Y,
                    opponent: chessmap[this.position_Y][x].havingChessman(),
                });

            }
            if (chessmap[this.position_Y][x].havingChessman()) {
                break;
            }
        }
        return possibleMoves;
    }
}