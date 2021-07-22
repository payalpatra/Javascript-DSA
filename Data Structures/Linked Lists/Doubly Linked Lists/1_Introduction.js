// -- What is Doubly Linked List ??
// -- It is almost identically to singly Linked List except every node has another pointer to the previous node !!
// -- More memory than Singly Linked List 


// Node
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// Doubly Linked Lists
class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
let list = new doublyLinkedList()
console.log(list)

// BIG O Notation

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)