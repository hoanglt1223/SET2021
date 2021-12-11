export function createPieceElement(name, color, backgroundUrl) {
  const piece = document.createElement('img');
  piece.classList.add(color,name, 'piece');
  piece.src = backgroundUrl;
  return piece;
}

export const Piece = function (name, color, column, row, isKilled = false, backgroundUrl) {
  this.name = name;
  this.color = color;
  this.isKilled = isKilled;
  this.backgroundUrl = backgroundUrl;
  this.column = column;
  this.row = row;
  this.element = Piece.prototype.createPieceElement(name, color, backgroundUrl);
}

Piece.prototype.createPieceElement = (name, color, backgroundUrl) => {
  const piece = document.createElement('img');
  piece.classList.add(color,name, 'piece');
  piece.src = backgroundUrl;
  return piece;  
}