// UNSHIFT - Adding a new node from the Beginning of the Linked List.

/// ------ UNSHIFT PSEUDOCODE ------ \\\

// -- The function should accept a value.
// -- Create a new node using the value passed to the function.
// -- If there is no head property on the list, set the head and tail to be the newly created node.
// -- Otherwise, set the newly created node's next property to be the current head property on the list.
// -- Set the head property on the list to be that newly created node.
// -- Increament the length of the list by 1.
// -- Return the list.


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // PUSH 
    push(val) {
        let newNode = new Node(val);

        // If the list was empty
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // If the list was not empty
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
    }

    // TRAVERSE 
    traverse() {
        if (!this.head) console.log("The list is empty")

        let current = this.head;
        while (current) {
            console.log(current)
            current = current.next;
        }
    }

    // POP 
    pop() {
        if (this.length === 0) console.log("List is empty")

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail;
        this.tail.next = null;
        if (this.length === 0) {
            this.length = null;
        }
        this.length--;

        console.log("POPED")
    }

    // SHIFT
    shift() {
        if (this.length === 0) console.log("List is empty")
        let current = this.head;
        this.head = current.next

        if (this.length === 0) {
            this.length = null;
        }
        this.length--;
        console.log("SHIFT", list)
    }


    // UNSHIFT
    unshiftNode(val) {
        let newNode = new Node(val)
        // Store the current head
        let current = this.head

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            // Update the current head to point to the new node
            this.head = newNode
            // Update new Node's next to point to the previous head
            newNode.next = current
        }
        this.length++
        console.log("UNSHIFT", list)
    }
}

let list = new SinglyLinkedList()


list.push(20)
list.push(30)
list.push(40)
// list.traverse()
// list.pop()
// list.shift()

list.unshiftNode(10)