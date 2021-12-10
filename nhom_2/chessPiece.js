function ChessPiece(color) {
  this.chessImage = document.createElement("img");
  this.position_X;
  this.position_Y;

  this.setPosition = (x, y) =>{
    this.position_X = x;
    this.position_Y = y;
  }

  this.setImage = (chessType) => {
    this.chessImage.src = "/assets/chess-" + chessType + "-" + color + ".png";
  }

  this.getImage = () =>{
    return this.chessImage;
  }

}

function Pawn(color) {
  ChessPiece.call(this,color);
  this.setImage("pawn");
}

function King(color) {
  ChessPiece.call(this,color);
  this.setImage("king");
}

function Queen(color) {
  ChessPiece.call(this, color);
  this.setImage("queen");
}

function Rook(color) {
  ChessPiece.call(this,  color);
  this.setImage("rook");
}

function Bishop(color) {
  ChessPiece.call(this,  color);
  this.setImage("bishop");
}

function Knight(color) {
  ChessPiece.call(this, color);
  this.setImage("knight");
}

 