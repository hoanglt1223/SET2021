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

}

function Pawn(color) {
    ChessMan.call(this);
    let firstMove = true;
    let direct = (color === ColorType.TEAM.BLACK) ? 1 : -1;
    this.setImage('pawn', color);
    this.move = (chessmap) => {
        let validSquare = [];
        if (!chessmap[this.position_Y + direct][this.position_X].havingChessMan()) {
            validSquare.push({ x: this.position_X, y: this.position_Y + direct });
        }
        if (firstMove && !chessmap[this.position_Y + direct * 2][this.position_X].havingChessMan()) {
            validSquare.push({ x: this.position_X, y: this.position_Y + direct * 2 });

        }
        return validSquare;
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




