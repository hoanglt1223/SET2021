const chessboardParent = document.getElementById("chessboard");
const pieceData = [
  {
		"name": "Pawn",
		"length": 8,
		"alias": "bp",
		"position": {
			"letter": ["a", "b", "c", "d", "e", "f", "g", "h"],
			"number": 7
		}
	},
  {
		"name": "Knight",
		"length": 2,
		"alias": "bn",
		"position": { "letter": ["b", "g"], "number": 8 }
	},
	{
		"name": "Bishope",
		"length": 2,
		"alias": "bb",
		"position": { "letter": ["c", "f"], "number": 8 }
	},
  {
		"name": "Rook",
		"length": 2,
		"alias": "br",
		"position": { "letter": ["a", "h"], "number": 8 }
	},
	{
		"name": "Queen",
		"length": 1,
		"alias": "bq",
		"position": { "letter": ["d"], "number": 8 }
	},
	{
		"name": "King",
		"length": 1,
		"alias": "bk",
		"position": { "letter": ["e"], "number": 8 }
	},
  {
		"name": "Pawn",
		"length": 8,
		"alias": "wp",
		"position": {
			"letter": ["a", "b", "c", "d", "e", "f", "g", "h"],
			"number": 2
		}
	},
	{
		"name": "Knight",
		"length": 2,
		"alias": "wn",
		"position": { "letter": ["b", "g"], "number": 1 }
	},
	{
		"name": "Bishope",
		"length": 2,
		"alias": "wb",
		"position": { "letter": ["c", "f"], "number": 1 }
	},
	{
		"name": "Rook",
		"length": 2,
		"alias": "wr",
		"position": { "letter": ["a", "h"], "number": 1 }
	},
	{
		"name": "Queen",
		"length": 1,
		"alias": "wq",
		"position": { "letter": ["d"], "number": 1 }
	},
	{
		"name": "King",
		"length": 1,
		"alias": "wk",
		"position": { "letter": ["e"], "number": 1 }
	}
]
// class Game
function Game() {
  this.board = null;
  this.pieces = [];
  this.setPieces = function () {
      //get data
	  const blackPawn = 8;
	  const whitePawn = 8;
	  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      // loop through theirs length
      Array.from(Array(blackPawn)).forEach((value, i) => {
        const position = `${letters[i]}7`; // get position
        const piece = new Pawn(this, 'Pawn', 'bp', 'black', position, i); //new Piece
        piece.create(); //create Piece
		piece.listener();
        this.pieces.push(piece);
      })

  }
  this.init = function () {
    this.board = new Board(this);
    this.board.create(); // create Board
    this.setPieces(); // call setPieces function
    this.board.placeChessAsDefault();
  }

}