function resetCanMovesStyle() {
  const squareElements = document.getElementsByClassName("square--can-move");
  const pieceSelectedElements =
    document.getElementsByClassName("piece--selected");

  Array.from(squareElements).forEach((element) => {
    element.classList.remove("square--can-move");
  });

  Array.from(pieceSelectedElements).forEach((element) => {
    element.classList.remove("piece--selected");
  });
}
