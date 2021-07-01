// POPING- Remove a node from the end of the Linked List.

/// ------ POPING PSEUDOCODE ------ \\\

// -- If there are no nodes in the list, return undefined
// -- Loop through the list until you reach
// -- Set the next property of the 2nd to last node to be nu;
// -- set the tail to be the 2nd to last node
// -- Decreament the length of the list by 1
// -- Return the value of the node removed

// -- NODE -- \\
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// -- LINKED LIST -- \\
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // -- Instance method to push node to the Linked List-- \\
    pushNode(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    // To get the values of all the Nodes
    traverseList() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            console.log("Node", count, "Value = ", current.val);
            current = current.next;
        }
    }

    // -- Remove a node from the end of the List -- \\
    popNode() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        console.log(`${current.val} is popped from the LinkedList !😊`)
        console.log("This is the New", list)
        return current
    }
}

// INSTANCE OF SINGLE LIST -- \\

let list = new SinglyLinkedList();

// Push Nodes
list.pushNode(10);
list.pushNode(20);
list.pushNode(30);
list.pushNode(40);

// This is the Final Linked List after pushing 10,20,30 & 40
// console.log(list);
/*
 --------------- LINKED LIST ---------------

{
  head: Node { val: 10, next: Node { val: 20, next: [Node] } },
  tail: Node { val: 40, next: null },
  length: 4
}

*/

// Travarse
// list.traverseList()

// Pop
list.popNode();

// OUTPUT 

/*
40 is popped from the LinkedList !😊
This is the New SinglyLinkedList {
  head: Node { val: 10, next: Node { val: 20, next: [Node] } },
  tail: Node { val: 30, next: null },
  length: 3
}
*/