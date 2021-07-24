// ------- BREADTH FIRST SEARCH ------- \\

// Traverse every sibling node before traversing the child nodes.

/// ------ BFS PSEUDOCODE ------ \\\

// -- Create a queue and a variable to store the values of nodes visited.
// -- Place the root node in the queue.
// -- Loop as long as there is anything in the queue 
//        -- dequeue a node from the queue and push the value of the node into the
//             variable that stores the nodes.
//        -- If there is a left property on the nodes dequeued - add it to the queue.
//        -- If there is a right property on the node dequeued - add it to the queue.
// -- Return the variable that stores the values.

/* 

- VISUALIZING THE STEPS -

       10
      /  \
     6    15
    /\     \
   3  8    20

-- STEP - 1 --
* Add 10 to the Queue, Start Loop (While there is a Loop)
queue - [10]
visited - [10]

-- STEP - 2 --
* Remove 10 and push left node of 10 (i.e - 6) and right node of 10 (i.e -15).
* Remove first node added to the queue and push it to vistied queue .
* Again check if there is a left & right of 6 and push it to the queue 

queue - [15,3,8]
visited - [10,6]

-- STEP - 3 --
queue - [3,8,20]
visited - [10,6,15]

-- STEP - 4 --
queue - []
visited - [10,6,15,3,8,20]

BFS - [10,6,15,3,8,20]

*/

// Node
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    }
}

// Tree
class Tree {
    constructor() {
        this.root = null;
    }

    // INSERT
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (val === current) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    // FIND
    find(val) {
        if (!this.root) return false;
        let current = this.root
        let found = false;
        while (current && found === false) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }

    // BREADTH FIRST SEARCH - Traverse siblings before child
    BFS() {
        let current = this.root;
        let queue = [];
        let visited = [];
        queue.push(current);

        while (queue.length !== 0) {
            // Remove from the beginning
            current = queue.shift();
            visited.push(current.val);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return visited;
    }

}

let tree = new Tree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// tree.find(15)

console.log(tree.BFS());