// King class
function King(name, alias, color, position, index) {
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

    //add comment later
    const testSquare = function (y, x) {
      // check if the position is valid
      if (!gameboard.isValidPos(y, x)) return false;

      const square = boardData[y][x]; // target square
      const sqPiece = square.piece; // piece inside the target square

      if (!square) return false;

      if (sqPiece) {
        testEnemy(y, x);
        return false;
      } else {
        pos.moves.push(square);
        return true;
      }
    };

    // move pattern
    const movePattern = function () {
      // Top
      testSquare(y - 1, x);
      // Bottom
      testSquare(y + 1, x);
      // Left
      testSquare(y, x - 1);
      // Right
      testSquare(y, x + 1);
      // Top Left
      testSquare(y - 1, x - 1);
      // Top Right
      testSquare(y - 1, x + 1);
      // Bottom Left
      testSquare(y + 1, x - 1);
      // Bottom Right
      testSquare(y + 1, x + 1);
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
