/*
** What is a Linked List ?
-- A data Structure that contains a head, tail and length property.
-- Linked Lists consist of nodes, and each node has a value and a pointer to another node o null.
 
* Singly Linked List *

Head  Length = 4  Tail
 _____________________
|                     |
|                     |
[4]--->[6]--->[8]--->[2]---> 
   next   next   next   null


Comparison with arrays
-----------------------

LISTS --

- Do not have Indexes 
- Connected via nodes with a next Pointer.
- Random access is not allowed.
- Good at Insertion and Deletion.

ARRAYS --

- Indexed in Order 
- Insertion and deletion can be expensive
- Can Quickly be accessed at a specific Index.
*/


// Piece of Data --- val
// Reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    static getLists(...nodes) {
        return nodes
    }
}

/// Bad representation of adding new Nodes 

let first = new Node(20)
first.next = new Node(30);
first.next.next = new Node(40)


// console.log(Node.getLists(first, first.next, first.next.next))
// Output

/*
[
    Node { val: 'Hi', next: Node { val: 'There', next: [Node] } },
    Node { val: 'There', next: Node { val: 'Payal', next: null } },
    Node { val: 'Payal', next: null }
]
*/


// BIG O Notation

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)
