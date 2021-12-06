function Bishop(isWhite, isKilled = false) {
  const bigshopImgUrl = isWhite ? './img/bishop_white.png' : './img/bishop_black.png'

  Piece.call(this, isWhite, isKilled, PieceName.BISHOP, bigshopImgUrl)
}