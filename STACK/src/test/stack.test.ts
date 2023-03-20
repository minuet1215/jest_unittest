import { Stack } from "./../stack";

describe("Stack Test", () => {
  const stack = new Stack();

  beforeEach(() => {
    stack.clear();
  });

  test("Push", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  test("Size", () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
  });

  describe("Peek", () => {
    test("Peek", () => {
      stack.push(3);
      expect(stack.peek()).toBe(3);
      expect(stack.size()).toBe(1);
    });

    test("throw error if stack if empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("Stack is empty!");
    });
  });

  describe("Pop test!", () => {
    test("Pop", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
    });

    test("throw error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty!");
    });
  });

  test("Clear", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toBe(3);

    stack.clear();
    expect(stack.size()).toBe(0);
  });

  test("isEmpty", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.isEmpty()).toBeFalsy();

    stack.clear();

    expect(stack.isEmpty()).toBeTruthy();
  });
});
