function Bishop(isWhite, isKilled = false) {
  const bigshopImgUrl = isWhite
    ? "./img/bishop_white.png"
    : "./img/bishop_black.png";

  Piece.call(this, isWhite, isKilled, PieceName.BISHOP, bigshopImgUrl);

  this.getSpotsCanMove = function (startX, startY, boxes) {
    const STEPS = Array.from(Array(ROWS).keys());

    let topLeftSpots = [];
    for (const rowIndex of STEPS) {
      const { xForSpot, yForSpot, isInValid } = getInfoForTopLeft(
        startX,
        startY,
        rowIndex
      );

      if (isInValid) {
        break;
      }

      const currentSpot = boxes[xForSpot][yForSpot];
      if (!currentSpot || currentSpot.piece) {
        break;
      }

      topLeftSpots.push({ x: xForSpot, y: yForSpot });
    }

    let topRightSpots = [];
    for (const rowIndex of STEPS) {
      const { xForSpot, yForSpot, isInValid } = getInfoForTopRight(
        startX,
        startY,
        rowIndex
      );
      if (isInValid) {
        break;
      }

      const currentSpot = boxes[xForSpot][yForSpot];
      if (!currentSpot || currentSpot.piece) {
        break;
      }

      topRightSpots.push({ x: xForSpot, y: yForSpot });
    }

    let bottomLeftSpots = [];
    for (const rowIndex of STEPS) {
      const { xForSpot, yForSpot, isInValid } = getInfoForBottomLeft(
        startX,
        startY,
        rowIndex
      );

      if (isInValid) {
        break;
      }

      const currentSpot = boxes[xForSpot][yForSpot];
      if (!currentSpot || currentSpot.piece) {
        break;
      }

      bottomLeftSpots.push({ x: xForSpot, y: yForSpot });
    }

    let bottomRightSpots = [];
    for (const rowIndex of STEPS) {
      const { xForSpot, yForSpot, isInValid } = getInfoForBottomRight(
        startX,
        startY,
        rowIndex
      );

      if (isInValid) {
        break;
      }

      const currentSpot = boxes[xForSpot][yForSpot];
      if (!currentSpot || currentSpot.piece) {
        break;
      }
      bottomRightSpots.push({ x: xForSpot, y: yForSpot });
    }

    return [
      ...topLeftSpots,
      ...topRightSpots,
      ...bottomLeftSpots,
      ...bottomRightSpots,
    ];
  };
}

function getInfoForTopLeft(startX, startY, rowIndex) {
  const xForSpot = startX - rowIndex - 1;
  const yForSpot = startY - rowIndex - 1;

  return {
    xForSpot,
    yForSpot,
    isInValid: xForSpot < 0 || yForSpot < 0,
  };
}

function getInfoForTopRight(startX, startY, rowIndex) {
  const xForSpot = startX - rowIndex - 1;
  const yForSpot = startY + rowIndex + 1;

  return {
    xForSpot,
    yForSpot,
    isInValid: xForSpot < 0 || yForSpot > ROWS - 1,
  };
}

function getInfoForBottomLeft(startX, startY, rowIndex) {
  const xForSpot = startX + rowIndex + 1;
  const yForSpot = startY - rowIndex - 1;

  return {
    xForSpot,
    yForSpot,
    isInValid: xForSpot > ROWS - 1 || yForSpot < 0,
  };
}

function getInfoForBottomRight(startX, startY, rowIndex) {
  const xForSpot = startX + rowIndex + 1;
  const yForSpot = startY + rowIndex + 1;

  return {
    xForSpot,
    yForSpot,
    isInValid: xForSpot > ROWS - 1 || yForSpot > ROWS - 1,
  };
}
