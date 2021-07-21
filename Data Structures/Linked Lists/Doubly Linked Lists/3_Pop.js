// POPING - Rmoving a node from the end of the Linked List.

/// ------ POPING PSEUDOCODE ------ \\\

// -- If there is no head, return undefined.
// -- Store the popNode tail in a variable to return later.
// -- If the length is 1, set the head and tail to be null.
// -- Update the tail to be the previous Node .
// -- Set the new tail next to be null.
// -- Decreament the length
// -- Return the Value removed

// Node
class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

// Doubly Linked List
class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // PUSH - To add a new node at the end of the list
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // POP - To remove node from the end
    pop() {
        if (!this.head) return undefined
        let popNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popNode.prev;
            this.tail.next = null;
            popNode.prev = null;
        }
        this.length--;
        return popNode;
    }

}

let list = new doublyLinkedList()

list.push(10);
list.push(20);
list.push(30);
list.push(40);

list.pop()

console.log(list)

