function ChessBoard() {
    let state = STATE.NEWGAME;
    this.selectedSquare = null;
    let selecting = false;
    let turn;

    // board - chessboard in HTML
    this.boardHTML = document.createElement("div");
    Object.assign(this.boardHTML, {
        id: 'chessboard__board',
        style: `width : ${SQUARE_SIZE * NUMBER_SQUARE + "px"};
                height : ${SQUARE_SIZE * NUMBER_SQUARE + "px"};`
    });

    // map - chessboard in JS
    this.chessMap;

    // set
    this.setNewChessMap = () => {
        this.chessMap = [];
        turn = ColorType.TEAM.WHITE;
        for (let i = 0; i < NUMBER_SQUARE; i++) {
            let row = [];
            for (let j = 0; j < NUMBER_SQUARE; j++) {
                let square = new Square(j, i, SQUARE_SIZE);
                let tile = square.getTile();
                // select chessman
                tile.addEventListener('click', () => {
                    debugger;
                    if (!selecting) {
                        // select the chess
                        if (square.havingChessMan() && square.getChessman().getColor() === turn) {
                            selecting = true;
                            square.select(true);
                            this.selectedSquare = square;
                        }
                    }
                    else {
                        // move the chess
                        if (!square.havingChessMan()) {
                            // to: empty square
                            selecting = false;
                            moveChess(this.selectedSquare, square);
                            turn = (turn === ColorType.TEAM.WHITE) ? ColorType.TEAM.BLACK : ColorType.TEAM.WHITE;

                        }
                        else if (this.selectedSquare.getChessman().getColor() !== square.getChessman().getColor()) {
                            // to: enemy
                            selecting = false;
                            moveChess(this.selectedSquare, square);
                            turn = (turn === ColorType.TEAM.WHITE) ? ColorType.TEAM.BLACK : ColorType.TEAM.WHITE;

                        }
                        else {
                            // to: ally -> select again
                            square.select(true);
                            this.selectedSquare.select(false);
                            this.selectedSquare = square;
                            selecting = true;
                        }

                    }
                })
                row.push(square);
            }
            this.chessMap.push(row);
        }
    }

    this.setNewChessBoard = () => {
        for (let i = 0; i < NUMBER_SQUARE; i++) {
            for (let j = 0; j < NUMBER_SQUARE; j++) {
                let chessman = null;
                if (i == 6) {
                    chessman = new Pawn(ColorType.TEAM.WHITE);
                }
                if (i == 1) {
                    chessman = new Pawn(ColorType.TEAM.BLACK);
                }
                if (i == 0 || i == 7) {
                    let color = (i == 7) ? ColorType.TEAM.WHITE : ColorType.TEAM.BLACK;
                    switch (j) {
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
                            chessman = new Knight(color);
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
                    this.chessMap[i][j].setChessman(chessman);
                }
                this.boardHTML.appendChild(this.chessMap[i][j].getTile());
            }
        }
    }

    // event handler

    this.handleSelect = () => {

    }

    //method
    function moveChess(source, destination) {
        let chessman = source.getChessman();
        source.select(false);
        source.removeChessman();
        destination.setChessman(chessman);
    }

    // render
    this.render = () => {
        if (state == STATE.NEWGAME) {
            this.setNewChessMap();
            this.setNewChessBoard();
            state = STATE.PLAYING;
        }
        document.body.appendChild(this.boardHTML);
    }

}

