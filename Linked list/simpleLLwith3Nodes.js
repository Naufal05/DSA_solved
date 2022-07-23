// A simple javascript program to introduce a linked list

var head;
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

/**the function that prints the content of the nodes */

function printLists() {
  var n = head;
  while (n != null) {
    console.log(n.data + " ");
  }
}

/* method to create a simple linked list with 3 nodes*/

var head = new Node(1);
var second = new Node(2);
var third = new Node(3);

head.next = second;
second.next = third;

printLists(); // output - 1 2 3
