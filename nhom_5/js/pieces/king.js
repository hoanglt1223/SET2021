function King(isWhite, isKilled = false) {
  const kingImgUrl = isWhite ? './img/king_white.png' : './img/king_black.png'

  Piece.call(this, isWhite, isKilled, PieceName.KING, kingImgUrl)

  this.getSpotsCanMove = function (startX, startY, board) {
    let spots = [];

    //get top line
    for (let i = -1; i < 2; i++) {
      const nextX = startX - 1;
      const nextY = startY + i;
      spots.push({ x: nextX, y: nextY });
    }

    //get bottom line
    for (let i = -1; i < 2; i++) {
      const nextX = startX + 1;
      const nextY = startY + i
      spots.push({ x: nextX, y: nextY });
    }

    spots.push({ x: startX, y: startY - 1 });
    spots.push({ x: startX, y: startY + 1 });

    // filter invalid spots
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
