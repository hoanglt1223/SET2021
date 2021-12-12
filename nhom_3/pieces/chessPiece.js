function ChessPiece(name, position, url, key) {
  this.name = name;
  this.position = position;
  this.url = url;
  this.key = key;
  this.setPiece = function () {
    const square = document.getElementById(this.position);
    square.addEventListener("click", () => {
      if (!this.isEmpty(this.position)) {
        this.isChosen(this.position);
        this.recommendMoves(this.position);
        console.log("khi click", this);
      }
    });
  };
  this.isChosen = function (position) {
    console.log("chosen");
    setDataToLocal("isMove", false);
    this.isNotChosen();
    document.getElementById(position).classList.add("chosen");
  };
  this.isNotChosen = function () {
    const squares = document.querySelectorAll(`.square`);
    squares.forEach((square) => square.classList.remove("chosen"));
    squares.forEach((square) => square.classList.remove("recommend"));
  };
  this.recommendMoves = function () {};
  this.isEmpty = function (position) {
    if (document.getElementById(position).firstChild.src === link) return true;
  };

  this.setPosition = function (position) {
    this.position = position;
    console.log(this.position);
    console.log(this);
  };
}
