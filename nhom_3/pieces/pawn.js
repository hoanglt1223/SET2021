function Pawn(isWhite, position, key) {
  const pawnUrl = isWhite ? "asset/pawn_white.png" : "asset/pawn_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "pawn", position, pawnUrl, key);
  this.recommendMoves = function (position) {
    // console.log(id);
    let x = position.charAt(0);
    let y = parseInt(position.charAt(1));
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();
    if (this.isWhite === true) {
      if (y === 2) {
        for (i = y + 1; i <= y + 2; i++) {
          board.changeSquareColor(x, i, this);
          const id = `${column[x]}${i}`;
          // document.getElementById(id).addEventListener("click", () => {
          //   // board.movePiece(id);
          //   // this.setPosition(id);
          //   // this.relocatePiece(id);
          //   // board.resetSquareColor();
          // });
        }
      } else {
        board.changeSquareColor(x, y + 1, this); //1
        const id = `${column[x]}${y + 1}`;
        // document.getElementById(id).addEventListener("click", () => {
        //   // board.movePiece(id);
        //   // this.setPosition(id);
        //   this.relocatePiece(id);
        //   board.resetSquareColor();
        // });
      }
    } else {
      if (y === 7) {
        for (i = y - 1; i >= y - 2; i--) {
          board.changeSquareColor(x, i, this);
          const id = `${column[x]}${i}`;
          // document.getElementById(id).addEventListener("click", () => {
          //   // board.movePiece(id);
          //   // this.setPosition(id);
          //   this.relocatePiece(id);
          //   board.resetSquareColor();
          // });
        }
      } else {
        board.changeSquareColor(x, y - 1, this); //2
        const id = `${column[x]}${y - 1}`;
        // document.getElementById(id).addEventListener("click", () => {
        //   // board.movePiece(id);
        //   // this.setPosition(id);
        //   this.relocatePiece(id);
        //   board.resetSquareColor();
        // });
      }
    }
  };
  this.oldId = function () {};
  this.currentId = function () {};
}
