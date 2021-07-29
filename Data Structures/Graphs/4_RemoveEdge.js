// ----- REMOVE EDGE----- \\

// ------ REMOVING EDGE PSEUDOCODE ------ \\

// -- This function should accept two vertices, we'll call them vertex1 and vertex2.
// -- The function should reassign the key of vertex1 to be an arrray that does not contain vertex2.
// -- The function should reassign the key of vertex2 to be an array that does not contain vertex1.
// -- Don't worry about handling errors/invalid vertices.

// ----- VISULAIZATION ------ \\

/*
{
    Bhubaneswar: [ 'Talcher', 'Cuttack' ],
    Cuttack: [ 'Khordha', 'Bhubaneswar' ],
    Khordha: [ 'Cuttack' ],
    Talcher: [ 'Bhubaneswar' ]
}

graph.remove("Cuttack","Bhubaneswar")

{
    Bhubaneswar: ['Cuttack' ],
    Cuttack: [ 'Khordha'],
    Khordha: [ 'Cuttack' ],
    Talcher: [ 'Bhubaneswar' ]
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
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }
    }
    // REMOVE EDGE
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v != vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v != vertex1);
        }
        return undefined;
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

graph.removeEdge("Cuttack", "Bhubaneswar")

console.log(graph)