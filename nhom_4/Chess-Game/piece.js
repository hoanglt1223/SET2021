function Piece(game, name, alias, color, position, index) {
  // properties
  this.game = game;
  this.name = name;
  this.alias = alias;
  this.color = color;
  this.position = position; 
  this. index = index;      
  this.element = null;      //store piece element
  this.data = {};
  
  // methods
  // init piece method
  this.create = function () {
    const pieceElement = new Image(); //New Image element
    const classname = "chessboard-piece";

    // set Attribute
    pieceElement.src = `./assets/${this.alias}.png`; //set Image source
    pieceElement.classList.add(classname);

    this.element = pieceElement; // store element
  }

  // move from current square to the target square
	this.move = function (square) {
		// let old = this.square;
		// move piece into the square
		this.silentMove(square);
		// move the image into the square element
		this.moveElementTo(square);
	}

  // append this piece to square
  this.moveElementTo = function (square) {
		// append the element into the target square element
		square.info.element.appendChild(this.element);
	}

	// move in the background
	this.silentMove = function (square) {
		const piece = this;

		// set first to false
		square.piece = false;

		// change data
		square.piece = piece;
		piece.position = square.position;
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
        const square = game.board.filterSquare(current.getAttribute("data-position"));
        piece.move(square);
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

		};

		// add mousedown listener
		element.addEventListener("mousedown", mousedown);
	}
  
}

function Pawn(game, name, alias, color, position, index) {
  Piece.call(this, game, name, alias, color, position, index);
  
}

function Knight(name, alias, color, position, index) {
  Piece.call(this, name, alias, color, position, index);
}

function Bishop(name, alias, color, position, index) {
  Piece.call(this, name, alias, color, position, index);
}

function Queen(name, alias, color, position, index) {
  Piece.call(this, name, alias, color, position, index);
}

function King(name, alias, color, position, index) {
  Piece.call(this, name, alias, color, position, index);
}