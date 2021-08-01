// --- DIJKSTRA APPROACH --- \\

// -- Every time we look to visit a new node, we pick the node with the smallest known
//    distance to visit first.
// -- Once we've moved to the node we're going to visit, we look at each of its neighbours.
// -- For each neighbouring node, we calculate the distance by summing the total edges that lead to
//    node we're checking from the starting node.
// -- If the new total distance to a new node is less than previous total, we store the new shorter distance for the node.


class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue("A", 1);
priorityQueue.enqueue("B", 2);
priorityQueue.enqueue("C", 3);
priorityQueue.enqueue("E", 5);
priorityQueue.enqueue("F", 6);
priorityQueue.enqueue("D", 4);

priorityQueue.sort()
console.log(priorityQueue);