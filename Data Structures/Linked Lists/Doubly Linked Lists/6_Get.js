// GET- Retrieving a node by its position.

/// ------ GET PSEUDOCODE ------ \\\

// --  If the index is less than 0 or greater or equal to the length , return null.
// -- If the index is less than or equal to half the length of the list then Loop through the list starting from the head and loop towards the middle then return the node once it is found.
// --  Otherwise, If the index is greater than half the length of the list , Loop through the list starting from the tail and loop towards the middle then return the node once it is found.

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

    // PUSH - To add a new node at the end of the list
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
        return this;
    }
    // POP - To remove a node from the end of the List
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
    // SHIFT - To remove a node from the beginning of the List
    shift() {
        if (!this.head) {
            return undefined;
        }
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
    // UNSHIFT - To add a node at the beginning of node
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // GET - Retrieving a node by its position
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current, count;
        if (index <= this.length / 2) {
            current = this.head;
            count = 0;
            while (count != index) {
                current == current.next;
                count++;
            }
        } else {
            current = this.tail;
            count = this.length - 1;
            while (count != index) {
                current == current.prev;
                count--;
            }
        }
        return current;
    }
}

let list = new doublyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);

// list.pop();
// list.shift();
// list.unshift(50)

console.log(list.get(3));
