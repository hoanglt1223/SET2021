const GAME_STATE = {
    NEWGAME: 0,
    PLAYING: 1,
    GAMEOVER: 2,
}


const ColorType = {
    BACKGROUND: {
        WHITE: "#f3ebd7",
        BLACK: "#a37754",
    },
    HOVER: "#512F26",
    SELECT: "#B45927",
    TEAM:{
        WHITE: "white",
        BLACK: "black",
    },
    POSSIBLE_MOVE : "#2B933E",
    POSSIBLE_MOVE_OPPONENT : "#CCB717",
    CHECKMATE : "#BC243C",
    CHECKMATED : "#9B2335",
}

const ChessmanType = {
    KING: "king",
    PAWN: "pawn",
    QUEEN: "queen",
    ROOK: "rook",
    KNIGHT: "knight",
    BISHOP: "bishop",
}

const NUMBER_SQUARE = 8;
const SQUARE_SIZE = 80;