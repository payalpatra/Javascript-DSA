// ----- REMOVE VERTEX ----- \\

// ------ REMOVING VERTEX PSEUDOCODE ------ \\

// -- This function should accept a vertex to remove.
// -- The function should loop as long as there are any other vertices in the adjacency list for that vertex.
// -- Inside of the loop, call our removeEdge function with the vertex we are removing any values in the adjacency
// -- list for that vertex.
// -- Delete the key in the adjacency List

// ----- VISULAIZATION ------ \\

/*
{
    Bhubaneswar: [ 'Talcher', 'Cuttack' ],
    Cuttack: [ 'Khordha', 'Bhubaneswar' ],
    Khordha: [ 'Cuttack' ],
    Talcher: [ 'Bhubaneswar' ]
  
}

graph.removeVertex('Cuttack')

{
    Bhubaneswar: [ 'Talcher', 'Cuttack' ],
    Cuttack: [ ],
    Khordha: [ ],
    Talcher: [ ]

}

*/

// Graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add Vertex 
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    // Add Edge 
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }
        return undefined;
    }
    // Remove Edge 
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v != vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v != vertex1);
        }
        return undefined;
    }

    // Remove Vertex
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length !== 0) {
            let adjacencyVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacencyVertex)
        };
        delete this.adjacencyList[vertex]
    }

}

let graph = new Graph();


graph.addVertex("Bhubaneswar")
graph.addVertex("Cuttack")
graph.addVertex("Khordha")
graph.addVertex("Talcher")

graph.addEdge("Talcher", "Bhubaneswar")
graph.addEdge("Cuttack", "Khordha")
graph.addEdge("Cuttack", "Bhubaneswar")

// graph.removeEdge("Cuttack", "Bhubaneswar")

console.log(graph)
graph.removeVertex('Cuttack')

console.log(graph)