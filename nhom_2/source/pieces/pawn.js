function Pawn(color) {
    ChessMan.call(this);
    this.setImage('pawn', color);

    this.promotePawn = () => {
        return new Queen (this.color);
    }

    this.getPossibleMoves = (chessmap) => {
        let x = this.position_X;
        let y = this.position_Y;
        let possibleMovesList = [];
        let direct = (this.getColor() === ColorType.TEAM.WHITE) ? -1 : 1;
        if((y+ direct >= 0 && y + direct <= NUMBER_SQUARE - 1)){
            if (!chessmap[y + direct][x].havingChessman()) {
                possibleMovesList.push({
                    x: x,
                    y: y + direct,
                    opponent: false,
                });
                if (((direct === -1 && y === 6) || (direct === 1 && y === 1)) && !chessmap[y + 2 * direct][x].havingChessman()) {
                    possibleMovesList.push({
                        x: x,
                        y: y + 2 * direct,
                        opponent: false,
        
                    });
                }
            }
    

            if (((direct === -1 && y === 6) || (direct === 1 && y === 1)) && !chessmap[y + 2 * direct][x].havingChessman() && !chessmap[y + direct][x].havingChessman()) {
                possibleMovesList.push({
                    x: x,
                    y: y + 2 * direct,
                    opponent: false,
    
                });
            }
    
            // pawn from x = 1 to x = 6 
            switch (x) {
                case 0:
                    if (chessmap[y + direct][x + 1].havingChessman() && chessmap[y + direct][x + 1].getChessman().getColor() !== this.color) {
                        possibleMovesList.push({
                            x: x + 1,
                            y: y + direct,
                            opponent: true,
    
                        })
                    }
                    break;
                case 7:
                    if (chessmap[y + direct][x - 1].havingChessman() && chessmap[y + direct][x - 1].getChessman().getColor() !== this.color) {
                        possibleMovesList.push({
                            x: x - 1,
                            y: y + direct,
                            opponent: true,
    
                        })
                    }
                    break;
                default:
                    if (chessmap[y + direct][x + direct].havingChessman() && chessmap[y + direct][x + direct].getChessman().getColor() !== this.color) {
                        possibleMovesList.push({
                            x: x + direct,
                            y: y + direct,
                            opponent: true,
    
                        })
                    }
                    if (chessmap[y + direct][x - direct].havingChessman() && chessmap[y + direct][x - direct].getChessman().getColor() !== this.color) {
                        possibleMovesList.push({
                            x: x - direct,
                            y: y + direct,
                            opponent: true,
    
                        })
                    }
                    break;
            }
        }
        return possibleMovesList;
    }
}