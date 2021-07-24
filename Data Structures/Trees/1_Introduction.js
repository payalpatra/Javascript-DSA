// What is a tree ???

// Tree is a data structure that consists of nodes in a parent/child relationship
// List are linear but trees are non-linear

// -- TREE TERMINOLOGY -- \\

// Root - The top node in a tree.
// Child - A node directly connected to another node when moving away from the root.
// Parent - The converse notion child.
// Sibling - A group of nodes with the same parent.
// Leaf - A node with no children.
// Edge - The connection between one node and another node.

/// ---- BINARY SEARCH TRESS ---- \\\

// --- This is a special kind of tree in which each node can have atmost 2 children.
// --- They are sorted in a particular order .
// --- Every items less than the the node is located in the left and every number greater than the node are located to the right.

// Node
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.left = new Node(4);
tree.right = new Node(14)

console.log(tree)


// --- BIG O OF STACKS --- \\

// INSERTION - O(log n)
// SEARCHING - O(log n)

// ---- worst case --- \
// One sided BST - 0(N)