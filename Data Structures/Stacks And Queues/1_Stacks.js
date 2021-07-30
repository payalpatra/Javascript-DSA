// ------ STACKS ------ \\

// -- What is a stack ? -- \\

// -- It is a LIFO (Last In First Out) Data structure.
// -- The last element added to the stack will be the first element removed from the stack.

//---- Where Stacks are used ? ---- \\

// -- Managing Functions invocations
// -- Undo/Redo 
// -- Routing (The history object is treated like a stack)


// --- Points To Remember --- \\

// -- Stacks are used to handle function invocations(the call stack) for operations like undo/redo and for routing (remeber pages you visited and go back/forward )
// -- They are not a built in data Structure in javascript, but are relatively simple to implement.


// ---------------------- Creating a stack using Linked Lists -------------------- \\

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // PUSH - Adding to the beginning of the stack
    push(value) {
        let newNode = new Node(value)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let oldFirst = this.first;
            this.first = newNode;
            newNode.next = oldFirst
        }
        return ++this.size
    }

    // POP - Removing from the beginning of the stack
    pop() {
        if (!this.first) return null;
        let oldFirst = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = oldFirst.next;
            oldFirst.next = null;
        }
        this.size--;
        return oldFirst;
    }
}

let stack = new Stack();

stack.push(40);
stack.push(30);
stack.push(20);
stack.push(10);

console.log(stack.pop());
console.log(stack)

// Note -- It's not constant time to add and remove from the end that's why we add and remove from the beginning

// --- BIG O OF STACKS --- \\

// INSERTION - O(1)
// REMOVAL - O(1)
// SEARCHING - O(N)
// ACCESS - O(N)


