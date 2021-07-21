// SHIFTING - Rmoving a node from the Beginning of the Linked List.

/// ------ SHIFTING PSEUDOCODE ------ \\\

// -- If there is no head, return undefined.
// -- Store the oldHead head propert in a vriable.
// -- If the length is 1, set the head and tail to be null.
// -- Update the head to be the next of the old head .
// -- Set the head to be next of the old head.
// -- Set the head's previous property to be the next of the old head.
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

    // PUSH - To add a node at the end 
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

    // POP - To remove a node from the end 
    pop() {
        let popNode = this.tail;
        if (!this.head) return undefined;
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

    // SHIFT - To Remove a node from the beginning 
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

}

let list = new doublyLinkedList()

list.push(10);
list.push(20);
list.push(30);
list.push(40);

// list.pop();
list.shift();

console.log(list)