// ------- DEPTH FIRST SEARCH (PreOrder Traversal) ------- \\

// Traverse every child node before traversing the sibling nodes.

/// ------ DFS PreOrder PSEUDOCODE ------ \\\

// --  Create a variable to store the values of nodes visited.
// -- Store the root of the BST in a variable called current.
// -- Write a helper function which accepts a node 
//        -- Push the value of the node to the variable that stores the values
//        -- If the node has a left property, call the helper function with the left property on the node.
//        -- If the node has a right property, call the helper function with the right property on the node.
// -- Invoke the helper function with the current variable.
// -- Return the array of values.

// Note - In PREORDER We Visit the node first and then move to left or right.
/* 

- VISUALIZING THE STEPS -

       10
      /  \
     6    15
    /\     \
   3  8    20

-- STEP - 1 --

visited - [10]

-- STEP - 2 --
visited - [10,6]

-- STEP - 3 --
visited - [10,6,3]

-- STEP - 4 --
visited - [10,6,3,8]

-- STEP - 5 --
visited - [10,6,3,8,15]

-- STEP - 6 --
visited - [10,6,3,8,20]

DFS PREORDER - [ 10, 6, 3, 8, 15, 20 ]

*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

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
                if (val == current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode
                        return this;
                    }
                    current = current.left
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right
                }
            }
        }
    }
    // PUSH 
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
    // BFS - Traverse the sibling before the child Nodes
    BFS() {
        let current = this.root;
        let queue = [];
        let visited = [];
        // Initially Queue contains the root node 
        queue.push(current);

        while (queue.length !== 0) {

            // Current is updated by removing the value at the beginning of the queue
            current = queue.shift();
            // After removal of the first value from queue, we push it to visited 
            visited.push(current.val);
            // To check if there is left and right of current
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return visited;
    }
    // DEPTH FIRST SEARCH - Traverse child before siblings
    // -- PREORDER-
    DFSpreOrder() {
        let visited = [];
        let current = this.root;

        function traverse(node) {
            visited.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);

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
// console.log(tree.BFS());
/*
OUTPUT - [ 10, 6, 15, 3, 8, 20 ]
*/

console.log(tree.DFSpreOrder());
/*
OUTPUT - [ 10, 6, 3, 8, 15, 20 ]
*/
