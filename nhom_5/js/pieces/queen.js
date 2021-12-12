function Queen(isWhite, isKilled = false) {
  const queenImgUrl = isWhite
    ? "./img/queen_white.png"
    : "./img/queen_black.png";

  Piece.call(this, isWhite, isKilled, PieceName.QUEEN, queenImgUrl);

  this.getSpotsCanMove = function (startX, startY, board) {
    const southEastSpots = getSouthEastSpotsCanMove(startX, startY, board);
    const northEastSpots = getNorthEastSpotsCanMove(startX, startY, board);
    const columnSpots = getColumnSpotsCanMove(startX, startY, board);
    const rowSpots = getRowSpotsCanMove(startX, startY, board);

    return [...southEastSpots, ...northEastSpots, ...columnSpots, ...rowSpots];
  };
}
