function ChessMan() {
  const CHESSMAN_SIZE = "72px";
  this.image = document.createElement("img");
  this.image.style.width = CHESSMAN_SIZE;
  this.image.style.height = CHESSMAN_SIZE;
  this.position_X;
  this.position_Y;
  this.color;
  // set
  this.setImage = (type, color) => {
      this.image.src = `/assets/chess-${type}-${color}.png`;
      this.color = color;
  }

  this.setPosition = (posX, posY) => {
      this.position_X = posX;
      this.position_Y = posY;
  }

  // get
  this.getImage = () => {
      return this.image;
  }

  this.getColor = () => {
      return this.color;
  }

  this.getPossibleColor = (chessmap, x, y) =>{
    if(chessmap[y][x].chessman == null){
      chessmap[y][x].getTile().style.backgroundColor = ColorType.POSSIBLE_MOVE;
      chessmap[y][x].isSuggested = true;
    }
  }
}

function Pawn(color) {
  ChessMan.call(this);
  this.setImage('pawn', color);
  this.showPossibleMoves = (chessmap) =>{
    let x = this.position_X;
    let y = this.position_Y;
    let direct = (this.getColor() == ColorType.TEAM.WHITE) ? "up" : "down";
    if (direct == "up"){
      if (y == 6){
        this.getPossibleColor(chessmap, x, y - 1);
        this.getPossibleColor(chessmap, x, y - 2);
      } else {
      this.getPossibleColor(chessmap, x, y - 1);
      }
    } else {
      if (y == 1){
        this.getPossibleColor(chessmap, x, y + 1);
        this.getPossibleColor(chessmap, x, y + 2);
      } else {
        this.getPossibleColor(chessmap, x, y + 1);
      }
    }

  }
}

function Bishop(color) {
  ChessMan.call(this);
  this.setImage('bishop', color);
}

function King(color) {
  ChessMan.call(this);
  this.setImage('king', color);
}

function Queen(color) {
  ChessMan.call(this);
  this.setImage('queen', color);
}

function Rook(color) {
  ChessMan.call(this);
  this.setImage('rook', color);
}

function Knight(color) {
  ChessMan.call(this);
  this.setImage('knight', color);
}




