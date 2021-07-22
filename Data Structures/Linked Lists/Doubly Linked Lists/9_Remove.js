// REMOVE - Remove node at a specific item

/// ------ REMOVE PSEUDOCODE ------ \\\

// -- If the index is less than zero or greater than or equal to the length return undefined
// -- If the index is 0, shift
// -- If the index is the same as the length -q , pop 
// -- Use the get method to retrieve the item to be removed
// -- Update the next and prev properties to remove the found node from the lists
// -- Set the next and prev to null on the found node.
// -- Decrease  the length
// -- Return the removed node 

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
    // POP - To remove a node from the end of the list
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
    // SHIFT - Removing a node from the beginning of the list.
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
    // UNSHIFT - Add a new node at the beginning of the list
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
    // GET - Retrieving a node at a particular index
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current, count;
        if (index <= this.length / 2) {
            current = this.head;
            count = 0;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            current = this.tail;
            count = this.length - 1;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    // SET - Change the value at specific index
    set(newVal, index) {
        let newNode = new Node(newVal);
        let foundNode = this.get(index);
        if (foundNode !== undefined) {
            foundNode.val = newNode.val;
            return true;
        }
        return false;
    }
    // INSERT - To insert a new node at a specific position
    insert(newVal, index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) {
            return this.unshift(newVal);
        } else if (index === this.length) {
            return this.push(newVal);
        } else {
            let newNode = new Node(newVal);
            let prevNode = this.get(index - 1);
            let nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            this.length++;
            return this;
        }
    }
    // REMOVE - Removing a node at a specific position
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            let removedNode = this.get(index)
            let prevNode = removedNode.prev
            let nextNode = removedNode.next
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            removedNode.next = null;
            removedNode.prev = null;
            this.length--;
            return removedNode;
        }

    }

}

let list = new doublyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

// list.pop();
// list.shift();
// list.unshift(5);
// list.get(2);
// list.set(45,3);
// list.insert(25, 1)

console.log(list.remove(2));

