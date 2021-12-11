export function createPieceElement(name, color, backgroundUrl) {
  const piece = document.createElement('img');
  piece.classList.add(color,name, 'piece');
  piece.src = backgroundUrl;
  return piece;
}

export const Piece = function (name, color, column, row, isSelected = false, isKilled = false, backgroundUrl) {
  this.name = name;
  this.color = color;
  this.isSelected = isSelected;
  this.isKilled = isKilled;
  this.backgroundUrl = backgroundUrl;
  this.column = column;
  this.row = row;
  this.element = Piece.prototype.createPieceElement(name, color, backgroundUrl);

  this.select = () => {

  }

  this.move = (column, row) => {
    
  }
}

Piece.prototype.createPieceElement = (name, color, backgroundUrl) => {
  const piece = document.createElement('img');
  piece.classList.add(color,name, 'c-piece');
  piece.src = backgroundUrl;
  return piece;  
}