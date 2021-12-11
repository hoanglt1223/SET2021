function King(color) {
	ChessMan.call(this);
	this.setImage('king', color);

	this.statusMoved = false;

	this.moved = () => {
		this.statusMoved = true;
	}

	this.hasMoved = () => {
		return this.statusMoved;
	}

	this.getPossibleMoves = (chessmap) => {
		let x_left = this.position_X - 1;
		let x_right = this.position_X + 1;

		let y_top = this.position_Y - 1;
		let y_bottom = this.position_Y + 1;

		if (x_left < 0) x_left = 0;
		if (x_right > NUMBER_SQUARE - 1) x_right = NUMBER_SQUARE - 1;
		if (y_top < 0) y_top = 0;
		if (y_bottom > NUMBER_SQUARE - 1) y_bottom = NUMBER_SQUARE - 1;

		let possibleMovesList = [];
		for (let y = y_top; y <= y_bottom; y++) {
			for (let x = x_left; x <= x_right; x++) {
				if (x === this.position_X && y === this.position_Y) {
					continue;
				}
				if (!chessmap[y][x].havingChessman() || chessmap[y][x].getChessman().getColor() !== this.color) {
					possibleMovesList.push({
						x: x,
						y: y,
						opponent: chessmap[y][x].havingChessman(),
					})
				}
			}
		}

		return possibleMovesList;
	}

	// this.isAbleToCastling = (chessmap, source, destination) =>{
    //     if (source.getChessman().getColor() !== destination.getChessman().getColor()) {
    //         return false;
    //     }
    //     let sourceType = source.getChessman().type;
    //     let desType = destination.getChessman().type;

    //     if ((sourceType === ChessmanType.KING && desType === ChessmanType.ROOK) || (desType === ChessmanType.KING && sourceType === ChessmanType.ROOK)) {
    //         if (source.getChessman().hasMoved() || destination.getChessman().hasMoved()) {
    //             return false;
    //         }
    //         let direct = source.getPosition().x > destination.getPosition().x ? - 1 : 1;

    //         for (let x = source.getPosition().x + direct; x < destination.getPosition().x; x += 1 * direct) {
    //             if (chessmap[source.getPosition().y][x].havingChessman()) {
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }
    //     return false;
    // }

	this.castle = () => {

	}

}