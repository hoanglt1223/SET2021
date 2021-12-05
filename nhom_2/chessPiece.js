function ChessPiece(row, letter, color) {
  this.chessImage = document.createElement("img");

  this.setImage = (chessType) => {
    this.chessImage.src = "/assets/chess-" + chessType + "-" + color + ".png";
  }

  this.getImage = () =>{
    return this.chessImage;
  }

  // this.showChessMove = function (){
  //   const chessImage = this.chessImage;
  //   chessImage.addEventListener("click", function(){
  //     switch (chessName){
  //       case "pawn":
  //         if (row == 2){
            
  //         }
  //         break;
  //       case "king":

  //         break;
  //       case "queen":

  //         break;
  //       case "rook":

  //         break;
  //       case "bishop":

  //         break;
  //       case "knight":

  //         break;
  //     }
  //   })
  // }
}

function Pawn(row, letter, color) {
  ChessPiece.call(this, row, letter, color);
  this.setImage("pawn");
}

function King(row, letter, color) {
  ChessPiece.call(this, row, letter, color);
  this.setImage("king");
}

function Queen(row, letter, color) {
  ChessPiece.call(this, row, letter, color);
  this.setImage("queen");
}

function Rook(row, letter, color) {
  ChessPiece.call(this, row, letter, color);
  this.setImage("rook");
}

function Bishop(row, letter, color) {
  ChessPiece.call(this, row, letter, color);
  this.setImage("bishop");
}

function Knight(row, letter, color) {
  ChessPiece.call(this, row, letter, color);
  this.setImage("knight");
}

 