/** Node: node for a singly linked list. */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (this.head === null) {
      const node = new Node(val);
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;

      if (this.length === 1) {
        this.head.next = this.tail;
      }
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (this.head === null) {
      const node = new Node(val);
      this.head = node;
      this.tail = node;
    } else {
      const tempHead = this.head;
      this.head = new Node(val, tempHead);
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;

    if (this.length === 1) {
      const poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length --;

      return poppedNode.val;
    }

    while (currentNode) {
      if (currentNode.next === this.tail) {
        const poppedNode = currentNode.next;
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;

        return poppedNode.val;
      }
      currentNode = currentNode.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    const shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return shiftedNode.val;
    }

    this.head = this.head.next;
    this.length--;

    return shiftedNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length === 0) return -1;

    let count = 0;
    let currentNode = this.head;
    while (count < idx) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length === 0) return -1;
    
    let count = 0;
    let currentNode = this.head;
    while (count < idx) {
      currentNode = currentNode.next;
      count++;
    }
    currentNode.val = val;
    return currentNode.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.length === 0) {
      this.push(val);
      this.tail = this.head;
      return this.head.val;
    }

    let count = 0;
    let currentNode = this.head;
    while (count < idx - 1) {
      currentNode = currentNode.next;
      count++;
    }
    const tempNode = currentNode.next;
    currentNode.next = new Node(val, tempNode);
    if (currentNode.next.next === null) this.tail = currentNode.next;
    this.length++;

    return currentNode.next.val;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length === 0) return -1;

    if (this.length === 1) {
      const deletedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return deletedNode.val;
    }

    let count = 0;
    let currentNode = this.head;
    while (count < idx - 1) {
      currentNode = currentNode.next;
      count++;
    }
    const tempNode = currentNode.next.next;
    currentNode.next = tempNode;
    this.length--;

    return tempNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    
    let count = 0;
    let sum = 0;
    let currentNode = this.head;
    while (count < this.length) {
      sum += currentNode.val;
      currentNode = currentNode.next;
      count++;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
