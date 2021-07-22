// INSERT - Adding a new node at a specific position

/// ------ INSERT PSEUDOCODE ------ \\\

// -- If the index is less than zero or greater than to length, return false
// -- If the index is 0 , unshift
// -- If the index is the same as the length , push 
// -- Otherwise use the get method to access the index -1
// -- Set the next and prev properties on the correct nodes to link everything together
// -- Increament the length
// -- Return true

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

    // PUSH - Adding a new node at the end of the list
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
        return this
    }
    // POP - Remove node from the end of the list
    pop() {
        if (this.length === 0) return undefined;
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
    // SHIFT - To remove node from the beginning of the list
    shift() {
        if (!this.head) return undefined;
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
        return this
    }
    // UNSHIFT - To add node at the beginning of the list
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
    // GET - Retrieve the node at a particular Index
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current, count;
        if (index <= this.length) {
            current = this.head;
            count = 0;
            while (count !== index) {
                current = current.next
                count++;
            }
        } else {
            current = this.tail;
            count = this.length - 1;
            while (count !== index) {
                current = current.prev
                count--;
            }
        }
        return current;
    }
    // SET - Change the value at specific index 
    set(newValue, index) {
        let newNode = new Node(newValue)
        let foundNode = this.get(index)
        if (foundNode !== undefined) {
            foundNode.val = newNode.val
            return true;
        }
        return false;
    }
    // INSERT - Adding a new node to a specific position
    insert(newVal, index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.unshift(newVal);
        if (index === this.length) return this.push(newVal);
        let newNode = new Node(newVal);
        let prevNode = this.get(index - 1)
        let afterNode = prevNode.next
        prevNode.next = newNode;
        newNode.next = afterNode;
        newNode.prev = prevNode;
        afterNode.prev = newNode;
        this.length++;
        return this;
    }
}

let list = new doublyLinkedList()

list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

// list.pop();
// list.shift();
// list.unshift(50);
// list.get(3);
// list.set(45,3);

console.log(list.insert(25, 1))

