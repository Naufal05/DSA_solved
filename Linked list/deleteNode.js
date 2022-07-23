/**1) Find the previous node of the node to be deleted. 
2) Change the next of the previous node. 
3) Free memory for the node to be deleted. */

var head; // head of list

/* Linked list Node */
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/**Key and deletes the first occurence of key in Linked List */

function deleteNode(key) {
  var temp = head;
  var prev = null;
  // if head has the key to be deleted
  if (temp != null && temp.data == key) {
    head = temp.next;
    return;
  }
  //   Search for the key to be deleted
  while (temp != null && temp.data != key) {
    prev = temp;
    temp = temp.next;
  }
  //  if key was not present in the linked list
  if (temp == null) return;
  //   unlink the node from the LL
  prev.next = temp.next;
}

// insert at front
function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

// for printing

function printLst() {
  tnode = head;
  while (tnode != null) {
    console.log(tnode.data + " ");
    tnode = tnode.next;
  }
}

push(7);
push(12);
push(3);
push(2);

console.log("Created Linked list is:<br/>");
printLst();

deleteNode(7);
console.log("<br/>Linked List after Deletion of 1:<br/>");
printLst();
