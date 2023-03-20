import { Queue } from "./../queue";

describe("Queue Tests", () => {
  let queue: Queue = new Queue();

  beforeEach(() => {
    queue.clear();
  });

  test("Can add an item to the queue", () => {
    queue.enqueue("minwoo");

    expect(queue.size()).toBe(1);
  });

  describe("Dequeue Tests", () => {
    test("Can remove an item from the queue", () => {
      queue.enqueue("dongjun");
      queue.enqueue("minwoo");

      expect(queue.dequeue()).toBe("dongjun");
      expect(queue.size()).toBe(1);
    });

    test("Cannot remove an item from the empty queue", () => {
      expect(() => queue.dequeue()).toThrow("this queue is empty!");
    });
  });

  describe("Peek Tests", () => {
    test("Can peek queue", () => {
      queue.enqueue("dongjun");
      queue.enqueue("minwoo");

      expect(queue.peek()).toBe("dongjun");
      expect(queue.size()).toBe(2);
    });

    test("Cannot peek empty queue", () => {
      expect(() => queue.peek()).toThrow("this queue is empty!");
    });
  });

  test("Can get the size of queue", () => {
    queue.enqueue("dongjun");
    queue.enqueue("minwoo");

    expect(queue.size()).toBe(2);
  });

  test("Can check if queue is empty", () => {
    queue.enqueue("minwoo");

    expect(queue.isEmpty()).toBeFalsy();

    queue.dequeue();

    expect(queue.isEmpty()).toBeTruthy();
  });
});
