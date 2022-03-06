"use strict";
// 1行目に記載している 'use strict' は削除しないでください

function makeTable() {
  let table = document.createElement("table");
  table.id = "game-table";
  let tbody = document.createElement("tbody");

  cells.showCells.forEach((arr, col) => {
    let tr = document.createElement("tr");
    arr.forEach((e, row) => {
      let td = document.createElement("td");
      td.id = `cell-${col}-${row}`;
      // td.textContent = `${col}-${row}`; // debug
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  const board = document.querySelector("#board");
  board.appendChild(table);
}

function getH1FontSize() {
  const h1 = document.querySelector("h1");
  return h1.clientHeight;
}

function resizeImgHeight(arrayOfId) {
  arrayOfId.forEach((id) => {
    const e = document.querySelector(`#${id}`);
    e.style.height = "1em";
  });
}

function makeDescription() {
  const h1 = document.querySelector("h1");
  const h3 = document.createElement("h3");
  h1.after(h3);
  h3.className = "description";

  // description tabe
  let table = document.createElement("table");
  table.id = "desc-table";
  let tbody = document.createElement("tbody");

  descriptionHtml.forEach((arr, col) => {
    let tr = document.createElement("tr");
    arr.forEach((str, row) => {
      let td = document.createElement("td");
      td.id = `desc-${col}-${row}`;
      td.innerHTML = str;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  h3.append(table);
}

function makeScoreBoard() {
  const board = document.querySelector("#score");
  const scoreNum = document.createElement("h2");
  scoreNum.id = "scoreNum";
  board.appendChild(scoreNum);
}

function drawNextMinoBoard() {
  const nextMino = document.querySelector("#nextMino");
  const printNextMino = document.createElement("h2");
  printNextMino.id = "nextMinoType";
  nextMino.appendChild(printNextMino);

  // append tabel
  const table = document.createElement("table");
  table.id = "next-mino-table";
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  nextMino.appendChild(table);
}

function updateScore() {
  const scoreNum = document.querySelector("#scoreNum");
  scoreNum.innerHTML = `SCORE: ${String(cells.score)}<br>(clear line)`;
}

function showNextMino() {
  const printNextMinoType = document.querySelector("#nextMinoType");
  printNextMinoType.textContent = `Next: `;
  printNextMinoType.textContent += `${cells.nextMino.minoType}`;

  const minoTable = document.querySelector("#next-mino-table");

  let tbody = document.createElement("tbody");

  const minoMat = rotateMino(config.minoTypes[cells.nextMino.minoType], cells.nextMino.rotateCount);
  minoMat.forEach((arr, col) => {
    let tr = document.createElement("tr");
    arr.forEach((e, row) => {
      let td = document.createElement("td");
      td.id = `next-mino-${col}-${row}`;
      if (e) {
        td.style["background-color"] = cells.nextMino.color;
      } else {
        td.style["background-color"] = config.tableBackground;
      }

      if (config.debugMode) {
        td.innerHTML = e; // debug
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  minoTable.removeChild(minoTable.childNodes[0]);
  minoTable.appendChild(tbody);
  printNextMinoType.after(minoTable);
}

function makePlayground() {
  const divPlay = document.createElement("div");
  divPlay.id = "playground";

  const leftPanel = document.createElement("div");
  leftPanel.id = "leftPanel";
  const rightPanel = document.createElement("div");
  rightPanel.id = "rightPanel";

  const divBoard = document.createElement("div");
  divBoard.id = "board";
  leftPanel.append(divBoard);

  const divScore = document.createElement("div");
  divScore.id = "score";
  const divNext = document.createElement("div");
  divNext.id = "nextMino";
  rightPanel.append(divScore, divNext);

  divPlay.append(leftPanel, rightPanel);
  document.body.appendChild(divPlay);

  // draw table
  makeTable();

  // draw score
  makeScoreBoard();

  drawNextMinoBoard();
}

function makeLink() {
  const divPlay = document.querySelector(".playground");
  const divLink = document.createElement("div");
  divLink.id = "link";

  const srcCode = document.createElement("a");
  srcCode.href = "https://github.com/taga4ra/js_tetris.io";
  srcCode.textContent = "Source Code";
  const slide = document.createElement("a");
  slide.href = "https://github.com/taga4ra/doc/slide.html";
  slide.textContent = "Slide";

  divLink.append(srcCode, slide);

  document.body.appendChild(divLink);
}

function updateView() {
  //cells
  cells.showCells.forEach((arr, col) => {
    arr.forEach((e, row) => {
      const targetId = `cell-${col}-${row}`;
      if (cells.showCells[col][row].isBlock) {
        document.getElementById(targetId).style["background-color"] = cells.showCells[col][row].color;
      } else if (cells.showCells[col][row].isWall) {
        document.getElementById(targetId).style["background-color"] = config.wallColor;
      } else {
        document.getElementById(targetId).style["background-color"] = config.tableBackground;
      }
    });
  });

  //score
  cells.updateScore();

  // show next mino
  cells.showNextMino();
}
