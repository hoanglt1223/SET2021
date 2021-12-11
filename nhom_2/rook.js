function Rook(color) {
	ChessMan.call(this);
	this.setImage('rook', color);

    this.statusMoved = false;

	this.moved = () => {
		this.statusMoved = true;
	}

	this.hasMoved = () => {
		return this.statusMoved;
	}
}