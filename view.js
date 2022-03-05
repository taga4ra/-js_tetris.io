"use strict";
// 1行目に記載している 'use strict' は削除しないでください

function makeTable() {
  let table = document.createElement("table");

  let tbody = document.createElement("tbody");
  for (let col = 0; col < configTetris.tableHeight; col++) {
    let tr = document.createElement("tr");
    for (let row = 0; row < configTetris.tableWidth; row++) {
      let td = document.createElement("td");
      td.id = `cell-${col}-${row}`;
      // td.textContent = `${col}-${row}`; // debug
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);

  document.body.appendChild(table);
}

function updateView() {
  for (let col = 0; col < configTetris.tableHeight; col++) {
    for (let row = 0; row < configTetris.tableWidth; row++) {
      const targetId = `cell-${col}-${row}`;
      document.getElementById(targetId).style["background-color"] =
        cells.showCells[col][row].color;
    }
  }
}
