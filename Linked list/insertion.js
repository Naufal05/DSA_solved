// Linked List Class
var head; // head of list

/* Node Class */
class Node {
  // Constructor to create a new node
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/**insertion throguh front */

function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

/**Add node inbetween  */

function insertAfter(prev_node, new_data) {
  if (prev_node == null) {
    console.log("The previosu node cannot be null");
    return;
  }

  var new_node = new Node(new_data);
  new_node.next = prev_node.next;
  prev_node.next = new_node;
}

/**Add a node at the end of the list */

function append(new_data) {
  var new_node = new Node(new_data);
  /**if the LL is empty then make a new node as the head */
  if (head == null) {
    head = new Node(new_data);
  }

  /**next of the end node as null */
  new_node.next = null;
  /** else traverse till the last node */
  var last = head;
  while (last.next != null) last = last.next;

  /**change the next of the last node */
  last.next = new_node;
}

function printList() {
  var tnode = head;
  while (tnode != null) {
    console.log(tnode.data + " ");
    tnode = tnode.next;
  }
}

append(6);
push(7);
push(1);
append(4);

insertAfter(head.next, 8);
console.log("\nCreated Linked list is: ");
console.log(printList());
