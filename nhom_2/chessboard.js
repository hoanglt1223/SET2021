const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
letters.reverse();

function ChessBoard() {
  //property
  this.table = document.createElement("table");
  this.table.id = "chessboard";

  // set
  this.setNewChessBoard = () => {
    for (let x = 8; x >= 1; x--) {
      let row = document.createElement("tr");
      for (let y = 8; y >= 1; y--) {
        let color = ((y + x) % 2 != 0) ? "rgb(163, 119, 84)" : "rgb(243, 235, 215)";
        let cell = new Cell(letters[y - 1] , x, color);
        let chesspiece = null;
        switch (x) {
          case 1:
          case 8:
            let color = x == 1 ? "white" : "black";
            switch (letters[y - 1]) {
              case "a":
              case "h":
                chesspiece = new Rook(color);
                break;
              case "b":
              case "g":
                chesspiece = new Knight(color);
                break;
              case "c":
              case "f":
                chesspiece = new Bishop(color);
                break;
              case "d":
                chesspiece = new Queen(color);
                break;
              case "e":
                chesspiece = new King(color);
                break;
            }
            break;
          case 2:
            chesspiece = new Pawn("white");
            break;
          case 7:
            chesspiece = new Pawn("black");
            break;
        }
        if (chesspiece != null) {
          cell.setChesspiece(chesspiece);
        }
        row.appendChild(cell.getCell());
      }
      this.table.appendChild(row);
    }
  }


  // render
  this.render = function () {
    let x = document.getElementById('main');
    x.appendChild(this.table);
    this.setNewChessBoard();
  }
}


const chessBoard = new ChessBoard();
chessBoard.render(); // create board

