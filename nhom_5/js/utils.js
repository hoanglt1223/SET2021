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

function getColumnSpotsCanMove(x, y, board) {
  const STEPS = Array.from(Array(ROWS - 1).keys());
  let spots = [];

  // get TOP spots
  for (const step of STEPS) {
    const nextX = x - step - 1;

    if (nextX < 0) {
      break;
    }

    if (board.checkHasPieceOnSpot(nextX, y)) {
      break;
    }

    spots.push({ x: nextX, y });
  }

  // get bottom spots
  for (const step of STEPS) {
    const nextX = x + step + 1;

    if (nextX > ROWS - 1) {
      break;
    }

    if (board.checkHasPieceOnSpot(nextX, y)) {
      break;
    }

    spots.push({ x: nextX, y });
  }

  return spots;
}

function getRowSpotsCanMove(x, y, board) {
  const STEPS = Array.from(Array(ROWS - 1).keys());
  let spots = [];

  // get LEFT spots
  for (const step of STEPS) {
    const nextY = y - step - 1;

    if (nextY < 0) {
      break;
    }

    if (board.checkHasPieceOnSpot(x, nextY)) {
      break;
    }

    spots.push({ x, y: nextY });
  }

  // get RIGHT spots
  for (const step of STEPS) {
    const nextY = y + step + 1;

    if (nextY > COLS - 1) {
      break;
    }

    if (board.checkHasPieceOnSpot(x, nextY)) {
      break;
    }

    spots.push({ x, y: nextY });
  }

  return spots;
}

function getSouthEastSpotsCanMove(x, y, board) {
  const STEPS = Array.from(Array(ROWS - 1).keys());
  let spots = [];

  // get TOP LEFT spots
  for (const step of STEPS) {
    const nextY = y - step - 1;
    const nextX = x - step - 1;

    if (nextY < 0 || nextX < 0) {
      break;
    }

    if (board.checkHasPieceOnSpot(nextX, nextY)) {
      break;
    }

    spots.push({ x: nextX, y: nextY });
  }

  // get BOTTOM RIGHT spots
  for (const step of STEPS) {
    const nextY = y + step + 1;
    const nextX = x + step + 1;

    if (nextY > COLS - 1 || nextX > ROWS - 1) {
      break;
    }

    if (board.checkHasPieceOnSpot(nextX, nextY)) {
      break;
    }

    spots.push({ x: nextX, y: nextY });
  }

  return spots;
}

function getNorthEastSpotsCanMove(x, y, board) {
  const STEPS = Array.from(Array(ROWS - 1).keys());
  let spots = [];

  // get TOP RIGHT spots
  for (const step of STEPS) {
    const nextY = y + step + 1;
    const nextX = x - step - 1;

    if (nextY > COLS - 1 || nextX < 0) {
      break;
    }

    if (board.checkHasPieceOnSpot(nextX, nextY)) {
      break;
    }

    spots.push({ x: nextX, y: nextY });
  }

  // get BOTTOM LEFT spots
  for (const step of STEPS) {
    const nextY = y - step - 1;
    const nextX = x + step + 1;

    if (nextY < 0 || nextX > ROWS - 1) {
      break;
    }

    if (board.checkHasPieceOnSpot(nextX, nextY)) {
      break;
    }

    spots.push({ x: nextX, y: nextY });
  }

  return spots;
}
