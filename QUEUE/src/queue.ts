export class Queue {
  private _item: Record<any, any>;
  private _head: number;
  private _tail: number;

  constructor() {
    this._item = {};
    this._head = 0;
    this._tail = 0;
  }

  enqueue(item: any) {
    this._item[this._tail] = item;
    this._tail++;
  }

  dequeue(): any {
    if (this.isEmpty()) {
      throw new Error("this queue is empty!");
    }

    const firstItem = this.peek();
    delete this._item[this._head];
    this._head++;
    return firstItem;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("this queue is empty!");
    }

    return this._item[this._head];
  }

  size(): number {
    return this._tail - this._head;
  }

  isEmpty(): boolean {
    return this.size() ? false : true;
  }

  clear() {
    this._item = {};
    this._head = 0;
    this._tail = 0;
  }
}
