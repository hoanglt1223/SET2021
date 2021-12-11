// class Board
function Board(game) {
  // component
  this.game = game;
  this.settings = {
    // settings, configs, params
    col: ["a", "b", "c", "d", "e", "f", "g", "h"], // col char
    row: [8, 7, 6, 5, 4, 3, 2, 1], // row number
  };
  this.data = []; //list square data

  // create Board
  this.create = function () {
    const col = this.settings.col;
    const row = this.settings.row;

    let role = "white"; // start with white

    // change role
    const setRole = () => {
      return (role = role == "white" ? "black" : "white");
    };

    row.forEach((rowValue, rowIndex) => {
      const squares = []; // store all the square
      col.forEach((colValue, colIndex) => {
        const letter = colValue;
        const number = rowValue;
        const position = `${letter}${number}`; // new position
        const boardPos = { y: rowIndex, x: colIndex };
        const square = new Square(boardPos, position, setRole()); // new square
        square.create();
        squares.push(square);
      });

      this.data.push(squares); // push the squares in the board data
      setRole(); //change role before loop next time
    });
  };

  //place default chess on
  this.placeChessAsDefault = function () {
    const board = this;
    const game = this.game; // the game
    const pieceList = game.pieces; // all pieces

    const place = function (piece) {
      const position = piece.position; // piece pos
      const square = board.filterSquare(position); // select square by its pos
      const pieceElement = piece.element; // piece image
      const squareElement = square.element; // square element

      square.piece = piece;

      squareElement.appendChild(pieceElement);
    };

    // loop through players and place their pieces
    pieceList.forEach(place);
  };

  // remove all class from all squares
  this.resetSquares = function () {
    for (let squares of this.data) {
      for (let square of squares) {
        square.setAs("move", false, true);
        square.setAs("enemy", false, true);
        square.setAs("castling", false, true);
        square.setAs("from", false, true);
        square.setAs("to", false, true);
      }
    }
  };

  // setting classes and possibilities
  this.showSquarePossibilities = function (possibilities, insertUI) {
    if (!possibilities) return;
    const { moves, enemies } = possibilities;

    // reset first
    this.resetSquares();

    // then set square properties according to possibilities values
    moves.forEach((square) => square.setAs("move", true, insertUI));
	enemies.forEach((square) => square.setAs("enemy", true, insertUI));
  };

  // set moved square
  this.setMovedSquare = function (from, to) {
    from.setAs("from", true, true);
    to.setAs("to", true, true);
  };

  //filter square by position
  this.filterSquare = function (square) {
    // loop in board
    for (let squares of this.data) {
      // loop through the squares
      for (let sq of squares) {
        // check if square the position is equal to the given pos
        if (sq.position == square) {
          return sq;
        }
      }
    }
  };

  // Check if the x and y position is valid in board
  this.isValidPos = function (y, x) {
    return this.data[y] ? this.data[y][x] : false;
  };
}
