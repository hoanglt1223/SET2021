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
        let color = ((y + x) % 2 != 0) ? "rgb(163, 119, 84)" : "rgb(243, 235, 215)";
        let cell = new Cell(letters[y - 1] + x.toString(), color);
        let chesspiece = null;
        switch (x) {
          case 1:
          case 8:
            let color = x == 1 ? "white" : "black";
            switch (letters[y - 1]) {
              case "a":
              case "h":
                chesspiece = new Rook(x, letters[y - 1], color);
                break;
              case "b":
              case "g":
                chesspiece = new Knight(x, letters[y - 1], color);
                break;
              case "c":
              case "f":
                chesspiece = new Bishop(x, letters[y - 1], color);
                break;
              case "d":
                chesspiece = new Queen(x, letters[y - 1], color);
                break;
              case "e":
                chesspiece = new King(x, letters[y - 1], color);
                break;
            }
            break;
          case 2:
            chesspiece = new Pawn(x, letters[y - 1], "white");
            break;
          case 7:
            chesspiece = new Pawn(x, letters[y - 1], "black");
            break;
        }
        if (chesspiece != null) {
          cell.appendChesspiece(chesspiece);
        }
        row.appendChild(cell.getCell());
      }
      this.table.appendChild(row);
    }
  }

  this.render = function () {
    let x = document.getElementById('main');
    x.appendChild(this.table);
    this.setNewChessBoard();
  }
}


const chessBoard = new ChessBoard();
chessBoard.render(); // create board

