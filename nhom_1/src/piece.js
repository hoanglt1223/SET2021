export const Piece = function (name, color, isKilled = false, backgroundUrl) {
  this.name = name;
  this.color = color;
  this.isKilled = isKilled;
  this.backgroundUrl = backgroundUrl;

  //return HTML
  this.getElement = () => {
    const piece = document.createElement('img');
    piece.src = this.backgroundUrl;
    return piece;
  }
}