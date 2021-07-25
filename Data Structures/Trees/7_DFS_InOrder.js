// ------- DEPTH FIRST SEARCH (PostOrder Traversal) ------- \\

// Traverse every child node before traversing the sibling nodes.

/// ------ DFS PostOrder PSEUDOCODE ------ \\\

// --  Create a variable to store the values of nodes visited.
// -- Store the root of the BST in a variable called current.
// -- Write a helper function which accepts a node
//        -- If the node has a left property, call the helper function with the left property on the node.
//        -- insert the value of the node to the variable that stores the values
//        -- If the node has a right property, call the helper function with the right property on the node.
// -- Invoke the helper function with the current variable.
// -- Return the array of values.

// Note - In INORDER We consider a node as visited if its entire left side is visited and then we move to its corresponding right side.


/* 

- VISUALIZING THE STEPS -

       10
      /  \
     6    15
    /\     \
   3  8    20

-- STEP - 1 --

visited - [3]

-- STEP - 2 --
visited - [3,6]

-- STEP - 3 --
visited - [3,6,8]

-- STEP - 4 --
visited - [3,6,8,10]

-- STEP - 5 --
visited - [3,6,8,10,15]

-- STEP - 6 --
visited - [3,6,8,10,15,20]

DFS POSTORDER - [ 3, 6, 8, 10, 15, 20 ]

*/

// Node
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Tree
class Tree {
    constructor() {
        this.root = null;
    }

    //INSERT
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode
        } else {
            let current = this.root;
            while (true) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this
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
    // Find 
    find(val) {
        let current = this.root;
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
    // BREADTH FIRST SEARCH - Visit all the sibling nodes before the child nodes
    BFS() {
        let current = this.root;
        let queue = [];
        let visited = [];

        queue.push(current)
        while (queue.length !== 0) {
            current = queue.shift();
            visited.push(current.val);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return visited;
    }
    // DFS - PreOrder 
    DFSpreOrder(){
        let current = this.root;
        let visited = [];

        function traverse(node) {
            visited.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }
    // DFS - PostOrder 
    DFSpostOrder(){
        let current = this.root;
        let visited = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(current);
        return visited;
    }
    // DFS - InOrder 
    DFSinOrder(){
        let current = this.root;
        let visited = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            visited.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(current)
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



// console.log(tree.find(6))
// console.log(tree.BFS());
/*
OUTPUT - [ 10, 6, 15, 3, 8, 20 ]
*/

// console.log(tree.DFSpreOrder());
/*
OUTPUT - [ 10, 6, 3, 8, 15, 20 ]
*/

// console.log(tree.DFSpostOrder());
/*
OUTPUT - [ 3, 8, 6, 20, 15, 10 ]
*/

console.log(tree.DFSinOrder());
/*
OUTPUT - [ 3, 6, 8, 10, 15, 20 ]
*/