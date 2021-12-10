function Pawn(isWhite, isKilled = false) {
  const pawnImgUrl = isWhite ? "./img/pawn_white.png" : "./img/pawn_black.png";

  Piece.call(this, isWhite, isKilled, PieceName.PAWN, pawnImgUrl);
  this.isFirstStep = true;

  this.getSpotsCanMove = function (startX, startY, boxes) {
    let spots = [];

    if (this.isWhite) {
      spots.push({ x: startX - 1, y: startY });

      if (this.isFirstStep && boxes[startX - 1][startY].piece === null) {
        spots.push({ x: startX - 2, y: startY });
      }
    } else {
      spots.push({ x: startX + 1, y: startY });

      if (this.isFirstStep && boxes[startX + 1][startY].piece === null) {
        spots.push({ x: startX + 2, y: startY });
      }
    }

    const filterSpots = spots.filter((spot) => {
      return boxes[spot.x][spot.y].piece === null;
    });

    return filterSpots;
  };
  this.setIsFirstStep = function (newFirstStep) {
    this.isFirstStep = newFirstStep;
  };
}
