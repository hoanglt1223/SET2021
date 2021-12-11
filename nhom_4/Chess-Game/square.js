// Chess Square
function Square(boardPosition, position, role) {
  this.boardPosition = boardPosition; // square board matrix position
  this.position = position; // square position
  this.role = role; // square role
  this.isMove = false; // is move before
  this.piece = null;
  this.element = null

  // create Square
  this.create = function () {
    // render
    const squareElement = document.createElement("div");
    const classname = "chessboard-square";

    squareElement.classList.add(classname);
    squareElement.setAttribute("role", this.role); // set role
    squareElement.setAttribute("data-position", this.position); // set pos

    chessboardParent.appendChild(squareElement);
    this.element = squareElement; // store
  };

  // set classname
  this.setAs = function (classname, bool, ui) {
    const element = this.element;

    this.isMove = classname == "move" && bool; // if can possibly move the piece

    if (!ui) return;
    // add class if true and remove if false
    bool
      ? element.classList.add(classname)
      : element.classList.remove(classname);
  };
}
