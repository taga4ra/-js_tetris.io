if (config.testMode) {
  console.group("debug");

  [
    [1, 2],
    [3, 4],
  ].forEach((_, col) =>
    _.forEach((e, row) => {
      console.log("Col:", col, ", Ro:", row, "e:", e);
    })
  );

  console.group("trasnpose");
  test(transpose([[1]]), [[1]]);
  test(
    transpose([
      [1, 2],
      [3, 4],
    ]),
    [
      [1, 3],
      [2, 4],
    ]
  );
  test(
    transpose([
      [1, 2, 3],
      [4, 5, 6],
    ]),
    [
      [1, 4],
      [2, 5],
      [3, 6],
    ]
  );
  test(
    transpose([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]),
    [
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [4, 8, 12, 16],
    ]
  );
  console.groupEnd();
  console.group("rotateMino");
  cells.mino.rotateCount = 1;
  test(rotateMino([[1]]), [[1]]);
  test(
    rotateMino([
      [1, 2],
      [3, 4],
    ]),
    [
      [3, 1],
      [4, 2],
    ]
  );
  test(
    rotateMino([
      [1, 2, 3],
      [4, 5, 6],
    ]),
    [
      [4, 1],
      [5, 2],
      [6, 3],
    ]
  );
  test(
    rotateMino([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]),
    [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ]
  );

  console.groupEnd();

  console.groupEnd();
}
