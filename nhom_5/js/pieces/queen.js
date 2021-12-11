function Queen(isWhite, isKilled = false) {
  const queenImgUrl = isWhite ? './img/queen_white.png' :
    './img/queen_black.png'

  Piece.call(this, isWhite, isKilled, PieceName.QUEEN, queenImgUrl)

  this.getSpotsCanMove = function (startX, startY, boxes) {
    const STEPS = Array.from(Array(ROWS).keys());
  
    let topSpots = [];
    for (const rowIndex of STEPS) {
      const { xForSpot, yForSpot, isInValid } = getInfoTop(
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

      topSpots.push({ x: xForSpot, y: yForSpot });
    }

    let bottomSpots = [];
    for (const rowIndex of STEPS) {
      const { xForSpot, yForSpot, isInValid } = getInfoBottom(
        startX, 
        startY, 
        rowIndex
      );

      if(isInValid) {
        break;
      }

      const currentSpot = boxes[xForSpot][yForSpot];
      if (!currentSpot || currentSpot.piece) {
        break;
      }

      bottomSpots.push({ x: xForSpot, y: yForSpot });
    }

    let rightSpots = [];
    for (const rowIndex of STEPS) {
      const { xForSpot, yForSpot, isInValid } = getInfoRight(
        startX, 
        startY, 
        rowIndex
      );

      if(isInValid) {
        break;
      }

      const currentSpot = boxes[xForSpot][yForSpot];
      if (!currentSpot || currentSpot.piece) {
        break;
      }

      rightSpots.push({ x: xForSpot, y: yForSpot });
    }

    let leftSpots = [];
    for (const rowIndex of STEPS) {
      const { xForSpot, yForSpot, isInValid } = getInfoLeft(
        startX, 
        startY, 
        rowIndex
      );

      if(isInValid) {
        break;
      }

      const currentSpot = boxes[xForSpot][yForSpot];
      if (!currentSpot || currentSpot.piece) {
        break;
      }

      leftSpots.push({ x: xForSpot, y: yForSpot });
    }

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
      ...topSpots,
      ...bottomSpots,
      ...leftSpots,
      ...rightSpots,
      ...topLeftSpots,
      ...topRightSpots,
      ...bottomLeftSpots,
      ...bottomRightSpots,
    ];
  }
}

function getInfoTop(startX, startY, rowIndex) {
  const xForSpot = startX - rowIndex - 1
  const yForSpot = startY

  return { 
    xForSpot,
    yForSpot,
    isInValid: xForSpot < 0
  }
}

function getInfoBottom(startX, startY, rowIndex) {
  const xForSpot = startX + rowIndex + 1 
  const yForSpot = startY

  return { 
    xForSpot,
    yForSpot,
    isInValid: xForSpot > ROWS - 1
  }
}

function getInfoLeft(startX, startY, rowIndex) {
  const xForSpot = startX 
  const yForSpot = startY - rowIndex - 1

  return { 
    xForSpot,
    yForSpot,
    isInValid: yForSpot < 0
  }
}

function getInfoRight(startX, startY, rowIndex) {
  const xForSpot = startX 
  const yForSpot = startY + rowIndex + 1

  return { 
    xForSpot,
    yForSpot,
    isInValid: yForSpot > ROWS - 1
  }
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