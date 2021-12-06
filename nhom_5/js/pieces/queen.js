function Queen(isWhite, isKilled = false) {
  const queenImgUrl = isWhite ? './img/queen_white.png' :
    './img/queen_black.png'

  Piece.call(this, isWhite, isKilled, PieceName.QUEEN, queenImgUrl)
}