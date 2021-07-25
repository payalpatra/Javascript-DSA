// What is a tree ???

// Tree is a data structure that consists of nodes in a parent/child relationship
// List are linear but trees are non-linear.
// * Trees are non- linear data structure that contains a root and child nodes.
// * Binary Trees can have values of any type, but atmost two children for each parent.
// * Binary Search Trees are a more specific version of binary trees where every node 
//   to the left of a parent is less than it's value and every node to the right is greater.
// Values in BST should be values which are comparable.

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


// Tree Traversal

// - The two techniques to traverse a trees is by - BFS & DFS

/*- BFS (Breadth First Seach)
/* The Breadth First Search ( BFS ) is an algorithm for traversing tree/graph data structures. 
It explores all the nodes at the present depth before moving on to the nodes at the next depth level.
*/

/*- DFS (Depth First Seach)
/* 
Depth-first search (DFS) is an algorithm for traversing tree/graph data structures. 
The algorithm starts at the root node and explores as far as possible along each branch before backtracking.
*/


// -- When to use the different DFS orders ?
// -- INORDER -- Used Commonly with BST's 
// -- PREORDER -- Can be used to export a tree structure so that it is easily constructed or copied.


// Time Complexity of BFS AND DFS is same.