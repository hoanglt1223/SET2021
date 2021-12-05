function ChessPiece(row, letter, color, chessName) {
  this.cell = document.getElementById(letter + row);

  this.chessImage = document.createElement("img");
  this.setChessPiece = function () {
    const cell = this.cell;
    cell.appendChild(this.chessImage);
    this.chessImage.src = "/img_src/chess-" + chessName + "-" + color + ".png";
    // chessImage.addEventListener("click", function () {
    //   cell.style.backgroundColor = "red";
    // })
    return this.chessImage;
  }

  this.showChessMove = function (){
    const chessImage = this.chessImage;
    chessImage.addEventListener("click", function(){
      switch (chessName){
        case "pawn":
          if (row == 2){
            
          }
          break;
        case "king":

          break;
        case "queen":

          break;
        case "rook":

          break;
        case "bishop":

          break;
        case "knight":

          break;
      }
    })
  }
}

function Pawn(row, letter, color, isDead) {
  ChessPiece.call(this, row, letter, color, "pawn", isDead);
  this.image = this.setChessPiece();
  this.isDead = isDead;
}

function King(row, letter, color, isDead) {
  ChessPiece.call(this, row, letter, color, "king", isDead);
  this.image = this.setChessPiece();
  this.isDead = isDead;
}

function Queen(row, letter, color, isDead) {
  ChessPiece.call(this, row, letter, color, "queen", isDead);
  this.image = this.setChessPiece();
  this.isDead = isDead;
}

function Rook(row, letter, color, isDead) {
  ChessPiece.call(this, row, letter, color, "rook", isDead);
  this.image = this.setChessPiece();
  this.isDead = isDead;
}

function Bishop(row, letter, color, isDead) {
  ChessPiece.call(this, row, letter, color, "bishop", isDead);
  this.image = this.setChessPiece();
  this.isDead = isDead;
}

function Knight(row, letter, color, isDead) {
  ChessPiece.call(this, row, letter, color, "knight", isDead);
  this.image = this.setChessPiece();
  this.isDead = isDead;
}

 