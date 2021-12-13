function ChessBoard() {
    this.state = GAME_STATE.NEWGAME;
    this.selectedSquare = null;
    let secondClick = false;
    this.turn;
    let possibleMoves = [];

    // board - chessboard in HTML
    this.boardHTML = document.createElement("div");

    // map - chessboard in JS
    this.chessmap = [];

    // set
    this.setNewchessmap = () => {
        this.chessmap = [];
        this.turn = ColorType.TEAM.WHITE;
        for (let y = 0; y < NUMBER_SQUARE; y++) {
            let row = [];
            for (let x = 0; x < NUMBER_SQUARE; x++) {
                let square = new Square(x, y, SQUARE_SIZE);
                let tile = square.getTile();
                tile.addEventListener('click', () => {
                    this.handleClickChessman(square);
                });
                row.push(square);
            }
            this.chessmap.push(row);
        }
    }

    this.setNewChessBoard = () => {
        this.boardHTML = document.createElement("div");

        Object.assign(this.boardHTML, {
            id: 'chessboard__board',
            style: `width : ${SQUARE_SIZE * NUMBER_SQUARE + "px"};
                  height : ${SQUARE_SIZE * NUMBER_SQUARE + "px"};`
        });
        for (let y = 0; y < NUMBER_SQUARE; y++) {
            for (let x = 0; x < NUMBER_SQUARE; x++) {
                let chessman = null;
                if (y == 6) {
                    chessman = new Pawn(ColorType.TEAM.WHITE);
                }
                if (y == 1) {
                    chessman = new Pawn(ColorType.TEAM.BLACK);
                }
                if (y == 0 || y == 7) {
                    let color = (y == 7) ? ColorType.TEAM.WHITE : ColorType.TEAM.BLACK;
                    switch (x) {
                        case 0:
                        case 7:
                            chessman = new Rook(color)
                            break;
                        case 1:
                        case 6:
                            chessman = new Knight(color);
                            break;
                        case 2:
                        case 5:
                            chessman = new Bishop(color);

                            break;
                        case 3:
                            chessman = new Queen(color);
                            break;
                        case 4:
                            chessman = new King(color);
                            break;
                    }
                }
                if (chessman != null) {
                    this.chessmap[y][x].setChessman(chessman);
                }
                this.boardHTML.appendChild(this.chessmap[y][x].getTile());
            }
        }
    }

    // event handler
    this.hightLightPossibleSquare = (status) => {
        if (possibleMoves) {
            let checkmate = false;
            possibleMoves.forEach((move) => {
                let x = move.x;
                let y = move.y;
                let opponent = move.opponent;
                if (this.chessmap[y][x].havingChessman()) {
                    if (this.chessmap[y][x].getChessman().type == ChessmanType.KING) {
                        checkmate = true
                    } else {
                        checkmate = false;
                    }
                }
                this.chessmap[y][x].hightlight(status, opponent, checkmate);
            })
        }
    }

    this.isValidSquare = (square) => {
        if (possibleMoves) {
            return possibleMoves.some(cell => {
                return (cell.x == square.getPosition().x && cell.y == square.getPosition().y);
            })
        }
        return false;
    }

    //method
    this.moveChess = (source, destination) => {
        let chessman = source.getChessman();
        source.select(false);
        source.removeChessman();
        if (destination.havingChessman() && destination.getChessman().type == ChessmanType.KING) {
            this.state = GAME_STATE.GAMEOVER;
            this.turn = (this.turn === ColorType.TEAM.WHITE) ? ColorType.TEAM.BLACK : ColorType.TEAM.WHITE;
            this.boardHTML.style.display = "none";
            gameOver(chessman.getColor());
        }
        // promote
        if (chessman.type === ChessmanType.PAWN && (destination.position_Y === 0 || destination.position_Y === 7)) {
            chessman = chessman.promotePawn();
        }
        //
        if (chessman.type === ChessmanType.KING || chessman.type === ChessmanType.ROOK) {
            chessman.moved();
        }
        destination.setChessman(chessman);
        this.checkCheckmated(this.chessmap);
    }

    this.isAbleToCastling = (source, destination) => {
        if (source.getChessman().getColor() !== destination.getChessman().getColor()) {
            return false;
        }
        let sourceType = source.getChessman().type;
        let desType = destination.getChessman().type;

        if ((sourceType === ChessmanType.KING && desType === ChessmanType.ROOK) || (desType === ChessmanType.KING && sourceType === ChessmanType.ROOK)) {
            if (source.getChessman().hasMoved() || destination.getChessman().hasMoved()) {
                return false;
            }
            let direct = source.getPosition().x > destination.getPosition().x ? - 1 : 1;

            for (let x = source.getPosition().x + direct; x < destination.getPosition().x; x += 1 * direct) {
                if (this.chessmap[source.getPosition().y][x].havingChessman()) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    this.castle = (kingSquare, rookSquare) => {
        kingSquare.getChessman().hasMoved();
        rookSquare.getChessman().hasMoved();
        let direct = kingSquare.getPosition().x > rookSquare.getPosition().x ? -1 : 1;
        let position_X = kingSquare.getPosition().x;
        let position_Y = kingSquare.getPosition().y;
        let target_of_King = this.findSquare(position_X + 2 * direct, position_Y);
        let target_of_Rook = this.findSquare(position_X + direct, position_Y);
        this.moveChess(kingSquare, target_of_King);
        this.moveChess(rookSquare, target_of_Rook);
    }

    this.findSquare = (x, y) => {
        let result = null;
        this.chessmap.forEach(row => {
            row.forEach(square => {
                if (square.getPosition().x == x && square.getPosition().y == y) {
                    result = square;
                }
            })
        })
        return result;
    }

    this.handleClickChessman = (square) => {
        if (!secondClick) {
            // select the chess - first CLICK
            if (square.havingChessman() && square.getChessman().getColor() === this.turn) {
                secondClick = true;
                square.select(true);
                this.selectedSquare = square;
                possibleMoves = square.getChessman().getPossibleMoves(this.chessmap);
                this.hightLightPossibleSquare(true);
            }
        }
        else {
            // select the target - second CLICK
            this.hightLightPossibleSquare(false);
            secondClick = false;
            // castle
            if (square.havingChessman() && this.isAbleToCastling(this.selectedSquare, square)) {
                if (this.selectedSquare.getChessman().type == ChessmanType.KING) {
                    this.castle(this.selectedSquare, square);
                }
                else {
                    this.castle(square, this.selectedSquare);
                }
                this.turn = (this.turn === ColorType.TEAM.WHITE) ? ColorType.TEAM.BLACK : ColorType.TEAM.WHITE;
                this.checkCheckmated(this.chessmap);
            }
            else {
                // move the chess
                if (this.isValidSquare(square)) {
                    this.moveChess(this.selectedSquare, square);
                    this.turn = (this.turn === ColorType.TEAM.WHITE) ? ColorType.TEAM.BLACK : ColorType.TEAM.WHITE;
                }
                else {
                    this.selectedSquare.select(false);
                    this.checkCheckmated(this.chessmap);
                }
            }
        }
    }

    this.checkCheckmated = (chessmap) => {
        chessmap.forEach((row) => {
            row.forEach((square) => {
                if (square.havingChessman() && square.getChessman().type == ChessmanType.KING) {
                    if (square.getChessman().checkCheckmated(chessmap)){
                        square.getTile().style.backgroundColor = ColorType.CHECKMATED;
                    }
                    else {
                        square.getTile().style.backgroundColor = square.color;
                    }
                }
            })
        })
    }

    // render
    this.render = () => {
        if (this.state == GAME_STATE.NEWGAME) {
        }
        if (this.state == GAME_STATE.GAMEOVER) {
            document.body.removeChild(this.boardHTML);
        }
        this.setNewchessmap();
        this.setNewChessBoard();
        document.body.appendChild(this.boardHTML);
    }
}