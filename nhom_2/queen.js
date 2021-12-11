function Queen(color) {
	ChessMan.call(this);
	this.setImage('queen', color);
	this.directions = [1, -1, 0];

	this.getPossibleMoves = (chessmap) => {
		// // vertical 
		// let possibleMovesList = this.calculatePossibleMoves(chessmap)
		let  possibleMoves = [];

		// rook
		for (let y = this.position_Y - 1; y >= 0; y--) {
            if (!chessmap[y][this.position_X].havingChessman() || chessmap[y][this.position_X].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: this.position_X,
                    y: y,
                    opponent: chessmap[y][this.position_X].havingChessman(),
                });

            }
            if (chessmap[y][this.position_X].havingChessman()) {
                break;
            }
        }

        for (let y = this.position_Y + 1; y < NUMBER_SQUARE; y++) {
            if (!chessmap[y][this.position_X].havingChessman() || chessmap[y][this.position_X].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: this.position_X,
                    y: y,
                    opponent: chessmap[y][this.position_X].havingChessman(),
                });

            }
            if (chessmap[y][this.position_X].havingChessman()) {
                break;
            }
        }

        for (let x = this.position_X - 1; x >= 0; x--) {
            if (!chessmap[this.position_Y][x].havingChessman() || chessmap[this.position_Y][x].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: x,
                    y: this.position_Y,
                    opponent: chessmap[this.position_Y][x].havingChessman(),
                });
            }
            if (chessmap[this.position_Y][x].havingChessman()) {
                break;
            }
        }

        for (let x = this.position_X + 1; x < NUMBER_SQUARE; x++) {
            if (!chessmap[this.position_Y][x].havingChessman() || chessmap[this.position_Y][x].getChessman().getColor() !== this.color) {
                possibleMoves.push({
                    x: x,
                    y: this.position_Y,
                    opponent: chessmap[this.position_Y][x].havingChessman(),
                });

            }
            if (chessmap[this.position_Y][x].havingChessman()) {
                break;
            }
        }

		// bishop
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

	this.calculatePossibleMoves = (chessmap) => {
		let x = this.position_X;
		let y = this.position_Y;
		let moveList = [];
		let firstLoop = true;
		// debugger;
		chessmap.forEach(function (row, index1) {
			row.forEach(function (square, index2) {
				// vertical
				if (!square.havingChessman()) {
					if (square.position_X === x && square.position_Y !== y) {
						moveList.push({
							x: square.position_X,
							y: square.position_Y,
							opponent: square.havingChessman(),
						})
					}
					// horizental
					if (square.position_X !== x && square.position_Y === y) {
						moveList.push({
							x: square.position_X,
							y: square.position_Y,
							opponent: square.havingChessman(),
						})
					}
					// diagonol
					if (x == y) {
						if ((square.position_Y === square.position_X) && (square.position_Y != y)) {
							moveList.push({
								x: square.position_X,
								y: square.position_Y,
								opponent: square.havingChessman(),
							})
						}
					}
				}
				// if (x > y){
				// 	if(square.position_Y - square.position_X){
				// 		moveList.push({ 
				// 			x: square.position_X,
				// 			y: square.position_Y,
				// 			opponent: false,
				// 		})
				// 	}
				// }

			})
		})
		return moveList
	}

} 