function Game() {
  this.board = new Board()

  this.initialize = function () {
    this.board.initialize();
  }

  this.showChessBoard = function () {
    const boxes = this.board.boxes;
    const boardElement = document.getElementById("chess-board");

    boxes.forEach((row, rowIndex) => {
      const rowElement = document.createElement("div");
      rowElement.className = "row"
      rowElement.style.flexDirection = rowIndex % 2 === 0 ? '' : 'row-reverse';
      for (const spot of row) {
        const spotElement = document.createElement("div")
        spotElement.className = "square";
        spotElement.style.backgroundColor = spot.y % 2 === 0 ? "white" : "gray"

        const currentPiece = spot.piece
        //render piece
        if (currentPiece) {
          const imgElement = document.createElement("img");
          imgElement.setAttribute("src", currentPiece.imgUrl)
          imgElement.className = "piece-image"

          spotElement.appendChild(imgElement)
        }

        rowElement.appendChild(spotElement)
      }
      boardElement.appendChild(rowElement)
    })
  }
}