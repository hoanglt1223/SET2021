function Spot(x, y, piece, canMove = false) {
  this.piece = piece;
  this.x = x;
  this.y = y;
  this.canMove = canMove;

  this.setCanMove = function (newCanMove) {
    this.canMove = newCanMove;
  };
}
