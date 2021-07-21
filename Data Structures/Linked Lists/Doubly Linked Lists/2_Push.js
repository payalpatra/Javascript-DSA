// PUSHING - Adding a new node to the end of the Linked List.

/// ------ PUSHING PSEUDOCODE ------ \\\

// -- Create a new node with the value passed to the function.
// -- If the head property is null set the head and tail to be the newly created node.
// -- If not, set the next property on the tail to be that node.
// -- Set the previous property on the newly created node to be the tail.
// -- Set the tail to be the newly created node.
// -- Increament the length
// -- Return the Doubly Linked List

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //PUSH- To add a new node at the end
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }


}

let list = new doublyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);

console.log(list);

