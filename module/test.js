function test(actual, expected) {
  if (
    (typeof actual === "object" || typeof expected === "object") &&
    JSON.stringify(actual) === JSON.stringify(expected)
  ) {
    console.log("Test PASSED.");
  } else if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}
