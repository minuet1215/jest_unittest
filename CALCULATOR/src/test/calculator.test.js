const Calculator = require("../calculator");

describe("Calculator", () => {
  const cal = new Calculator();

  beforeEach(() => {
    cal.clear();
  });

  test("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  test("sets", () => {
    cal.set(1);
    expect(cal.value).toBe(1);
  });

  test("clear", () => {
    cal.set(1);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  test("add", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  test("add throw an error if value > 100", () => {
    cal.set(99);
    expect(() => cal.add(51)).toThrow("Value can not be greater than 100");
  });

  test("subtract", () => {
    cal.subtract(5);
    expect(cal.value).toBe(-5);
  });

  test("multiply", () => {
    cal.set(10);
    cal.multiply(10);
    expect(cal.value).toBe(100);
  });

  describe("divides", () => {
    test("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    test("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    test("4/4===1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
