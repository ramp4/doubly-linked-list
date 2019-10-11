const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {
    if (this.isEmpty()) {
      let node = new Node(data);
      this._head = node;
      this._tail = node;
      this.length++;
      return this;
    }
    let node = new Node(data, this._tail);
    this.length++;
    this._tail = node;
    this._tail.prev.next = node;
    return this;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    let node = this._head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node.data;
  }

  insertAt(index, data) {
    let insertNode = new Node(data);
    let node = this._head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    let prevNode = node.prev;
    insertNode.prev = prevNode;
    insertNode.next = node;
    prevNode.next = insertNode;
    node.prev = insertNode;
    this.length++;
  }

  isEmpty() {
    return !this.length;
  }

  clear() {
    this.length = 0;
    this._tail.data = null;
    this._head.data = null;
  }

  deleteAt(index) {
    let node = this._head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
  }

  reverse() {
    let length = this.length;
    let storage = [];
    for (let i = 0; i < length; i++) {
      let data = this.at(i);
      storage.push(data);
      storage.reverse();
    }
    this.clear();
    for (let i = 0; i < length; i++) {
      this.append(storage[i]);
    }
    return this;
  }

  indexOf(data) {
    for (let i = 0; i < this.length; i++) {
      if (this.at(i) == data) return i;
    }
    return -1;
  }
}

module.exports = LinkedList;
