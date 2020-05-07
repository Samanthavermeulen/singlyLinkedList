class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    this.length++;
    let node = new Node(val);
    if (this.head == null) {
      this.head = node;
      this.tail = node;

      return node;
    }
    this.tail.next = node;
    this.tail = node;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    var current = this.head;

    if (this.length == 1) {
      this.length--;
      this.head = null;
      this.tail = null;
      return current.val;
    }

    this.length--;
    while (current) {
      if (!current.next.next) {
        let removeNode = current.next;
        this.tail = current;
        current.next = null;

        return removeNode.val;
      }
      current = current.next;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let head = this.head;
    let next = this.head.next;

    if (this.length == 1) {
      this.length--;
      this.tail = null;
      return head;
    }

    this.head = next;
    this.length--;

    return head;
  }

  unshift(val) {
    this.length++;
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;

      return this;
    } else {
      let head = this.head;

      this.head = node;
      this.head.next = head;

      return this;
    }
  }

  get(val) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (val == i) {
        return current;
      }

      current = current.next;
    }
  }

  set(index, val) {
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (index == i) {
        current.val = val;

        return current;
      }

      current = current.next;
    }
    return undefined;
  }

  remove(index) {
    let current = this.head;
    let oldCurrent = current;

    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index == this.length - 1) {
      return this.pop();
    }

    if (index == 0) {
      return this.shift();
    }

    for (let i = 0; i < this.length; i++) {
      if (index == i) {
        let result = current;
        let nextCurrent = current.next;
        oldCurrent.next = nextCurrent;

        this.length--;

        return result;
      }

      current = current.next;
    }
  }

  insert(index, val) {
    let current = this.head;
    let oldCurrent = current;
    let node = new Node(val);

    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === this.length) {
      return this.push(val);
    }

    if (index == 0) {
      return this.unshift(val);
    }

    for (let i = 0; i < this.length; i++) {
      if (index == i) {
        oldCurrent.next = node;

        oldCurrent.next.next = current;

        this.length++;

        return this;
      }

      current = current.next;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let node = new Node();
let list = new List();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
