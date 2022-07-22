let root;

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isEmplty() {
  if (root == null) {
    return true;
  } else return false;
}

function push(data) {
  let newNode = new StackNode(data);
  if (root == null) {
    root = newNode;
  } else {
    let temp = root;
    root = newNode;
    newNode.next = temp;
  }
  console.log(data + "pushed to the Stack<br/>");
}

function pop() {
  let popped = Number.MIN_VALUE;
  if (root == null) {
    console.log("Stack is Empty");
  } else {
    popped = root.data;
    root = root.next;
  }
  return popped;
}

function peek() {
  if (root == null) {
    console.log("Stack is empty");
    return Number.MIN_VALUE;
  } else {
    return root.data;
  }
}

push(10);
push(20);
push(30);

console.log(pop() + "popped from the Stack<br/>");
console.log("Top element is " + peek());
