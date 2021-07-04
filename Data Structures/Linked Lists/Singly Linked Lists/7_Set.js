// SET - Changing the value of a node based on its position in the Linked List

/// ------ SET PSEUDOCODE ------ \\\

// -- This Function should accept value and an Index.
// -- Use your get function to find the specific node.
// -- If the node is not found return false.
// -- If the node is found , set the value of that node to be the value passed to the function and return true.



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

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // TRAVERSE
    traverse() {

        if (!this.head) {
            console.log("No Nodes Found To Traverse 😒")
            return;
        }

        let current = this.head;

        while (current) {
            console.log("Current", current)
            current = current.next
        }
    }

    // POP
    pop() {
        if (!this.head) {
            console.log("The list is empty 😒")
            return;
        }

        let current = this.head
        let newTail = current

        // [10]--> [20] --> [30]

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;

        this.length--
    }

    // SHIFT 
    shift() {
        if (!this.head) {
            console.log("The list was empty 😒");
            return;
        }

        let current = this.head;
        this.head = current.next
        this.length--;

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
            newNode.next = current
        }
        this.length++
    }

    // GET
    get(index) {
        if (index < 0 || index > this.length) {
            console.log("Undefined")
            return null;
        }

        let current = this.head;
        let count = 0;

        while (count != index) {
            current = current.next
            count++;
        }
        return current;
    }

    // SET
    set(newVal, index) {
        let foundNode = this.get(index)

        if (foundNode) {
            foundNode.val = newVal;
            return true;
        }
        return false;

    }


}


let list = new SinglyLinkedList()

list.push(20)
list.push(30)
list.push(40)


// list.pop()

// list.shift()

// list.unshift(10)

// list.get(2)

console.log(list.set(10, 0))

// list.traverse()
