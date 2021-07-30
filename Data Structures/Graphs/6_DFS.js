// ----- DEPTH FIRST SEARCH ----- \\

// ------ DEPTH FIRST SEARCH PSEUDOCODE [ RECURSIVE ] ------ \\

// -- The function should accept a starting node
// -- Create a list to store the end result, to be returned at the very end
// -- Create an object to store visited vertices
// -- Create a helper function which accepts a vertex
//        -- The helper function should return early if the vertex is Empty
//        -- The helper function should place the vertex it accepts into the visited object
//           and push that vertex into the result array
//        -- Loop over all of the values in the adjacencyList for that vertex
// -- If any of those values have not been visited, recursively invoke the helper function with that vertex.


// ------ DEPTH FIRST SEARCH PSEUDOCODE [ ITERATIVE ] ------ \\

// -- The function should accept a starting node .
// -- Create a list to store the end result, to be returned at the very end.
// -- Create an object to store visited vertices.
// -- Add the starting vertex to the stack and mark it visited.
// -- While the stack has something in it:
//     -- Pop the next vertex from the stack
//     -- If that vertex hasn't been visited yet:
//             - Mark it as vistied
//             - Add it to the result list
//             - Push all of its neighbors into the stack
// -- Return the result array

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
    // ADD EDGE
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
    // REMOVE VERTYX
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            for (let v of this.adjacencyList[vertex]) {
                this.removeEdge(v, vertex);
            }
        }
        delete this.adjacencyList[vertex];
    }
    // DEPTH FIRST SEARCH (RECURSIVE)
    DFSRecursive(start) {
        let result = [];
        let visited = {};
        let adjancyList = this.adjacencyList;
        function traverse(vertex) {
            // Graph traverse is Completed
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);
            adjancyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return traverse(neighbor);
                }
            });
        }
        traverse(start);
        return result;
    }

    // DEPTH FIRST SEARCH (ITERATIVE)
    DFSIterative(start) {
        let stack = [start];
        let result = [];
        let visited = {};
        let currentVertex;

        // Marks the vertex as visited
        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour);
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

console.log("RECURSIVE",graph.DFSRecursive("A"));
console.log("ITERATIVE",graph.DFSIterative("A"));

/*
OUTPUT --

RECURSIVE [ 'A', 'B', 'D', 'E', 'C', 'F' ]
ITERATIVE [ 'A', 'C', 'E', 'F', 'D', 'B' ]

*/