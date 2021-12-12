function Piece(game, name, alias, color, position, index) {
  // properties
  this.game = game;
  this.player = null;
  this.name = name;
  this.alias = alias;
  this.color = color;
  this.position = position;
  this.index = index;
  this.element = null; //store piece element
  this.square = null; // store square of piece

  this.isMove = false;

  // methods
  // init piece method
  this.create = function () {
    const pieceElement = new Image(); //New Image element
    const classname = "chessboard-piece";

    // set Attribute
    pieceElement.src = `./assets/${this.alias}.png`; //set Image source
    pieceElement.classList.add(classname);

    this.element = pieceElement; // store element
    this.square = this.game.board.filterSquare(this.position);
  };

  // move from current square to the target square
  this.move = function (square) {
    const old = this.square;
    // capture piece inside
    this.capture(square);
    // move piece into the square
    this.silentMove(square);
    // move the image into the square element
    this.moveElementTo(square);
    // trigger, finished moved
		this.game.moved(old, square);
    
    if (!this.isMove) {
      this.isMove = true;
    }


    // check promote if it is pawn
    if (this.name === 'Pawn') {
      this.checkPromote();
    }
  };

  // append this piece to square
  this.moveElementTo = function (square) {
    // append the element into the target square element
    square.element.appendChild(this.element);
  };

  // move in the background
  this.silentMove = function (square) {
    const piece = this;

    // set first to false
    square.piece = false;
    piece.square.piece = false;
    // change data
    square.piece = piece;
    piece.square = square;
    piece.position = square.position;
  };

  // capture enemy
  this.capture = function (square) {
    const piece = square.piece;
    // return if there is no piece inside
    if (!piece) return;
		const piecePlayer = piece.player;
		const player = this.player;

		// if element exist, remove the element
		piece.element && piece.element.remove();

		// insert into the target player dropped pieces
		piecePlayer.dropped.push(piece);
		// remove piece into the target player pieces
		piecePlayer.pieces.splice(piecePlayer.pieces.indexOf(piece), 1);
		// insert into the player eated pieces
		player.captured.push(piece);

  }

  // listen events
  this.listener = function () {
    const piece = this; // selected piece
    const element = this.element; // the image of piece
    const mousedown = function (event) {
      let current = null; // set as null a target square
      let elemBelow, droppableBelow; // squares positioning

      // move the piece towards direction
      const move = function (pageX, pageY) {
        element.style.cursor = "grabbing"; // set the cursor as grab effect
        element.style.left = pageX - element.offsetWidth / 2 + "px";
        element.style.top = pageY - element.offsetHeight / 2 + "px";
      };

      // when user mousemove
      const mousemove = function (event) {
        move(event.pageX, event.pageY); // move the piece in mouse position

        element.hidden = true; // hide the element so it will not affect searching point
        elemBelow = document.elementFromPoint(event.clientX, event.clientY); // search from point x and y
        element.hidden = false; // then show again

        if (!elemBelow) return;

        // find the closest square from the mouse
        droppableBelow = elemBelow.closest(".chessboard-square");

        // if it is not the current square
        if (current != droppableBelow) current = droppableBelow;
      };

      // when the user drop the piece
      const drop = function () {
        // remove first the mousemove event
        document.removeEventListener("mousemove", mousemove);

        // then assign styles to go back to it's position in square
        element.removeAttribute("style");

        if (!current) return false;
        const square = piece.game.board.filterSquare(
          current.getAttribute("data-position")
        );
        //move piece
        piece.player.move(piece, square);
      };

      // just setting the styles
      const setStyle = function () {
        // set the position to absolute so the image can drag anywhere on the screen
        element.style.position = "absolute";
        // set the z index to max so it will go above all elements
        element.style.zIndex = 1000;
      };

      // just sets some listeners
      const manageListener = function () {
        // drop on mouseup event
        element.onmouseup = drop;

        // disabled dragging
        element.ondragstart = function () {
          return false;
        };

        // add mousemove listener again
        document.addEventListener("mousemove", mousemove);
      };

      // declaration
      setStyle();
      manageListener();
      move(event.pageX, event.pageY);

      // get the piece possibilities,
      // then show circles to all that squares
      piece.game.board.showSquarePossibilities(piece.getPossibleMovesOnly(), true);
    };

    // add mousedown listener
    element.addEventListener("mousedown", mousedown);
  };
}
