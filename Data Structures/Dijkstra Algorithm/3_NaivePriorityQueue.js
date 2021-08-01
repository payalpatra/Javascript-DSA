
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