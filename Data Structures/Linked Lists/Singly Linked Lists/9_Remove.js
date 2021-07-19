// REMOVE - Remove node at a specific item

/// ------ REMOVE PSEUDOCODE ------ \\\

// -- If the index is less than zero or greater than the length , return false.
// -- If the index is the same as the length-1 ,Pop.
// -- If the index is 0 , shift .
// -- Otherwise, using the get method, access the node at the index - 1.
// -- Set the next property on that node to be the new Node to be the previous next.
// -- Set the next Property on that node to be the next of the next node
// Decrease  the length
// Return true

// Node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Singly Linked List 
class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // PUSH - Add node at the End
    push(val) {

        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++
        return
    }
    //TRAVERSE
    traverse() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            console.log(current)
            current = current.next;
        }
    }

    // POP - Remove node from the end
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current
            current = current.next;
        }
        this.tail = newTail;
        newTail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    //SHIFT - Remove node from the Beginning
    shift() {
        if (!this.head) return undefined;

        let current = this.head;
        this.head = current.next;
        this.length --
    }

    // UNSHIFT - Add node to the beginning
    unshift(val) {
        let newNode = new Node(val)
        let current = this.head;

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.head = newNode;
            newNode.next = current
        }
        this.length++
        return newNode
    }

    // GET - Retrieving a node by its postion
    get(index) {
        if (index < 0 || index >= this.length) {
            console.log("Undefined")
            return
        }

        let current = this.head;
        let count = 0;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current
    }
    // SET- Changing the value of a node based on its postion
    set(newVal, index) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = newVal;
            return true;
        }
        return false;
    }
    // INSERT - Adding a new node to a specific position
    insert(newVal, index) {
        if (index < 0 || index > this.length) {
            return false
        } else if (index === this.length) {
            this.push(newVal)
            return true;
        } else if (index === 0) {
            this.unshift(newVal)
            return true;
        } else {
            let newNode = new Node(newVal)
            let current = this.head
            let prev = current
            let count = 0
            while (count !== index) {
                count++;
                prev = current
                current = current.next
            }
            prev.next = newNode
            newNode.next = current
            this.length++
        }
    }
    // REMOVE - Removing a node at a specific positon
    remove(index) {
        if (index < 0 || index >= this.length) {
            return false
        } else if (index === this.length - 1) {
            this.pop()
            return true
        } else if (index === 0) {
            this.shift()
            return true
        } else {
            let current = this.head;
            let prev = current;
            let count = 0;

            while (count !== index) {
                prev = current;
                current = current.next
                count++;
            }
            prev.next = current.next;
        }
        this.length--;
    }
}

let list = new singlyLinkedList()
list.push(10)
list.push(20)
list.push(30)
list.push(40)

// list.traverse()
// list.pop()
// list.shift()
// list.unshift(5)
// console.log(list.get(2))
// list.set(5, 0)
// list.insert(25, 2)

// list.traverse()
list.remove(1)
// list.traverse()
console.log(list)

