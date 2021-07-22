// ------ QUEUES------ \\

// -- What is a Queue ? -- \\

// -- It is a FIFO(First In First Out) Data structure.
// -- The First element added to the stack will be the First element removed from the stack.

// -- How do we use them in Programming -- \\

// -- Background Tasks
// -- Uploading Resources
// -- Printing / Task Processing


// ---------------------- Creating a queues using Linked Lists -------------------- \\

// Node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Queue
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // enqueue - Adding to the end 
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size
    }

    // dequeue - Remove from the beginning 
    dequeue() {
        if (!this.first) return null;
        let oldFirst = this.first;
        if (!this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = oldFirst.next;
            oldFirst.next = null;
        }
        this.size--;
        return oldFirst.val
    }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.dequeue())
console.log(queue)

// --- BIG O OF QUEUES --- \\

// INSERTION - O(1)
// REMOVAL - O(1)
// SEARCHING - O(N)
// ACCESS - O(N)