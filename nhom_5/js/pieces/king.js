function King(isWhite, isKilled = false) {
  const kingImgUrl = isWhite ? './img/king_white.png' : './img/king_black.png'

  Piece.call(this, isWhite, isKilled, PieceName.KING, kingImgUrl)
}