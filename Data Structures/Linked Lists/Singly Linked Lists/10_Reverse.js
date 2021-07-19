// REVERSE - Reverse the linked list without making a copy.

/// ------ REVERSE PSEUDOCODE ------ \\\

// -- Swap the head and tail.
// -- Create a variable called next.
// -- Create a variable prev.
// -- Create a variable called node and initialize it to the head property.
// -- Loop through the list.
// -- Set next to be the next property on whatever node is
// -- Set the next property on the node to be whatever prev is.
// -- Set the prev to be the value of the node variable.
// -- Set the node variable to be the value of the next variable.

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

        // Returns node that is pushed
        return newNode;
    }

    // TRAVERSE
    traverse() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            console.log(current);
            current = current.next;
        }
    }

    //POP
    pop() {
        if (this.length === 0) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // Returns the node that is Poped
        return current;
    }

    // SHIFT -- Remove from Beginning 
    shift() {
        if (!this.head) return undefined;

        let current = this.head
        this.head = current.next
        this.length--;

        // Returns node that is removed
        return current;
    }

    // UNSHIFT - Add to the beginning 
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            let current = this.head;
            this.head = newNode;
            newNode.next = current
        }
        this.length++;

        // Returns the new node that is added to the beginning
        return newNode;
    }

    //Get - Retrieving node by its index
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        let count = 0;

        while (count != index) {
            current = current.next
            count++;
        }
        return current
    }

    // Set - Changing the value of a node based on its index
    set(newVal, index) {
        if (index < 0 || index >= this.length) return undefined;

        let newNode = new Node(newVal);
        let current = this.head;
        let count = 0;

        while (count !== index) {
            current = current.next
            count++;
        }
        current.val = newNode.val

    }

    // INSERT - Adding a new Node at a specific index
    insert(newVal, index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            return this.unshift(newVal)
        } else if (index === this.length) {
            return this.push(newVal)
        } else {
            let newNode = new Node(newVal)
            let current = this.head;
            let prev = current
            let count = 0;
            while (count !== index) {
                prev = current
                current = current.next
                count++;
            }
            prev.next = newNode
            newNode.next = current
            this.length++;
            return true
        }

    }

    // REMOVE - Removing a node at a specific index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) {
            return this.shift()
        } else if (index === this.length - 1) {
            return this.pop()
        } else {
            let current = this.head;
            let prev = current
            let count = 0;
            while (count !== index) {
                prev = current
                current = current.next
                count++;
            }
            prev.next = current.next
            this.length--;
        }
    }

    // REVERSE - Reversing the linked list
    reverse() {

        // Swap both head and the tail
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }

    }

}

let list = new singlyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);

// list.pop()
// list.shift()
// list.unshift(5)
// list.get(2)
// list.set(15, 2)
// list.insert(25, 2)
// list.remove(2)

list.reverse();
list.traverse()
// console.log(list)

