function Rook(isWhite, isKilled = false) {
  const rookImgUrl = isWhite 
  ? './img/rook_white.png' 
  : './img/rook_black.png';

  Piece.call(this, isWhite, isKilled, PieceName.ROOK, rookImgUrl)

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
    console.log(topSpots)
    return [
      ...topSpots,
      ...bottomSpots,
      ...leftSpots,
      ...rightSpots
    ]
      
    
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
