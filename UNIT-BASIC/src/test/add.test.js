const add = require("../add");

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("sum module", () => {
  it("3 + 5는 8", () => {
    expect(add(3, 5)).toBe(8);
  });
});
