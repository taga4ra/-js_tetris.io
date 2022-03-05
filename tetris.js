"use strict";
// 1行目に記載している 'use strict' は削除しないでください

// setup status cells
const cells = {
  showCells: generateCell(),
  staticCells: generateCell(),
  minoPosX: 0,
  minoPosY: 0,
  // function
  moveDown: cellMoveDown,
  moveLeft: cellMoveLeft,
  moveRight: cellMoveRight,
};

// draw table
makeTable();

updateView();

window.addEventListener("load", () => {
  window.setInterval(update, configTetris.dropSpeed);
});
