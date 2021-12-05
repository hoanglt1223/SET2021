const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
letters.reverse();

function ChessBoard() {
  this.table = document.getElementById("chessboard");

  this.render = function () {
    for (let x = 8; x >= 1; x--) {
      let row = document.createElement("tr");
      for (let y = 8; y >= 1; y--) {
        let boardCell = document.createElement("td");
        boardCell.id = letters[y - 1] + x.toString();
        if ((y + x) % 2 != 0) {
          this.setCellBackground(boardCell, "rgb(163, 119, 84)");
        } 
        else {
          this.setCellBackground(boardCell, "rgb(243, 235, 215)");
        }
        row.appendChild(boardCell);
      }
      this.table.appendChild(row);
    }

    this.setImages = function () {
      // king
      new King(1, 'e', "white");
      new King(8, 'e', "black");

      // queen
      new Queen(1, "d", "white");
      new Queen(8, "d", "black");

      // pawn
      letters.forEach(function (letter) {
        new Pawn(2, letter, "black", "pawn");
        new Pawn(7, letter, "black", "pawn");
      });
      // rook
      new Rook(1, "a", "white");
      new Rook(8, "a", "black");
      new Rook(1, "h", "white");
      new Rook(8, "h", "black");

      // //knight
      new Knight(1, "b", "white");
      new Knight(8, "g", "black");
      new Knight(1, "g", "white");
      new Knight(8, "b", "black");

      //bishop
      new Bishop(1, 'c', "white");
      new Bishop(8, "f", "black");
      new Bishop(1, "f", "white");
      new Bishop(8, "c", "black"); // instance
    }
  }


  this.setCellBackground = function colorBackground(cell, color) {
    cell.style.backgroundColor = color;
  }

}

const chessBoard = new ChessBoard();
chessBoard.render(); // create board
chessBoard.setImages(); // set images

