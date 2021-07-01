// PUSHING - Adding a new node to the end of the Linked List.

/// ------ PUSHING PSEUDOCODE ------ \\\

// -- This function should accept a value. 
// -- Create a new node using the value passed to the function.
// -- If there is no head property on the list, set the head and the tail to the newly created node.
// -- Otherwise set the next property on the list to be the new node and set the tail property on the list to be the newly created node.
// -- Increament the length by one.
// -- Return the Linked List

/// Node -- Each Node will have a value and and next is the pointer to another node.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

/// Singly Linked List -- This will have head , tail , length and all the nodes.

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Instance Method
    push(val) {

        // Instance of Node class
        let newNode = new Node(val);

        // If the list is empty
        if (!this.head) {
            // Head and Tail points to new node
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this
    }
}


// Instance of singlyLinkedList class
let list = new singlyLinkedList()

list.push(20)

// Output -- Pushes 20 into the Linked List and Increaments 1

/// List after pushing 20
/** 
{
  head: Node { val: 20, next: null },
  tail: Node { val: 20, next: null },
  length: 1
}
**/

list.push(30)

// Output -- Pushes 30 into the Linked List and Increaments

/// List after pushing 30

/**
{
    head: Node { val: 20, next: Node { val: 30, next: null } },
    tail: Node { val: 30, next: null },
    length: 2
}
**/
list.push(40)
console.log(list)

// Output -- Pushes 40 into the Linked List and Increaments

/*
{
    head: Node { val: 20, next: Node { val: 30, next: [Node] } },
    tail: Node { val: 40, next: null },
    length: 3
}
*/