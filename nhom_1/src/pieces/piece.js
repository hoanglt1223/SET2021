export const Piece = function (name, color, square, isKilled = false, backgroundUrl) {
  this.name = name;
  this.color = color;
  this.isKilled = isKilled;
  this.backgroundUrl = backgroundUrl;
  this.square = square;

  //return HTML
  this.getElement = () => {
    const piece = document.createElement('img');
    piece.classList.add(name, 'piece');
    piece.src = this.backgroundUrl;
    return piece;
  }
}