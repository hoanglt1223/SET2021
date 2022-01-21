// Chess Square
function Square(boardPosition, position, role) {
  this.info = {
    boardPosition, // square board position
    position, // square position
    role, // square role
  };
  this.piece = null;

  // create Square
	this.create = function () { // render
		const squareElement = document.createElement("div");
		const classname = "chessboard-square"; 

		squareElement.classList.add(classname);
		squareElement.setAttribute("role", this.info.role); // set role
		squareElement.setAttribute("data-position", this.info.position); // set pos

		chessboardParent.appendChild(squareElement);
		this.info.element = squareElement; // store
	}
}