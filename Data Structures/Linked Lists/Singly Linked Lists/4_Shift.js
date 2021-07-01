// SHIFT - Remove node from the Beginning of the Linked List.

/// ------ SHIFT PSEUDOCODE ------ \\\

// -- If there are no nodes, return undefined.
// -- Store the current head property in a variable.
// -- Set the head property to be the current head's next property.
// -- Decreament the length by 1.
// -- Return the value of the node removed.

// Node \\ 
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Singly Linked List \\ 
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
    }
    // TRAVERSE
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current)
            current = current.next;
        }
    }
    //POP
    pop() {
        if (!this.head) console.log("Already a empty list")
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null;
        if (this.length === 0) {
            this.length = null;
        }
        this.length--;
        console.log(list)
    }

    // SHIFT -- Remove node from the beginning
    shiftNode() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next
        this.length--;
        console.log(`${current.val} is Removed from the Beginning LinkedList !😊`)
        if (this.length === 0) {
            this.length = null;
        }
        console.log("This is the New", list)
    }

}

let list = new SinglyLinkedList()

list.push(10)
list.push(20)
list.push(30)
list.push(40)

// list.traverse()
// list.pop()

list.shiftNode()

// OUTPUT :

/*
10 is Removed from the Beginning LinkedList !😊
This is the New SinglyLinkedList {
  head: Node { val: 20, next: Node { val: 30, next: [Node] } },
  tail: Node { val: 40, next: null },
  length: 3
}
*/