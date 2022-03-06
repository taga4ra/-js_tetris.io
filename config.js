const config = {
  wallThick: 1,
  wallColor: "gray",
  tableWidth: 8,
  tableHeight: 24,
  tableBackground: "white",
  dropSpeed: 500, ///ms
  minoTypes: {
    I: [[true], [true], [true], [true]],
    O: [
      [true, true],
      [true, true],
    ],
    S: [
      [false, true, true],
      [true, true, false],
    ],
    Z: [
      [true, true, false],
      [false, true, true],
    ],
    J: [
      [true, false, false],
      [true, true, true],
    ],
    L: [
      [false, false, true],
      [true, true, true],
    ],
    T: [
      [false, true, false],
      [true, true, true],
    ],
  },
  minoColors: ["red", "orange", "pink", "blue", "yellow", "green", "lime", "violet"],
  debugMode: true,
  testMode: false,
};

const descriptionHtml = [
  ["", "", "Keyboard", "", "Description"],
  ['<img id="left-btn" src="https://www.svgrepo.com/show/342958/arrow-left-circle.svg">', "left", ":", "move"],
  ['<img id="right-btn" src="https://www.svgrepo.com/show/342960/arrow-right-circle.svg"></img>', "right", ":", "move"],
  ['<img id="rotate-btn" src="https://www.svgrepo.com/show/165393/rotate.svg">', "", "up", ":", "rotate"],
  ['<img id="change-btn" src="https://www.svgrepo.com/show/85637/change.svg"> ', "", "c", ":", "chage next mino"],
  ['<img id="reset-btn" src="https://www.svgrepo.com/show/325101/delete-circled-outline.svg"> ', "", "r", ":", "reset"],
];

const descriptionImgID = ["left-btn", "right-btn", "rotate-btn", "change-btn", "reset-btn"];

const imgContentsId = ["js-icon", "left-btn", "right-btn", "rotate-btn", "change-btn", "reset-btn"];
