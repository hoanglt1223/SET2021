const chessboardParent = document.getElementById("chessboard");
// class Game
function Game() {
  this.board = null;
  this.pieces = [];
  this.setPieces = function () {
      //default position
	  const bpPosition = ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"];
	  const wpPosition = ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"];
	  const bnPosition = ["b8", "g8"];
	  const wnPosition = ["b1", "g1"];
	  const brPosition = ["a8", "h8"];
	  const wrPosition = ["a1", "h1"];
	  const bbPosition = ["c8", "f8"];
	  const wbPosition = ["c1", "f1"];
      // loop through theirs length
	  // blackPawn first
      bpPosition.forEach((value, i) => {
        const piece = new Pawn(this, 'Pawn', 'bp', 'black', value, i); //new Piece
        piece.create(); //create Piece
		piece.listener();
        this.pieces.push(piece);
      });
	  // whitePawn
	  wpPosition.forEach((value, i) => {
        const piece = new Pawn(this, 'Pawn', 'wp', 'white', value, i); //new Piece
        piece.create(); //create Piece
		piece.listener();
        this.pieces.push(piece);
      })
	  // black rook
	  brPosition.forEach((value, i) => {
        const piece = new Rook(this, 'Rook', 'br', 'black', value, i); //new Piece
        piece.create(); //create Piece
		piece.listener();
        this.pieces.push(piece);
      });
	  // white rook
	  wrPosition.forEach((value, i) => {
        const piece = new Rook(this, 'Rook', 'wr', 'white', value, i); //new Piece
        piece.create(); //create Piece
		piece.listener();
        this.pieces.push(piece);
      });
	  // black knight
	  bnPosition.forEach((value, i) => {
        const piece = new Knight(this, 'Knight', 'bn', 'black', value, i); //new Piece
        piece.create(); //create Piece
		piece.listener();
        this.pieces.push(piece);
      });
	  // white knight
	  wnPosition.forEach((value, i) => {
        const piece = new Knight(this, 'Knight', 'wn', 'white', value, i); //new Piece
        piece.create(); //create Piece
		piece.listener();
        this.pieces.push(piece);
      });
	  // black bishop
	  bbPosition.forEach((value, i) => {
        const piece = new Bishop(this, 'Bishop', 'bb', 'black', value, i); //new Piece
        piece.create(); //create Piece
		piece.listener();
        this.pieces.push(piece);
      });
	  // white bishop
	  wbPosition.forEach((value, i) => {
        const piece = new Bishop(this, 'Bishop', 'wb', 'white', value, i); //new Piece
        piece.create(); //create Piece
		piece.listener();
        this.pieces.push(piece);
      });
	  // black queen
        const bqueen = new Queen(this, 'Queen', 'bq', 'black', 'd8', 1); //new Piece
        bqueen.create(); //create Piece
		bqueen.listener();
        this.pieces.push(bqueen);
	  // white queen
        const wqueen = new Queen(this, 'Queen', 'wq', 'white', 'd1', 1); //new Piece
        wqueen.create(); //create Piece
		wqueen.listener();
        this.pieces.push(wqueen);
	  // black king
		const bking = new King(this, 'King', 'bk', 'black', 'e8', 1); //new Piece
		bking.create(); //create Piece
		bking.listener();
		this.pieces.push(bking);
	  // white king
	  	const wking = new King(this, 'King', 'wk', 'white', 'e1', 1); //new Piece
		wking.create(); //create Piece
		wking.listener();
		this.pieces.push(wking);
	  
  }
  this.init = function () {
    this.board = new Board(this);
    this.board.create(); // create Board
    this.setPieces(); // call setPieces function
    this.board.placeChessAsDefault();
  }

}