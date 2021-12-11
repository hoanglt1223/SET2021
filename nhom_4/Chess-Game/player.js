function Player(game, username, role) {
  this.game = game;
  this.username = username;
  this.role = role;
  this.isTurn = false;
  this.isWinner = false;
  this.pieces = [];
  this.dropped = [];
  this.captured = [];

  this.move = function (piece, square) {
    if (!piece || !square) return false;
    const game = this.game; // the game
    const test = game.testMove(piece, square); // test move first

    // if theres no wrong in move, then move
    if (test) piece.move(square);
    console.log('Test Move ', test);
    return test; 
  };
}
