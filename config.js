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
