function Queen(color) { 
	ChessMan.call(this); 
	this.setImage('queen', color); 
  this.directions = [1, -1, 0]; 
 
  this.getPossibleMoves = (chessmap) => { 
      // vertical 
			let possibleMovesList = this.calculatePossibleMoves(chessmap)
      return possibleMovesList; 
  } 
 
  this.calculatePossibleMoves = (chessmap) =>{ 
		let x = this.position_X; 
    let y = this.position_Y; 
		let moveList = [];
		let firstLoop = true;
		// debugger;
		chessmap.forEach(function (row, index1){
			row.forEach(function (square, index2){
					// vertical
					if (!square.havingChessman()){
						if(square.position_X === x && square.position_Y !== y){
							moveList.push({ 
								x: square.position_X,
								y: square.position_Y,
								opponent: square.havingChessman(),
							}) 
						}
						// horizental
						if(square.position_X !== x && square.position_Y === y){
							moveList.push({ 
								x: square.position_X,
								y: square.position_Y,
								opponent: square.havingChessman(),
							}) 
						}
						// diagonol
						if (x == y){
							if((square.position_Y === square.position_X  ) && (square.position_Y != y)){
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