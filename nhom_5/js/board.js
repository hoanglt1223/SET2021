const ROWS = 8;
const COLS = 8;

function Board() {
  this.currentPieceSelected = null;
  this.boxes = null; // boxes has Spot items in 8x8 array 2D
  this.initialize = function () {
    let currentBoxes = [];

    for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
      const row = Array.from(Array(COLS).keys()).map((item, colIndex) => {
        // put white Pawn on Spot
        if (rowIndex === 6) {
          const pawn = new Pawn(true);
          return new Spot(rowIndex, colIndex, pawn);
        }

        // put black Pawn on Spot
        if (rowIndex === 1) {
          const pawn = new Pawn(false);
          return new Spot(rowIndex, colIndex, pawn);
        }

        return new Spot(rowIndex, colIndex, null);
      });
      currentBoxes.push(row);
    }

    // put white king on Spot
    currentBoxes[7][4].piece = new King(true);
    // put black king on Spot
    currentBoxes[0][4].piece = new King(false);

    //put white queen on Spot
    currentBoxes[7][3].piece = new Queen(true);
    //put black queen on Spot
    currentBoxes[0][3].piece = new Queen(false);

    // put white bishop on Spot
    currentBoxes[7][2].piece = new Bishop(true);
    currentBoxes[7][5].piece = new Bishop(true);
    // put black bishop on Spot
    currentBoxes[0][2].piece = new Bishop(false);
    currentBoxes[0][5].piece = new Bishop(false);

    //put white rook on Spot
    currentBoxes[7][0].piece = new Rook(true);
    currentBoxes[7][7].piece = new Rook(true);
    //put black rook on Spot
    currentBoxes[0][0].piece = new Rook(false);
    currentBoxes[0][7].piece = new Rook(false);

    //put white knight on Spot
    currentBoxes[7][1].piece = new Knight(true);
    currentBoxes[7][6].piece = new Knight(true);
    //put black knight on Spot
    currentBoxes[0][1].piece = new Knight(false);
    currentBoxes[0][6].piece = new Knight(false);
    this.boxes = currentBoxes;
  };
  this.getSpotFromBoxes = function (x, y) {
    return this.boxes[x][y];
  };
  this.setPieceForSpot = function (piece, x, y) {
    this.boxes[x][y] = new Spot(x, y, piece);
  };
  this.setCurrentSpotSelected = function (spot) {
    this.currentSpotSelected = spot;
  };
}
