"use strict";
// 1行目に記載している 'use strict' は削除しないでください

// setup status cells
const cells = {
  score: 0,
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
    show: showMino,
    put: putMino,
    reset: resetMino,
  },
  minoPosX: 2,
  minoPosY: 0,
  // function
  checkLine: checkLine,
  checkGameOver: checkGameOver,
  updateScore: updateScore,
};

// draw description
makeDescription();

// make playground
makePlayground();

//make link
makeLink();

// resize img
resizeImgHeight(imgContentsId);

updateView();

// run game
if (!config.testMode) {
  window.addEventListener("load", () => {
    window.setInterval(update, config.dropSpeed);
  });
}
