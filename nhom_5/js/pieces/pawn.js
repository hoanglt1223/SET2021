function Pawn(isWhite, isKilled = false) {
  const pawnImgUrl = isWhite ? "./img/pawn_white.png" : "./img/pawn_black.png";

  Piece.call(this, isWhite, isKilled, PieceName.PAWN, pawnImgUrl);
  this.isFirstStep = true;

  this.getSpotsCanMove = function (startX, startY) {
    let spots = [];

    if (this.isWhite) {
      spots.push({ x: startX - 1, y: startY });

      if (this.isFirstStep) {
        spots.push({ x: startX - 2, y: startY });
      }

      return spots;
    }

    spots.push({ x: startX + 1, y: startY });

    if (this.isFirstStep) {
      spots.push({ x: startX + 2, y: startY });
    }

    return spots;
  };
}
