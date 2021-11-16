// ----- BREADTH FIRST SEARCH ----- \\

// ------ BREADTH FIRST SEARCH PSEUDOCODE ------ \\

// -- This function should accept a starting vertex
// -- Create a queue (you can use an array) and place the starting vertex in it.
// -- Create an array to store the nodes visited
// -- Create an object to store nodes visited
// -- Mark the starting vertex as visited
// -- Loop as long as there is anything in the queue
// -- Remove the first vertex from the queue and push it into the array that stores nodes visited
// -- Loop over each vertex in the adjacency list for the vertex you are visiting.
// -- If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex.


// GRAPH
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // ADD VERTEX
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    // ADD EDGES
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }
    }
    // REMOVE EDGE
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                (v) => v !== vertex2
            );
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                (v) => v !== vertex1
            );
        }
    }
    // REMOVE VERTEX
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            for (let v of this.adjacencyList[vertex]) {
                this.removeEdge(vertex, v);
            }
            delete this.adjacencyList[vertex];
        }
    }
    // RECURSIVE DEPTH FIRST SEARCHING
    DFSRecursive(start) {
        let result = [];
        // Keeps track of the visited vertices
        let visited = {};
        let adjacencyList = this.adjacencyList

        function traverse(vertex) {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    traverse(neighbour)
                }
            })
        }
        traverse(start)
        return result;
    }
    // ITERATIVE DEPTH FIRST SEARCHING
    DFSIterative(start) {
        let stack = [start];
        let result = [];
        let visited = {};

        visited[start] = true
        while (stack.length) {
            let currentVertex = stack.pop();
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            })
        }
        return result;
    }
    // BREADTH FIRST SEARCHING
    BFSIterative(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// console.log("RECURSIVE", graph.DFSRecursive("A"));
console.log("ITERATIVE", graph.DFSIterative("A"));

console.log("ITERATIVE", graph.BFSIterative("A"));


