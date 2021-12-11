function Player(game, username, role) {
    this.game = game;
    this.username = username;
    this.role = role;
    this.isTurn = false;
    this.isWinner = false;
    this.pieces = [];
}