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
  document.body.appendChild(table);
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
  const h2 = document.createElement("h2");
  h1.after(h2);
  h2.className = "description";

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

  h2.append(table);
}

function updateView() {
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
}
