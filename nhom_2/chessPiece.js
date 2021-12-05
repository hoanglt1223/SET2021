function ChessPiece(row, letter, color, chessType) {
  this.cell = document.getElementById(letter + row);

  this.chessImage = document.createElement("img");
  this.setImage = function () {
    const cell = this.cell;
    cell.appendChild(this.chessImage);
    this.chessImage.src = "/img_src/chess-" + chessType + "-" + color + ".png";
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
  ChessPiece.call(this, row, letter, color, "pawn");
  this.image = this.setImage();
}

function King(row, letter, color) {
  ChessPiece.call(this, row, letter, color, "king");
  this.image = this.setImage();
}

function Queen(row, letter, color) {
  ChessPiece.call(this, row, letter, color, "queen");
  this.image = this.setImage();
}

function Rook(row, letter, color) {
  ChessPiece.call(this, row, letter, color, "rook");
  this.image = this.setImage();
}

function Bishop(row, letter, color) {
  ChessPiece.call(this, row, letter, color, "bishop");
  this.image = this.setImage();
}

function Knight(row, letter, color) {
  ChessPiece.call(this, row, letter, color, "knight");
  this.image = this.setImage();
}

 