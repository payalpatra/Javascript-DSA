// SET - Changing the value of the node based on the position

/// ------ SET PSEUDOCODE ------ \\\

// -- Create a variable which is the result of the get method at the index passed to the function,
// -- If the get method returns a valid node, set the value of that node to be the value passed to the function.
// -- Return true

// Node
class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

// Doubly linked Lists
class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // PUSH - Add to the end of the list
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
    // POP - Remove the node from the end of the list 
    pop() {
        if (!this.head) return undefined;
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
    // SHIFT - To remove a node from the beginning of list
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
        return oldHead;
    }
    // UNSHIFT - Add a node to at the beginning of the list
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++;
        return this
    }
    // GET - Retrieving a node by its position
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current, count;
        if (index <= this.length / 2) {
            current = this.head;
            count = 0;
            while (count != index) {
                current = current.next
                count++;
            }
        } else {
            current = this.tail;
            count = this.length - 1;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    // SET - Changing the value at a specific index
    set(newValue, index) {
        let newNode = new Node(newValue);
        let founNode = this.get(index);
        if (founNode !== undefined) {
            founNode.val = newNode.val;
            return true;
        } else {
            return false;
        }
    }
}

let list = new doublyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);

// list.pop();
// list.shift();
// list.unshift(50);
// list.get(3);

console.log(list.set(250, 2))

