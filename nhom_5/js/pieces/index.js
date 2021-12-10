function Piece(isWhite, isKilled = false, name, imgUrl) {
  this.name = name;
  this.imgUrl = imgUrl;
  this.isWhite = isWhite;
  this.isKilled = isKilled;

  getSpotsCanMove = function (startSpot) {};
}
