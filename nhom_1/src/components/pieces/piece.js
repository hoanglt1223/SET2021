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

  this.toggleSelected = () => {
    this.isSelected = ! this.isSelected;
    this.element.parentElement.classList.toggle('c-board__square--selected')
  }

  this.possibleMoves = () => {

  }

  this.callbackMove = () => {

  }

  this.move = (squareId, callbackMove) => {
    if(!this.possibleMoves().includes(squareId)){
      return;
    }
    this.column = squareId[0];
    this.row = Number(squareId[1]);
    this.element.parentElement.classList.toggle('c-board__square--selected');
    const square = document.getElementById(squareId);
    square.appendChild(this.element);
    this.isSelected = false;

    this.callbackMove();
  }

  this.kill = (piece) => {
    piece.element.parentNode.removeChild(piece.element);
    piece.isKilled = true;
  }
}


Piece.prototype.createPieceElement = (name, color, backgroundUrl) => {
  const piece = document.createElement('img');
  piece.classList.add(color,name, 'c-piece');
  piece.src = backgroundUrl;
  return piece;  
}