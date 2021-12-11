function ChessBoard() {
    let state = GAME_STATE.NEWGAME;
    this.selectedSquare = null;
    let secondClick = false;
    let turn;
    let possibleMoves = [];

    // board - chessboard in HTML
    this.boardHTML = document.createElement("div");
    Object.assign(this.boardHTML, {
        id: 'chessboard__board',
        style: `width : ${SQUARE_SIZE * NUMBER_SQUARE + "px"};
              height : ${SQUARE_SIZE * NUMBER_SQUARE + "px"};`
    });

    // map - chessboard in JS
    this.chessmap = [];

    // set
    this.setNewchessmap = () => {
        this.chessmap = [];
        turn = ColorType.TEAM.WHITE;
        for (let y = 0; y < NUMBER_SQUARE; y++) {
            let row = [];
            for (let x = 0; x < NUMBER_SQUARE; x++) {
                let square = new Square(x, y, SQUARE_SIZE);
                let tile = square.getTile();
                // select chessman
                tile.addEventListener('click', () => {
                    if (!secondClick) {
                        // select the chess
                        if (square.havingChessman() && square.getChessman().getColor() === turn) {
                            secondClick = true;
                            square.select(true);
                            this.selectedSquare = square;
                            possibleMoves = square.getChessman().getPossibleMoves(this.chessmap);
                            this.hightLightPossibleSquare(true);
                        }
                    }
                    else {
                        this.hightLightPossibleSquare(false);
                        secondClick = false;
                        // have done first click
                        // move the chess
                        if (this.isValidSquare(square)) {
                            moveChess(this.selectedSquare, square);
                            turn = (turn === ColorType.TEAM.WHITE) ? ColorType.TEAM.BLACK : ColorType.TEAM.WHITE;
                        }
                        else {
                            this.selectedSquare.select(false);
                        }
                    }
                })
                row.push(square);
            }
            this.chessmap.push(row);
        }
    }

    this.setNewChessBoard = () => {
        for (let y = 0; y < NUMBER_SQUARE; y++) {
            for (let x = 0; x < NUMBER_SQUARE; x++) {
                let chessman = null;
                if (y == 6) {
                    // chessman = new Pawn(ColorType.TEAM.WHITE);
                }
                if (y == 1) {
                    // chessman = new Pawn(ColorType.TEAM.BLACK);
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
                            chessman = new Bishop(color);
                            break;
                        case 2:
                        case 5:
                            // chessman = new Knight(color);
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
            possibleMoves.forEach((move) => {
                let x = move.x;
                let y = move.y;
                let opponent = move.opponent;
                this.chessmap[y][x].hightlight(status, opponent);
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
    function moveChess(source, destination) {
        let chessman = source.getChessman();
        source.select(false);
        source.removeChessman();
        // promote
        if (chessman.type === ChessmanType.PAWN && (destination.position_Y === 0 || destination.position_Y === 7)) {
            chessman = chessman.promotePawn();
        }
        if (chessman.type === ChessmanType.KING || chessman.type === ChessmanType.ROOK) {
            chessman.moved();
        }
        destination.setChessman(chessman);
    }

    

    // render
    this.render = () => {
        if (state == GAME_STATE.NEWGAME) {
            this.setNewchessmap();
            this.setNewChessBoard();
            state = GAME_STATE.PLAYING;
        }
        document.body.appendChild(this.boardHTML);
    }

}

