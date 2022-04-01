class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let tree = new Node()
tree.val = 1
tree.left = new Node(2)
tree.right = new Node(3)

tree.left.left = new Node(4)
tree.left.right = new Node(5)

tree.right.left = new Node(6)
tree.right.right = new Node(7)

tree.left.left.left = new Node(8)

tree.right.right.right = new Node(9)


/* 
           1
         /  \
        2    3
       /\    /\
      4  5  6  7
     /          \
    8            9

*/

// console.log(tree)

// Breadth First Iterative Approach
function BFS() {

    let queue = [tree];
    let visited = [];

    while (queue.length !== 0) {

        let row = [];
        let qlen = queue.length;

        for (let i = 0; i < qlen; i++) {
            let curr = queue.shift();
            row.push(curr.val);

            // Traverse to left and right nodes of the current node
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        visited.push(row)

    }
    return visited
}

// Print The Left View
function printLeftView() {

    let root = tree;

    let leftView = []

    function Traverse(node, level) {
        if (node === null) return;

        // First Element of the Level
        if (leftView.length === level) leftView.push(node.val);


        Traverse(node.left, level + 1);
        Traverse(node.right, level + 1);
    }

    Traverse(root, 0)
    return leftView;

}
console.log("Left View", printLeftView())


// Print The Left View
function printLRightView() {

    let root = tree;
    let rightView = []

    function Traverse(node, level) {
        if (node === null) return;

        Traverse(node.left, level + 1);
        // Last Element of the Level
        if (rightView.length === level) rightView.push(node.val);
        Traverse(node.right, level + 1);
    }

    Traverse(root, 0)
    return rightView;

}
console.log("Right View", printLRightView())