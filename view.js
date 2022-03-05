"use strict";
// 1行目に記載している 'use strict' は削除しないでください

function makeTable() {
  let table = document.createElement("table");
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
  document.body.appendChild(table);
}

function updateView() {
  cells.showCells.forEach((arr, col) => {
    arr.forEach((e, row) => {
      const targetId = `cell-${col}-${row}`;
      if (cells.showCells[col][row].isBlock) {
        document.getElementById(targetId).style["background-color"] =
          cells.showCells[col][row].color;
      } else if (cells.showCells[col][row].isWall) {
        document.getElementById(targetId).style["background-color"] =
          configTetris.wallColor;
      }
    });
  });
}
