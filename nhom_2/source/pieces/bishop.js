function Bishop(color) {
	ChessMan.call(this);
	this.setImage('bishop', color);
	this.getPossibleMoves = (chessmap) => {
		let possibleMoves = [];
		for (let i = -1; this.position_Y + i >=0 && this.position_X + i >= 0; i--){
			if (!chessmap[this.position_Y + i][this.position_X + i].havingChessman() || chessmap[this.position_Y + i][this.position_X + i].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: this.position_X + i,
                    y: this.position_Y + i,
                    opponent: chessmap[this.position_Y + i][this.position_X + i].havingChessman(),
                });

            }
            if (chessmap[this.position_Y + i][this.position_X + i].havingChessman()) {
                break;
            }
		}

		for (let i = -1; this.position_Y + i >=0 && this.position_X - i < NUMBER_SQUARE; i--){
			if (!chessmap[this.position_Y + i][this.position_X - i].havingChessman() || chessmap[this.position_Y + i][this.position_X - i].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: this.position_X - i,
                    y: this.position_Y + i,
                    opponent: chessmap[this.position_Y + i][this.position_X - i].havingChessman(),
                });

            }
            if (chessmap[this.position_Y + i][this.position_X - i].havingChessman()) {
                break;
            }
		}

		for (let i = -1; this.position_Y - i < NUMBER_SQUARE && this.position_X - i < NUMBER_SQUARE; i--){
			if (!chessmap[this.position_Y - i][this.position_X - i].havingChessman() || chessmap[this.position_Y - i][this.position_X - i].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: this.position_X - i,
                    y: this.position_Y - i,
                    opponent: chessmap[this.position_Y - i][this.position_X - i].havingChessman(),
                });

            }
            if (chessmap[this.position_Y - i][this.position_X - i].havingChessman()) {
                break;
            }
		}

		for (let i = -1; this.position_Y - i < NUMBER_SQUARE && this.position_X + i >= 0; i--){
			if (!chessmap[this.position_Y - i][this.position_X + i].havingChessman() || chessmap[this.position_Y - i][this.position_X + i].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: this.position_X + i,
                    y: this.position_Y - i,
                    opponent: chessmap[this.position_Y - i][this.position_X + i].havingChessman(),
                });

            }
            if (chessmap[this.position_Y - i][this.position_X + i].havingChessman()) {
                break;
            }
		}
		return possibleMoves;

	}
}
