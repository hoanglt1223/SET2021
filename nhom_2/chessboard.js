function ChessBoard() {
    let state = GAME_STATE.NEWGAME;
    this.selectedcol, row;
    let secondClick = false;
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
        for (let y = 0; y < NUMBER_SQUARE; y++) {
          let row = [];
          for (let x = 0; x < NUMBER_SQUARE; x++) {
              let square = new Square(x, y, SQUARE_SIZE);
              let tile = square.getTile();
              // select chessman
              tile.addEventListener('click', () => {
                let chessman = square.getChessman();
                  if (!secondClick) {
                      // select the chess
                      if (square.havingChessMan() && square.getChessman().getColor() === turn) {
                          secondClick = true;
                          square.select(true);
                          this.selectedSquare = square;
                          chessman.showPossibleMoves(this.chessMap);
                          
                      }
                  }
                  else {
                      
                      // have done first click
                      // move the chess
                      
                      if (!square.havingChessMan()) {
                          // to: empty square
                          secondClick = false;
                          moveChess(this.selectedSquare, square);
                          turn = (turn === ColorType.TEAM.WHITE) ? ColorType.TEAM.BLACK : ColorType.TEAM.WHITE;
                          square.isSuggested = false;
                      }
                      else if (this.selectedSquare.getChessman().getColor() !== square.getChessman().getColor()) {
                          // to: enemy
                          secondClick = false;
                          moveChess(this.selectedSquare, square);
                          turn = (turn === ColorType.TEAM.WHITE) ? ColorType.TEAM.BLACK : ColorType.TEAM.WHITE;
                          square.isSuggested = false;

                      }
                      else {
                          // to: ally -> select again
                          square.select(true);
                          this.selectedSquare.select(false);
                          this.selectedSquare = square;
                          secondClick = true;
                          chessman.showPossibleMoves(this.chessMap);
                          
                      }

                  }
              })
              if (square.isSuggested){
                tile.style.backgroundColor = square.color;
                }
              row.push(square);
          }
          this.chessMap.push(row);
      }
  }

  this.setNewChessBoard = () => {
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
                  this.chessMap[y][x].setChessman(chessman);
              }
              this.boardHTML.appendChild(this.chessMap[y][x].getTile());
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
        if (state == GAME_STATE.NEWGAME) {
            this.setNewChessMap();
            this.setNewChessBoard();
            state = GAME_STATE.PLAYING;
        }
        document.body.appendChild(this.boardHTML);
    }

}

