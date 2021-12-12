// main
let chessboard = new ChessBoard();
chessboard.render();
let resultBoard = document.getElementById("resultBoard");
resultBoard.style.display = "none";


function gameOver(colorWin){
    resultBoard.style.display ="flex"
    let newgameButton = document.getElementById("newgame_button");
    let congratulation = document.getElementById("congratulation");

    congratulation.innerHTML = "Congratulation !";
    debugger;
    let teamWin = document.getElementById("teamwin");
    teamWin.innerHTML = colorWin;
    newgameButton.addEventListener("click", () => {
        chessboard.render();
        resultBoard.style.display = "none";
    })

    resultBoard.appendChild(newgameButton);
    document.body.appendChild(resultBoard);
}

