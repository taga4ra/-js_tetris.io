"use strict";
// 1行目に記載している 'use strict' は削除しないでください

function generateCell() {
  const cells = [];
  for (let col = 0; col < configTetris.tableHeight; col++) {
    const tmp_row = [];
    for (let row = 0; row < configTetris.tableWidth; row++) {
      tmp_row.push({
        isBlock: false,
        color: "black",
      });
    }
    cells.push(tmp_row);
  }
  return cells;
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
          cells.moveDown();
          break;
        case "ArrowUp":
          console.log("up");
          break;
        case "ArrowLeft":
          console.log("left");
          cells.moveLeft();
          break;
        case "ArrowRight":
          console.log("right");
          cells.moveRight();
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

function cellMoveDown() {
  const posY = cells.minoPosY;
  if (0 <= posY + 1 && posY + 1 < configTetris.tableHeight) {
    cells.minoPosY++;
  }
}

function cellMoveLeft() {
  const posX = cells.minoPosX;
  if (0 <= posX - 1 && posX - 1 < configTetris.tableWidth) {
    cells.minoPosX--;
  }
}

function cellMoveRight() {
  const posX = cells.minoPosX;
  if (0 <= posX + 1 && posX + 1 < configTetris.tableWidth) {
    cells.minoPosX++;
  }
}

const mino = {
  isBlock: true,
  color: "white",
};

function update() {
  cells.showCells = JSON.parse(JSON.stringify(cells.staticCells));
  getUserInput();
  cells.moveDown();
  cells.showCells[cells.minoPosY][cells.minoPosX] = mino;
  updateView();
}
