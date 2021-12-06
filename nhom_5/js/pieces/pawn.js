function Pawn(isWhite, isKilled = false) {
  const pawnImgUrl = isWhite ? './img/pawn_white.png' : './img/pawn_black.png'
  
  Piece.call(this, isWhite, isKilled, PieceName.PAWN, pawnImgUrl)
}