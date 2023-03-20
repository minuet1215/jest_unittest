export type StackElements = number | string | boolean;

export class Stack<StackElements> {
  private array: Array<StackElements>;

  constructor() {
    this.array = [];
  }

  push(element: StackElements): void {
    this.array.push(element);
  }

  size(): number {
    return this.array.length;
  }

  peek(): StackElements {
    if (this.array.length === 0) {
      throw new Error("Stack is empty!");
    }

    return this.array.at(-1);
  }

  pop(): StackElements {
    if (this.array.length === 0) {
      throw new Error("Stack is empty!");
    }

    return this.array.pop();
  }

  clear() {
    this.array = [];
  }

  isEmpty() {
    return this.array.length === 0;
  }
}
