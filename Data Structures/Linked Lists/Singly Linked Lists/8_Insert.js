// INSERT - Adding a node to the Linked List at a specific position

/// ------ INSERT PSEUDOCODE ------ \\\

// -- If the index is less than zero or greater than the length , return false.
// -- If the index is the same as the length , push the node to the end of the list.
// -- If the index is 0 , unshift a new Node to the end of the list.
// -- Otherwise, using the get method, access the node at the index - 1.
// -- Set the next property on that node to be the new Node to be the previous next.
// -- Set the next Property on that node to be the new Node
// -- Set the next property on the new node to be the previous next.
// Increase the length
// Return true

// Node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Singly Linked List

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // PUSH
    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return "PUSH COMPLETED 🥇"
    }

    // TRAVERSE
    traverse() {
        if (!this.head) return null;
        let current = this.head;

        while (current) {
            console.log(current);
            current = current.next;
        }
    }

    // POP
    pop() {
        if (!this.head) return null;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;

        this.length--;

        return "POP COMPLETED 🥇";
    }

    // SHIFT
    shift() {
        if (!this.head) return null;

        let current = this.head;
        this.head = current.next;
        this.length--;

        return "SHIFT COMPLETED 🥇";
    }

    // UNSHIFT
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let current = this.head;
            this.head = newNode;
            newNode.next = current;
        }
        this.length++;
        console.log("UNSHIFT COMPLETED 🥇");
        return;
    }

    // GET
    get(index) {
        if (index < 0 || index >= this.length) {
            console.log("Undefined");
            return null;
        }

        let current = this.head;
        let count = 0;

        while (count != index) {
            current = current.next;
            count++;
        }
        return current;
    }

    // SET
    set(newVal, index) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = newVal;
            return true;
        }
        return false;
    }

    // INSERT
    insert(newVal, index) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === 0) {
            this.unshift(newVal);
        } else if (index === this.length) {
            this.push(newVal);
        } else {
            let newNode = new Node(newVal);
            let current = this.head;
            let prev = current;

            let count = 0;

            while (count != index) {
                count = count + 1;
                prev = current;
                current = current.next;
            }
            prev.next = newNode;
            newNode.next = current;
            this.length++
        }
        return "Insertion COMPLETED 🥇";
    }


}

let list = new SinglyLinkedList();

list.push(120);
list.push(130);
list.push(140);

// list.traverse()

// console.log(list.pop())
// console.log(list.shift())

// console.log(list.unshift(10))

// console.log(list.get(2))

// console.log(list.set(10, 1))

console.log(list.insert(125, 1));


list.traverse();

// console.log("Linked List -> ", list)
