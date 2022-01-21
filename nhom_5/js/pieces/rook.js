function Rook(isWhite, isKilled = false) {
  const rookImgUrl = isWhite ? './img/rook_white.png' : './img/rook_black.png' 

  Piece.call(this, isWhite, isKilled, PieceName.ROOK, rookImgUrl)
}
