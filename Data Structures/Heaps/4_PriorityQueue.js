// PRIORITY QUEUE - A data structure where each element has a priority.
//- Elements with higher priorities are served before elements with lower priorities.

/// ------ PRIORITY QUEUE PSEUDOCODE ------ \\\

// -- Write a min Binary Heap - lower number means higher prority
// -- Each Node has a val and a priority. Use  the priority to build the heap.
// -- Enqueue method accepts a value and priority,
//    -- Makes a new node, and puts it in the right spot based off of its priority
// -- Dequeue method dequeues root element, returns it, and rearranges heap using priority.

// Node
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    // enqueue
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        // Add the Node to the end
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while (idx > 0) {
            // Parent Index
            let parentIdx = Math.floor((idx - 1) / 2);
            // Parent
            let parent = this.values[parentIdx];
            // Element is in correct Index
            if (parent.priority <= element.priority) break;
            // Swap
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // Update the Index and Loop Over
            idx = parentIdx;
        }
    }

    dequeue() {
        let max = this.values[0];
        let end = this.values.pop();
        this.values[0] = end;

        this.bubbleDown();
        return max;
    }

    bubbleDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swap = null;
            let leftChild, rightChild;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let queue = new PriorityQueue();

queue.enqueue("High Priority", 1);
queue.enqueue("Second Priority", 2);
queue.enqueue("Fift Priority", 5);
queue.enqueue("Third Priority", 3);
queue.enqueue("Forth Priority", 4);
queue.enqueue("Last Priority", 6);

// dequeue
console.log(queue.dequeue());

console.log(queue);
