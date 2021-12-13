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

	this.isCheckmated = false;

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

	this.checkCheckmated = (chessmap) => {
		let x = this.position_X;
		let y = this.position_Y;
		let color = this.color;
		let isCheckmated = false;
		chessmap.forEach(function (row){
			let possibleMoves = [];
			row.forEach(function (square){
				let chessman = square.getChessman();
				if(chessman !== null){
					if (chessman.color !== color){
						possibleMoves = chessman.getPossibleMoves(chessmap);
						possibleMoves.forEach( (move) => {
							if(move.x === x && move.y === y){
								isCheckmated = true;
							}
						})
					}
				}
			});
		});
		this.isCheckmated = isCheckmated;
		return isCheckmated
	}

}