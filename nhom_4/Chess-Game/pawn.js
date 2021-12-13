// Pawn class
function Pawn(game, name, alias, color, position, index) {
    Piece.call(this, game, name, alias, color, position, index);
    this.isPromote = false;

    this.getPossibilities = function() {
        const piece = this; // the current piece
        const square = this.square; // the current square where piece located
        const player = this.player; // the turning player
        const role = player.role; // player role values (white, black)
        const game = this.game; // the game
        const gameboard = game.board; // gameboard
        const boardData = gameboard.data; // and the board data
        const pos = { moves: [], enemies: [] }; // possibilities object
        let { x, y } = square.boardPosition; // square position on board

        // will check if the piece inside square is enemy or not
        // then if it is push it into enemies pos
        const testEnemy = function(y, x) {
            // check if the position is valid
            if (!gameboard.isValidPos(y, x)) return false;

            const square = boardData[y][x]; // target square
            const piece = square.piece; // piece inside the target square

            if (!square || !piece) return false;
            if (piece.player.role == role) return false;

            pos.enemies.push(square);
        };

        //add comment later
        const testSquare = function(y, x) {
            // check if the position is valid
            if (!gameboard.isValidPos(y, x)) return false;

            const square = boardData[y][x]; // target square
            const sqPiece = square.piece; // piece inside the target square

            if (!square) return false;

            if (!sqPiece) {
                pos.moves.push(square);
                return true;
            }
        };

        // test directions and check how long the piece can be move from it's position
        // yChange / xChange = y/x need to change
        // yOperation / xOperation = what operation, true = addition (+) while false = subtration (-)
        // until (number), how many squares need to check (max = 8)
        const testLoopSquare = function(yChange, yOperation, xChange, xOperation, until = 8) {
            let foundPiece = false;
            Array.from(Array(until)).forEach((value, i) => {
                // piece position start from 1 -> 8 but Array index start from 0 -> 7
                // so increase index 1 unit
                const index = i + 1;
                const ny = yChange ? (yOperation ? y + index : y - index) : y;
                const nx = xChange ? (xOperation ? x + index : x - index) : x;

                // check if the position is valid
                if (!gameboard.isValidPos(ny, nx)) return false;

                const square = boardData[ny][nx]; // target square
                const sqPiece = square.piece; // piece inside the target square

                // check not found piece before
                if (!foundPiece) {
                    if (square) {
                        // check found piece
                        if (sqPiece) {
                            // test if there is enemy
                            testEnemy(ny, nx);
                            foundPiece = true; // set found piece to exit forEach loop
                        } else {
                            pos.moves.push(square);
                        }
                    }
                }

            })
        }

        // move pattern
        const movePattern = function() {
            // check if pawn can fastpawn then if it is, increment 1 to it's possible move
            console.log('isMove ', piece.isMove)
            let until = !piece.isMove ? 3 : 2;
            // loop through until values
            for (let i = 1; i < until; i++) {
                if (role == "white") {
                    // if it is white, subrtact current i value
                    // so it moves from bottom to top
                    if (!testSquare(y - i, x)) break;
                } else {
                    // if it is black, add current i value
                    // so it moves from top to bottom
                    if (!testSquare(y + i, x)) break;
                }
            }

            // enemy detection
            if (role == "white") {
                // (white) check the top left and right square from it's position
                testEnemy(y - 1, x - 1);
                testEnemy(y - 1, x + 1);
            } else {
                // (black) check the bottom left and right square from it's position
                testEnemy(y + 1, x - 1);
                testEnemy(y + 1, x + 1);
            }
        };

        // move pattern.
        const promoteMovePattern = function() {
            // Top
            testLoopSquare(true, false, false, false);
            // Bottom
            testLoopSquare(true, true, false, false);
            // Left
            testLoopSquare(false, false, true, false);
            // Right
            testLoopSquare(false, false, true, true);
            // Top left
            testLoopSquare(true, false, true, false);
            // Bottom Left
            testLoopSquare(true, true, true, false);
            // Top Right
            testLoopSquare(true, false, true, true);
            // Bottom Right
            testLoopSquare(true, true, true, true);
        };

        // call pattern.
        if (!piece.isPromote) {
            movePattern();
        } else {
            console.log('hihi')
            promoteMovePattern();
        }

        return pos;
    };

    this.getPossibleMovesOnly = function() {
        let { moves, enemies } = this.getPossibilities();
        const game = this.game;

        game.board.resetSquares();
        return moves.length || enemies.length ? { moves, enemies } :
            false;
    };

    // check if pawn is qualified to promote
    this.checkPromote = function() {
        const piece = this;
        // check if piece is at the end of board and qualified to promote
        if (piece.color === "white") {
            if (piece.position[1] == '8') {
                piece.promote();
            }
        } else {
            if (piece.position[1] == '1') {
                piece.promote();
            }
        }
    }

    // promote Pawn
    this.promote = function() {
        const piece = this;
        // change properties
        piece.name = 'Queen';
        piece.alias = piece.color === 'white' ? 'wq' : 'bq';
        piece.element.remove(); // remove element
        piece.create(); // then create new Image and append to Square
        piece.listener(); // cause listener initialize base on old element so it need to replace
        piece.square.element.appendChild(piece.element);
        piece.isPromote = true;
    }

}