const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
letters.reverse();

function ChessBoard() {
  this.table = document.createElement("table");
  this.table.id = "chessboard";

  // set a new chessboard when start a new game
  this.setNewChessBoard = () => {
    for (let x = 8; x >= 1; x--) {
      let row = document.createElement("tr");
      for (let y = 8; y >= 1; y--) {
        let boardCell = document.createElement("td");
        boardCell.id = letters[y - 1] + x.toString();
        let chesspiece = null;
        switch (x){
          case 1:
          case 8:
            let color = x == 1 ? "white" : "black";
            switch(letters[y-1]){
              case "a":
              case "h":
                chesspiece = new Rook(x, letters[y-1], color);
                break;
              case "b":
              case "g":
                chesspiece = new Knight(x, letters[y-1], color);
                break;
              case "c":
              case "f":
                chesspiece = new Bishop(x, letters[y-1], color);
                break;
              case "d":
                chesspiece = new Queen(x, letters[y-1], color);
                break;
              case "e":
                chesspiece = new King(x, letters[y-1], color);
                break;
            }
            break;
          case 2:
            chesspiece = new Pawn(x, letters[y-1], "white");
            break;
          case 7:
            chesspiece = new Pawn(x, letters[y-1], "black");
            break;
        }
        if (chesspiece != null) {
          boardCell.appendChild(chesspiece.getImage());
        }
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
  }

  this.render = function () {
    let x = document.getElementById('main');
    x.appendChild(this.table);
    this.setNewChessBoard();

  }

  this.setCellBackground = function colorBackground(cell, color) {
    cell.style.backgroundColor = color;
  }
}


const chessBoard = new ChessBoard();
chessBoard.render(); // create board

