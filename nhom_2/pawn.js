function Pawn(color) {
	ChessMan.call(this);
	this.setImage('pawn', color);
	this.getPossibleMoves = (chessmap) => {
		let x = this.position_X;
		let y = this.position_Y;
		let possibleMovesList = [];
		let direct = (this.getColor() === ColorType.TEAM.WHITE) ? -1 : 1;
		if (!chessmap[y + direct][x].havingChessMan()) {
			possibleMovesList.push({
				x: x,
				y: y + direct,
			});
		}
		if ((direct === -1 && y === 6) || (direct === 1 && y === 1) && !chessmap[y + 2 * direct][x].havingChessMan()) {
			possibleMovesList.push({
				x: x,
				y: y + 2 * direct,
			});
		}

			// pawn from x = 1 to x = 6
		switch(x){
			case 0:
				debugger;
				if (chessmap[y + direct][x + 1].havingChessMan() && chessmap[y + direct][x + 1].getChessman().getColor() !== this.color){
					possibleMovesList.push({
						x : x + 1,
						y : y + direct,
					})
				}	
				break;
			case 7:
				if (chessmap[y + direct][x - 1].havingChessMan() && chessmap[y + direct][x-1].getChessman().getColor() !== this.color){
					possibleMovesList.push({
						x : x - 1,
						y : y + direct,
					})
				}
				break;
			default:
				if (chessmap[y + direct][x + direct].havingChessMan() && chessmap[y + direct][x+direct].getChessman().getColor() !== this.color){
					possibleMovesList.push({
						x : x + direct,
						y : y + direct,
					})
				}
				if (chessmap[y + direct][x - direct].havingChessMan() && chessmap[y + direct][x-direct].getChessman().getColor() !== this.color){
					possibleMovesList.push({
						x : x - direct,
						y : y + direct,
					})
				}
				break;
		}
		return possibleMovesList;
	}
}