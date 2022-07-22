/**Implementing Stack using Array */

class Stack {
  constructor() {
    this.item = []; //non para constructor
  }

  //   Core Stack MEthods

  // Adding Item(push)
  add(element) {
    return this.item.push(element);
  }

  //   Deleting elements
  remove() {
    if (this.item.length === 0) {
      return "Stack Underflow";
    }
    return this.item.pop();
  }

  //   Get the size of the Stack
  getSize() {
    return this.item.length;
  }
  // Emply
  isEmplty() {
    return this.item.length === 0;
  }

  //peek
  peek() {
    return this.item[this.item.length - 1];
  }
  //clear
  clear() {
    this.item = [];
  }
}

// module.exports = Stack;
