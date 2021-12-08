function Game() {
  this.board = new Board();

  this.initialize = function () {
    this.board.initialize();
  };

  this.showChessBoard = function () {
    const boxes = this.board.boxes;
    const boardElement = document.getElementById("chess-board");

    boxes.forEach((row, rowIndex) => {
      const rowElement = document.createElement("div");
      rowElement.className = "row";
      for (const spot of row) {
        const spotElement = document.createElement("div");
        spotElement.className = "square";
        spotElement.style.backgroundColor = spot.y % 2 === 0 ? "white" : "gray";

        if (rowIndex % 2 !== 0) {
          spotElement.style.backgroundColor =
            spotElement.style.backgroundColor === "white" ? "gray" : "white";
        }

        const currentPiece = spot.piece;
        //render piece
        if (currentPiece) {
          const imgElement = document.createElement("img");
          imgElement.setAttribute("src", currentPiece.imgUrl);
          imgElement.className = "piece-image";

          // add event listener for "click" piece
          imgElement.addEventListener("click", () => {
            onClickPieceElement(spot);
          });

          spotElement.appendChild(imgElement);
        }

        rowElement.appendChild(spotElement);
      }
      boardElement.appendChild(rowElement);
    });
  };
}

function onClickPieceElement(spot) {
  const currentPiece = spot.piece;

  const spotPositions = currentPiece.getSpotsCanMove(spot.x, spot.y);

  console.log({ spotPositions });
}
