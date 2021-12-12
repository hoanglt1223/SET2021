function Knight(isWhite, isKilled = false) {
  const knightImgUrl = isWhite ? './img/knight_white.png' : './img/knight_black.png'

  Piece.call(this, isWhite, isKilled, PieceName.KNIGHT, knightImgUrl)

  this.getSpotsCanMove = function (startX, startY, board) {
    let spots = [];

    // get spots
    spots.push({ x: startX - 2, y: startY - 1 });
    spots.push({ x: startX + 2, y: startY - 1 });
    spots.push({ x: startX - 2, y: startY + 1 });
    spots.push({ x: startX + 2, y: startY + 1 });
    spots.push({ x: startX - 1, y: startY - 2 });
    spots.push({ x: startX + 1, y: startY - 2 });
    spots.push({ x: startX - 1, y: startY + 2 });
    spots.push({ x: startX + 1, y: startY + 2 });

    // filter inValid spots
    const filterInValidSpots = spots.filter((spot) => {
      return (spot.x >= 0 && spot.x < ROWS)
        && (spot.y >= 0 && spot.y < COLS)
    })

    // return potential spots
    const filterSpots = filterInValidSpots.filter((spot) => {
      return !board.checkHasPieceOnSpot(spot.x, spot.y)
    })
    return filterSpots
  }
}