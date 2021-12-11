function Knight(color) {
	ChessMan.call(this);
	this.setImage('knight', color);

  this.getPossibleMoves = (chessmap) => {
    let possibleMoves = [];
    let x = this.position_X;
    let y = this.position_Y;
    // function calculatatePossibleMoves(possibleMoves, destinationY, destinationX){
    //   if (!chessmap[destinationY][destinationX].havingChessman() || chessmap[destinationY][destinationX].getChessman().getColor() !== this.color) {
    //     possibleMoves.push({
    //         x: destinationX,
    //         y: destinationY,
    //         opponent: chessmap[destinationY][destinationX].havingChessman(),
    //     });
    //   }
    //   console.log(destinationX);
    //   console.log(chessmap);
    //   return possibleMoves;
    // }

    // calculatatePossibleMoves = (possibleMoves, y - 1, x + 2);
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

    // x + 2, y - 1
    if (x < NUMBER_SQUARE - 2 && y != 0){
      if ((!chessmap[y - 1][x + 2].havingChessman() || chessmap[y - 1][x + 2].getChessman().getColor() !== this.color)) {
        possibleMoves.push({
            x: x + 2,
            y: y - 1,
            opponent: chessmap[y - 1][x + 2].havingChessman(),
        });

      }
    }

    // x + 1, y - 2
    if (x < 7 && y > 1){
      if ((!chessmap[y - 2][x + 1].havingChessman() || chessmap[y - 2][x + 1].getChessman().getColor() !== this.color)) {
        possibleMoves.push({
            x: x + 1,
            y: y - 2,
            opponent: chessmap[y - 2][x + 1].havingChessman(),
        });

      }
    }

    // x - 1, y - 2
    if (x > 0 && y > 1){
      if ((!chessmap[y - 2][x - 1].havingChessman() || chessmap[y - 2][x - 1].getChessman().getColor() !== this.color)) {
        possibleMoves.push({
            x: x - 1,
            y: y - 2,
            opponent: chessmap[y - 2][x - 1].havingChessman(),
        });

      }
    }

    // x - 2, y - 1
    if (x > 1 && y > 0){
      if ((!chessmap[y - 1][x - 2].havingChessman() || chessmap[y - 1][x - 2].getChessman().getColor() !== this.color)) {
        possibleMoves.push({
            x: x - 2,
            y: y - 1,
            opponent: chessmap[y - 1][x - 2].havingChessman(),
        });

      }
    }

    // x - 2 && y + 1
    if (x > 1 && y > 0){
      if ((!chessmap[y + 1][x - 2].havingChessman() || chessmap[y + 1][x - 2].getChessman().getColor() !== this.color)) {
        possibleMoves.push({
            x: x - 2,
            y: y + 1,
            opponent: chessmap[y + 1][x - 2].havingChessman(),
        });

      }
    }

    // x - 1, y + 2
    if (x > 0 && y < 6){
      if ((!chessmap[y + 2][x - 1].havingChessman() || chessmap[y + 2][x - 1].getChessman().getColor() !== this.color)) {
        possibleMoves.push({
            x: x - 1,
            y: y + 2,
            opponent: chessmap[y + 2][x - 1].havingChessman(),
        });

      }
    }

    // x + 2, y + 1
    if (x < 6 && y < 7){
      if ((!chessmap[y + 1][x + 2].havingChessman() || chessmap[y + 1][x + 2].getChessman().getColor() !== this.color)) {
        possibleMoves.push({
            x: x + 2,
            y: y + 1,
            opponent: chessmap[y + 1][x + 2].havingChessman(),
        });

      }
    }

    // x + 1, y + 2
    if (x < 7 && y < 6){
      if ((!chessmap[y + 2][x + 1].havingChessman() || chessmap[y + 2][x + 1].getChessman().getColor() !== this.color)) {
        possibleMoves.push({
            x: x + 1,
            y: y + 2,
            opponent: chessmap[y + 2][x + 1].havingChessman(),
        });

      }
    }



    return possibleMoves;
  }

}