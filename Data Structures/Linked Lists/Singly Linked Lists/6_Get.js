// GET - Retrieving a node by its position

/// ------ GET PSEUDOCODE ------ \\\

// -- This Function should accept an Index.
// -- If the index is less than Zero or greater than or equal to the length of the list, return null. 
// -- Loop through the list until you reach the index and return the node at that specific index.


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
        const newNode = new Node(val);
        // Previously Empty List
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            // Nodes already exists
            this.tail.next = newNode;
            this.tail = newNode
        }
        // Increament Length
        this.length++;
    }

    // TRAVERSE
    traverse() {
        if (!this.head) console.log("The List is empty 😒")

        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next
        }
    }

    // POP
    pop() {
        if (!this.head) console.log("The List is empty")

        let current = this.head
        let newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null

        // Decreament Length 
        if (this.length === 0) {
            this.length = 0;
        } else {
            this.length--
        }

    }

    // SHIFT
    shift() {
        if (!this.head) console.log("No nodes found to shift 😒");

        let current = this.head
        this.head = current.next

        if (this.length === 0) {
            this.length = null
        } else {
            this.length--
        }
        console.log("SHIFT", list)
    }

    // UNSHIFT
    unshift(val) {
        let newNode = new Node(val)
        let current = this.head
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.head = newNode
            newNode.next = current
        }
        this.length++
        console.log("UNSHIFT", list)
    }

    getNode(index) {
        if (index < 0 || index > this.length) {
            console.log("Undefined")
            return
        }

        let current = this.head
        let count = 0;

        while (count !== index) {
            current = current.next
            count++;
        }
        console.log(current)

    }
}

let list = new SinglyLinkedList()

list.push(20)
list.push(30)
list.push(40)
// list.traverse()
// list.pop()
// list.shift()
// list.unshift(10)

list.getNode(2)
// Output -- Node { val: 40, next: null }