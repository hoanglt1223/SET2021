// Bishop class
function Bishop(name, alias, color, position, index) {
  Piece.call(this, name, alias, color, position, index);

  this.getPossibilities = function () {
    const piece = this; // the current piece
    const square = this.square; // the current square where piece located
    const player = this.player; // the turning player
    const role = player.role; // player role values (white, black)
    const game = this.game; // the game
    const gameboard = game.board; // gameboard
    const boardData = gameboard.data; // and the board data
    const pos = { moves: [], enemies: [] }; // possibilities object
    let { x, y } = square.boardPosition; // square position on board

    // will check if the piece inside square is enemy or not
    // then if it is push it into enemies pos
    const testEnemy = function (y, x) {
      // check if the position is valid
      if (!gameboard.isValidPos(y, x)) return false;

      const square = boardData[y][x]; // target square
      const piece = square.piece; // piece inside the target square

      if (!square || !piece) return false;
      if (piece.player.role == role) return false;

      pos.enemies.push(square);
    };

    // test directions and check how long the piece can be move from it's position
    // yChange / xChange = y/x need to change
    // yOperation / xOperation = what operation, true = addition (+) while false = subtration (-)
    // until (number), how many squares need to check (max = 8)
    const testLoopSquare = function (yChange, yOperation, xChange, xOperation, until = 8) {
      let foundPiece = false;
      Array.from(Array(until)).forEach((value, i) => {
        // piece position start from 1 -> 8 but Array index start from 0 -> 7
        // so increase index 1 unit
        const index = i + 1;
        const ny = yChange ? (yOperation ? y + index : y - index) : y;
        const nx = xChange ? (xOperation ? x + index : x - index) : x;

        // check if the position is valid
        if (!gameboard.isValidPos(ny, nx)) return false;

        const square = boardData[ny][nx]; // target square
        const sqPiece = square.piece; // piece inside the target square

        // check not found piece before
        if (!foundPiece) {
          if (square) {
            // check found piece
            if (sqPiece) {
              // test if there is enemy
              testEnemy(ny, nx);
              foundPiece = true; // set found piece to exit forEach loop
            } else {
              pos.moves.push(square);
            }
          }
        }
        
      })
    }

    // move pattern
    const movePattern = function () {
      // Top left
      testLoopSquare(true, false, true, false);
      // Bottom Left
      testLoopSquare(true, true, true, false);
      // Top Right
      testLoopSquare(true, false, true, true);
      // Bottom Right
      testLoopSquare(true, true, true, true);
    };

    movePattern();
    return pos;
  };

  this.getPossibleMovesOnly = function () {
    let { moves, enemies } = this.getPossibilities();
    const game = this.game;

    game.board.resetSquares();
    return moves.length || enemies.length ? { moves, enemies } : false;
  };
}
