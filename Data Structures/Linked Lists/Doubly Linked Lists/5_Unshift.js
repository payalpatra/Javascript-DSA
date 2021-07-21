// UNSHIFT - Adding a node at the Beginning of the Linked List.

/// ------ UNSHIFT PSEUDOCODE ------ \\\

// -- Create a new node with the value passed to the function.
// -- If the length is 0 set the head to be the new node and the tail to be the new node.
// --  Otherwise set the prev property on the head of the list to be the new node.
// --  Set the next property on the new node to be the head property.
// --  Update the head to be the new node.
// --  Increament the length.
// --  Return the list.

// Node 
class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


// Doubly Linked Lists
class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // PUSH - To add a new node at the end
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    // POP - To remove the node at the end 
    pop() {
        if (!this.head) {
            return undefined;
        }
        let oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
    // SHIFT - To remove a node from the beginning of the node
    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
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
    // UNSHIFT - To add a node at the beginning of the node
    unshift(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }
}

let list = new doublyLinkedList()

list.push(10);
list.push(20);
list.push(30);
list.push(40);

// list.pop();
// list.shift()
list.unshift(50)

console.log(list)