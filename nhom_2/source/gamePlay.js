// main
let chessboard = new ChessBoard();
chessboard.render();
let chessmap = chessboard.chessmap;
let resultBoard = document.getElementById("resultBoard");


function gameOver(colorWin){
    resultBoard.style.visibility = "visible";
    let newgameButton = document.getElementById("newgame_button");
    let congratulation = document.getElementById("congratulation__text");

    congratulation.innerHTML = "CONGRATULATIONS !";
    let teamwin = document.getElementById("teamwin");
    let imageTeam = teamwin.getElementsByClassName("imageTeam")[0];

    Object.assign(imageTeam, {
        src: `./assets/chess-pawn-${colorWin}.png`,
        style: `width: ${SQUARE_SIZE + 20}px;
                height: ${SQUARE_SIZE + 20}px;`
    })
    newgameButton.addEventListener("click", () => {
        chessboard.render();
        resultBoard.style.visibility = "hidden";
    })

    resultBoard.appendChild(newgameButton);
    document.body.appendChild(resultBoard);
}
