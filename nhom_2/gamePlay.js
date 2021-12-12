// main
let chessboard = new ChessBoard();
chessboard.render();
let resultBoard = document.getElementById("resultBoard");


function gameOver(colorWin){
    resultBoard.style.visibility = "visible";
    let newgameButton = document.getElementById("newgame_button");
    let congratulation = document.getElementById("congratulation");

    congratulation.innerHTML = "Congratulation !";
    let teamwin = document.getElementById("teamwin");
    teamwin.innerHTML = colorWin;
    newgameButton.addEventListener("click", () => {
        chessboard.render();
        resultBoard.style.display = "none";
    })

    resultBoard.appendChild(newgameButton);
    document.body.appendChild(resultBoard);
}

