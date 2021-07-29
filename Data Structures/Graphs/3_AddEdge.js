// ----- ADD EDGE----- \\


// ------ ADDING EDGE PSEUDOCODE ------ \\

// -- This function should accept two vertices, we can call them vertex1 and vertex 2.
// -- The function should find in the adjacencyList the key of vertex1 and vertex 2 to push the array.
// -- The function should find in the adjacencyList the key of vertex 2 and push vertex1 to the array.
// -- Don't worry about handling errors/ invalid vertices.

// ----- VISULAIZATION ------ \\
/*

{ 
    Bhubaneswar: [], 
    Cuttack: [],
    Khordha: [],
    Talcher: [] 
}

graph.addEdge("Bhubaneswar", "Cuttack")

{ 
    Bhubaneswar: [Cuttack], 
    Cuttack: [Bhubaneswar],
    Khordha: [],
    Talcher: [] 
}

*/

// GRAPH 
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
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
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


console.log(graph)