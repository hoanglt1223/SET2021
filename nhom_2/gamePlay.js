// main
let chessboard = new ChessBoard();
chessboard.render();
let resultBoard = document.getElementById("resultBoard");


function gameOver(colorWin){
    resultBoard.style.visibility = "visible";
    let newgameButton = document.getElementById("newgame_button");
    let congratulation = document.getElementById("congratulation__text");

    congratulation.innerHTML = "Congratulation !";
    let teamwin = document.getElementById("teamwin");
    let colorTeam = teamwin.getElementsByClassName("colorTeam")[0];
    let imageTeam = teamwin.getElementsByClassName("imageTeam")[0];

    colorTeam.innerHTML = colorWin.toUpperCase();
    Object.assign(imageTeam, {
        src: `./assets/chess-pawn-${colorWin}.png`,
        style: `width: 80px;
                height: 80px;`
    })
    newgameButton.addEventListener("click", () => {
        chessboard.render();
        resultBoard.style.display = "none";
    })

    resultBoard.appendChild(newgameButton);
    document.body.appendChild(resultBoard);
}

