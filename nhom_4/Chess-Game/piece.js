function Piece(pieceInfo) {
  this.info = {
    ...pieceInfo, //Piece Information
    element: null,
  };
  this.data = {};
  this.create = function () {
    const pieceElement = new Image(); //New Image element
    const classname = "chessboard-piece";

    // set Attribute
    pieceElement.src = `./assets/${this.info.alias}.png`; //set Image source
    pieceElement.classList.add(classname);

    this.info.element = pieceElement; // store element
  }
}