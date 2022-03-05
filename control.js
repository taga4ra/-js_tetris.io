"use strict";
// 1行目に記載している 'use strict' は削除しないでください

function generateCell() {
  const cells = [];
  for (let col = 0; col < config.tableHeight + config.wallThick; col++) {
    let tmp_row = [];
    for (let row = 0; row < config.tableWidth + config.wallThick * 2; row++) {
      tmp_row.push({
        isBlock: false,
        isWall: false,
        color: config.tableBackground,
      });
      if (row === 0 || row === config.tableWidth + config.wallThick * 2 - 1) {
        tmp_row[row].isWall = true;
      }
    }
    if (col === config.tableHeight + config.wallThick - 1) {
      tmp_row.map((e) => (e.isWall = true));
    }

    cells.push(tmp_row);
  }
  return cells;
}

function getRandomMinoType() {
  const minoType = Object.keys(config.minoTypes);
  return minoType[Math.floor(Math.random() * minoType.length)];
}

function getRandomMinoColor() {
  return config.minoColors[Math.floor(Math.random() * config.minoColors.length)];
}

function getUserInput() {
  window.addEventListener(
    "keydown",
    function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      switch (event.key) {
        case "ArrowDown":
          console.log("down");
          cells.mino.moveDown();
          break;
        case "ArrowUp":
          console.log("up");
          cells.mino.rotateCount++;
          break;
        case "ArrowLeft":
          console.log("left");
          cells.mino.moveLeft();
          break;
        case "ArrowRight":
          console.log("right");
          cells.mino.moveRight();
          break;
        case "q":
          console.log("quit");
          location.reload();
          break;
        case "r":
          console.log("reset");
          location.reload();
          break;
        default:
          console.log("other");
        // return; // Quit when this doesn't handle the key event.
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    },
    true
  );
}

function getNowMino() {
  const shape = config.minoTypes[cells.mino.minoType];
  return cells.mino.rotate(shape);
}

function isValidPos(mino, posY, posX) {
  return (
    0 + config.wallThick <= posX &&
    posX + mino[0].length - 1 < cells.showCells[0].length - config.wallThick &&
    0 <= posY &&
    posY + mino.length - 1 < cells.showCells.length - config.wallThick
  );
}

function isMovable(futureY, futureX) {
  const mino = getNowMino();
  console.log("mino:", mino);

  if (isValidPos(mino, futureY, futureX)) {
    for (let col = 0; col < mino.length; col++) {
      for (let row = 0; row < mino[col].length; row++) {
        if (
          mino[col][row] === true &&
          (cells.fixedCells[futureY + col][futureX + row].isBlock ||
            cells.fixedCells[futureY + col][futureX + row].isWall)
        ) {
          console.log("mino colide");
          return false;
        }
      }
    }
    return true;
  }
}

function minoMoveDown() {
  if (cells.mino.isMovable(cells.minoPosY + 1, cells.minoPosX)) {
    cells.minoPosY++;
    showMino();
  } else {
    cells.mino.put();
    cells.mino.reset();
  }
}

function minoMoveLeft() {
  if (cells.mino.isMovable(cells.minoPosY, cells.minoPosX - 1)) {
    cells.minoPosX--;
  }
}

function minoMoveRight() {
  if (cells.mino.isMovable(cells.minoPosY, cells.minoPosX + 1)) {
    cells.minoPosX++;
  }
}

function rotateMino(mino) {
  cells.mino.rotateCount %= 4;
  for (let r = 0; r < cells.mino.rotateCount; r++) {
    // rotation
    mino = transpose(mino);
    mino = mino.map((arr) => arr.reverse());
  }
  return mino;
}

function transpose(arr2d) {
  return arr2d[0].map((_, col) => arr2d.map((row) => row[col]));
}

function showMino() {
  const mino = getNowMino();
  mino.forEach((_, col) =>
    _.forEach((e, row) => {
      if (e === true) {
        cells.showCells[cells.minoPosY + col][cells.minoPosX + row].isBlock = true;
        cells.showCells[cells.minoPosY + col][cells.minoPosX + row].color = cells.mino.color;
      }
    })
  );
}

function putMino() {
  console.log("put mino");

  const mino = getNowMino();
  mino.forEach((_, col) =>
    _.forEach((e, row) => {
      if (e === true) {
        cells.fixedCells[cells.minoPosY + col][cells.minoPosX + row].isBlock = true;
        cells.fixedCells[cells.minoPosY + col][cells.minoPosX + row].color = cells.mino.color;
      }
    })
  );
  test(cells.showCells, cells.fixedCells);
  cells.showCells = _.cloneDeep(cells.fixedCells);
}

function resetMino() {
  console.log("reset mino");

  cells.mino.minoType = getRandomMinoType();
  cells.mino.rotateCount = Math.floor(Math.random() * 4);
  cells.mino.color = getRandomMinoColor();
  cells.minoPosY = 0;
  // cells.minoPosX = config.wallThick + Math.floor(Math.random() * config.tableWidth);
  cells.minoPosX = 3;
}

function update() {
  console.group("");
  console.log("cells.minoPosX:", "X:", cells.minoPosX, "Y:", cells.minoPosY);

  cells.showCells = _.cloneDeep(cells.fixedCells);
  getUserInput();
  cells.mino.moveDown();

  updateView();
  console.groupEnd();
}
