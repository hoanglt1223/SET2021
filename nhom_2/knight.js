function Knight(color) {
	ChessMan.call(this);
	this.setImage('knight', color);

 // x + 2, y +1
 // x + 1, y + 2
 // x - 2, y + 1
 // x - 1, y + 2
 // x + 2, y - 1
 // x + 1, y - 2
 // x - 2, y - 1
 // x - 1, y - 2
  this.getPossibleMoves = (chessmap) => {
    let possibleMoves = [];
    let x = this.position_X;
    let y = this.position_Y;
    debugger;
    function calculatatePossibleMoves(possibleMoves, destinationY, destinationX){
      if (!chessmap[destinationY][destinationX].havingChessman() || chessmap[destinationY][destinationX].getChessman().getColor() !== this.color) {
        possibleMoves.push({
            x: destinationX,
            y: destinationY,
            opponent: chessmap[destinationY][destinationX].havingChessman(),
        });
      }
      console.log(destinationX);
      console.log(chessmap);
      return possibleMoves;
    }

    // if (!chessmap[y-1][x+2].havingChessman() || chessmap[y-1][x+2].getChessman().getColor() !== this.color) {
    //   possibleMoves.push({
    //       x: x+2,
    //       y: y-1,
    //       opponent: chessmap[y-1][x+2].havingChessman(),
    //   });

    // }

    calculatatePossibleMoves = (possibleMoves, y - 1, x + 2);
    // calculatatePossibleMoves = (possibleMoves, chessmap, y - 2, x + 1);
    // this.calculatatePossibleMoves = (chessmap, y, x);
    // this.calculatatePossibleMoves = (chessmap, y, x);
    // this.calculatatePossibleMoves = (chessmap, y, x);
    // this.calculatatePossibleMoves = (chessmap, y, x);
    // this.calculatatePossibleMoves = (chessmap, y, x);
    // this.calculatatePossibleMoves = (chessmap, y, x);
    // if (!chessmap[y][x].havingChessman() || chessmap[y][x].getChessman().getColor() !== this.color) {
    //   possibleMoves.push({
    //       x: x,
    //       y: y,
    //       opponent: chessmap[y][x].havingChessman(),
    //   });

    // }
    console.log(possibleMoves);
    return possibleMoves;
  }


  // this.calculatatePossibleMoves = (possibleMoves, chessmap, y, x) => {
  //   debugger;
  //   if (!chessmap[y][x].havingChessman() || chessmap[y][x].getChessman().getColor() !== this.color) {
  //     possibleMoves.push({
  //         x: x,
  //         y: y,
  //         opponent: chessmap[y][x].havingChessman(),
  //     });

  //   }

  //   return possibleMoves;
  // }
  

}