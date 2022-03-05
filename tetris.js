"use strict";
// 1行目に記載している 'use strict' は削除しないでください

// setup status cells
const cells = {
  showCells: generateCell(),
  fixedCells: generateCell(),
  mino: {
    minoType: getRandomMinoType(),
    rotateCount: Math.floor(Math.random() * 4),
    color: getRandomMinoColor(),
    // function
    moveDown: minoMoveDown,
    moveLeft: minoMoveLeft,
    moveRight: minoMoveRight,
    rotate: rotateMino,
    isMovable: isMovable,
    put: putMino,
    reset: resetMino,
  },
  minoPosX: 2,
  minoPosY: 0,
};

// draw table
makeTable();

updateView();

// run game
window.addEventListener("load", () => {
  window.setInterval(update, config.dropSpeed);
});
