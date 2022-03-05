"use strict";
// 1行目に記載している 'use strict' は削除しないでください

function initCell() {
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
}
