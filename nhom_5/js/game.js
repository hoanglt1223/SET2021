function Game() {
  this.board = new Board();

  this.initialize = function () {
    this.board.initialize();
  };

  this.showChessBoard = function () {
    const self = this;
    const boxes = this.board.boxes;
    const boardElement = document.getElementById("chess-board");

    boardElement.innerHTML = "";

    boxes.forEach((row, rowIndex) => {
      const rowElement = document.createElement("div");
      rowElement.className = "row";

      row.forEach((spot, colIndex) => {
        const spotElement = document.createElement("div");
        spotElement.className = "square";
        spotElement.style.backgroundColor = spot.y % 2 === 0 ? "white" : "gray";
        spotElement.id = `spot-${rowIndex}-${colIndex}`;

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
          imgElement.id = `piece-${rowIndex}-${colIndex}`;

          // add event listener for "click" piece
          imgElement.addEventListener("click", function () {
            onClickPieceElement(self, spot);
          });

          spotElement.appendChild(imgElement);
        } else {
          // add event listener for "click" spot
          spotElement.addEventListener("click", (event) => {
            onClickSpotElement(event, self, spot);
          });
        }

        rowElement.appendChild(spotElement);
      });

      boardElement.appendChild(rowElement);
    });
  };
}

function onClickPieceElement(self, spot) {
  resetCanMovesStyle();
  const currentPiece = spot.piece;

  const currentPieceElement = document.getElementById(
    `piece-${spot.x}-${spot.y}`
  );
  currentPieceElement.classList.add("piece--selected");
  self.board.setCurrentSpotSelected(spot);

  const spotPositions = currentPiece.getSpotsCanMove(
    spot.x,
    spot.y,
    self.board.boxes
  );
  spotPositions.forEach((position) => {
    //update Spot style
    const currentSpotElement = document.getElementById(
      `spot-${position.x}-${position.y}`
    );
    currentSpotElement.classList.add("square--can-move");

    // set can move for Spot
    const currentSpot = self.board.getSpotFromBoxes(position.x, position.y);
    currentSpot.setCanMove(true);
  });
}

function onClickSpotElement(event, self, spot) {
  const selectedSpot = self.board.currentSpotSelected;
  const currentSpotElement = event.target;

  if (
    selectedSpot &&
    currentSpotElement.classList.contains("square--can-move")
  ) {
    self.board.setPieceForSpot(selectedSpot.piece, spot.x, spot.y);
    //remove old chess
    self.board.setPieceForSpot(null, selectedSpot.x, selectedSpot.y);

    handleForPawn(selectedSpot.piece);
    self.board.setCurrentSpotSelected(null);
    self.showChessBoard();
  }
}

function handleForPawn(piece) {
  if (piece.name === PieceName.PAWN && piece.isFirstStep) {
    piece.setIsFirstStep(false);
  }
}
