// Pawn class
function Pawn(game, name, alias, color, position, index) {
  Piece.call(this, game, name, alias, color, position, index);

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

      if (!sqPiece) {
        pos.moves.push(square);
        return true;
      }
    };

    // move pattern
    const movePattern = function () {
      // loop through until values
      for (let i = 1; i < 2; i++) {
        if (role == "white") {
          // if it is white, subrtact current i value
          // so it moves from bottom to top
          if (!testSquare(y - i, x)) break;
        } else {
          // if it is black, add current i value
          // so it moves from top to bottom
          if (!testSquare(y + i, x)) break;
        }
      }

      // enemy detection
      if (role == "white") {
        // (white) check the top left and right square from it's position
        testEnemy(y - 1, x - 1);
        testEnemy(y - 1, x + 1);
      } else {
        // (black) check the bottom left and right square from it's position
        testEnemy(y + 1, x - 1);
        testEnemy(y + 1, x + 1);
      }
    };

    movePattern();
    return pos;
  };

  this.getPossibleMovesOnly = function () {
    let { moves, enemies } = this.getPossibilities();
    const game = this.game;

    game.board.resetSquares();
    return moves.length || enemies.length 
    ? { moves, enemies } 
    : false;
  };
}
