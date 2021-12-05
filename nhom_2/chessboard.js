const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
letters.reverse();

function ChessBoard() {
  this.table = document.getElementById("chessboard");

  this.rows = 8;

  this.columns = 8;

  this.setRows = function () {
    for (let rowId = 8; rowId >= 0; rowId--) {
      let boardRow = document.createElement("tr");
      this.table.appendChild(boardRow);
      boardRow.id = "row" + rowId.toString();
      let labelRow = document.createElement("label");
      boardRow.appendChild(labelRow);
      if (rowId > 0) {
        labelRow.innerHTML = rowId;
        this.setCells(rowId);
      } else {
        letters.reverse().forEach(function (letter) {
          let labelColumn = document.createElement("td");
          boardRow.appendChild(labelColumn);
          labelColumn.innerHTML = letter.toLocaleUpperCase();
          labelColumn.style.borderStyle = "none";
          labelColumn.style.width = "20px";
          labelColumn.style.height = "20px";
        })
      }
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

  this.setCells = function createCell(rowId) {
    for (let i = 8; i >= 1; i--) {
      let boardCell = document.createElement("td");
      let boardRow = document.getElementById("row" + rowId.toString());
      boardRow.appendChild(boardCell);
      boardCell.id = letters[i - 1] + rowId.toString();
      let getCellById = document.getElementById(boardCell.id);
      if ((i % 2 != 0 && rowId % 2 == 0) || (i % 2 == 0 && rowId % 2 != 0)) {
        this.setCellBackground(getCellById, "rgb(163, 119, 84)");
      } else {
        this.setCellBackground(getCellById, "rgb(243, 235, 215)");
      }
    }
  }

  this.setCellBackground = function colorBackground(getCellById, color) {
    getCellById.style.backgroundColor = color;
  }

}

// function Cell(haveChessPiece, row, letter){
//   this.cell = document.getElementById(letter + row);
  
//   this.haveChessPiece = function(){
//     const cell = this.cell;
//     cell.classList.add("haveChessPiece");
//   }
// }

// const a2 = new Cell(false, "2", "a");
// a2.haveChessPiece

const chessBoard = new ChessBoard();
chessBoard.setRows(); // create board
chessBoard.setImages(); // set images

