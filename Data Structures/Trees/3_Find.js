// BST FIND - To search for a val in the tree

/// ------ FIND PSEUDOCODE ------ \\\

// -- Starting at the root
// -- Check if there is a root
// -- If there is a root, check if the value of the node is the value we are looking for.
//       - If we found it, we are done
// -- If not, check to see if the value is greater than or less than the value of the root.
// -- If it is greater
//      - Check to see if there us a node to the right
//            - If there is, move to that node and repeat these steps
//            - If there is not, we are done searching.
// -- If it is less
//      - Check to see if there us a node to the left
//            - If there is, move to that node and repeat these steps
//            - If there is not, we are done searching.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(13);
tree.insert(11);
tree.insert(16);

console.log(tree.find(16)); // true
console.log(tree.find(3)); // false
