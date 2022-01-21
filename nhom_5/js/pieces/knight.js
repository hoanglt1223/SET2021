function Knight(isWhite, isKilled = false) {
  const knightImgUrl = isWhite ? './img/knight_white.png' : './img/knight_black.png'

  Piece.call(this, isWhite, isKilled, PieceName.KNIGHT, knightImgUrl)
}