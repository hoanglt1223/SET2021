function Bishop(isWhite, id, key) {
  const bishopUrl = isWhite
    ? "asset/bishop_white.png"
    : "asset/bishop_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "bishop", id, bishopUrl, key);
  this.recommendMoves = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    let recommend = [];
    let kill = [];
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();

    //top right
    let tempX = x;
    let tempY = y;
    while (!board.isOutside(tempX + 1, tempY + 1)) {
      if (!this.isEmpty(`${column[tempX + 1]}${tempY + 1}`)) {
        const id = `${column[tempX + 1]}${tempY + 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        const squareColor = squareKey.slice(0, 5) === "white";
        if (this.isWhite !== squareColor) {
          board.changeColorKill(tempX + 1, tempY + 1, this, squareKey);
          kill.push(id);
        }
        break;
      }
      tempX += 1;
      tempY += 1;
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    //top left
    tempX = x;
    tempY = y;
    while (!board.isOutside(tempX + 1, tempY - 1)) {
      if (!this.isEmpty(`${column[tempX + 1]}${tempY - 1}`)) {
        const id = `${column[tempX + 1]}${tempY - 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        const squareColor = squareKey.slice(0, 5) === "white";
        if (this.isWhite !== squareColor) {
          board.changeColorKill(tempX + 1, tempY - 1, this, squareKey);
          kill.push(id);
        }
        break;
      }
      tempX += 1;
      tempY -= 1;
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    //bottom right
    tempX = x;
    tempY = y;
    while (!board.isOutside(tempX - 1, tempY + 1)) {
      if (!this.isEmpty(`${column[tempX - 1]}${tempY + 1}`)) {
        const id = `${column[tempX - 1]}${tempY + 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        const squareColor = squareKey.slice(0, 5) === "white";
        if (this.isWhite !== squareColor) {
          board.changeColorKill(tempX - 1, tempY + 1, this, squareKey);
          kill.push(id);
        }
        break;
      }
      tempX -= 1;
      tempY += 1;
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    //bottom left
    tempX = x;
    tempY = y;
    while (!board.isOutside(tempX - 1, tempY - 1)) {
      if (!this.isEmpty(`${column[tempX - 1]}${tempY - 1}`)) {
        const id = `${column[tempX - 1]}${tempY - 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        const squareColor = squareKey.slice(0, 5) === "white";
        if (this.isWhite !== squareColor) {
          board.changeColorKill(tempX - 1, tempY - 1, this, squareKey);
          kill.push(id);
        }
        break;
      }
      tempX -= 1;
      tempY -= 1;
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    setDataToLocal("recommend", recommend);
    setDataToLocal("kill", kill);
  }
}
