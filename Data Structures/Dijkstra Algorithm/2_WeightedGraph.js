class Node {
    constructor(val, weight) {
        this.val = val;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    // ADD VERTEX
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    // ADD EDGE
    addEdge(vertex1, vertex2, weight) {

        let newNode1 = new Node(vertex1, weight);
        let newNode2 = new Node(vertex2, weight);

        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(newNode2);
            this.adjacencyList[vertex2].push(newNode1);
        }
    }
}

let graph = new Graph();

graph.addVertex("Bhubaneswar")
graph.addVertex("Cuttack")
graph.addVertex("Khordha")
graph.addVertex("Talcher")

graph.addEdge("Talcher", "Bhubaneswar", 30)
graph.addEdge("Cuttack", "Khordha", 40)
graph.addEdge("Cuttack", "Bhubaneswar", 50)

console.log(graph.adjacencyList)