// ----- ADD VERTEX ----- \\


// ------ ADDING VERTEX PSEUDOCODE ------ \\

// -- Write a method called addVertex, which accepts a nameof a vertex.
// -- It should add a key to the adjacencyList with the name of the vertex and set its
// -- value to be an empty array.

// ----- VISULAIZATION ------ \\

/*
Graph.addVertex("Tokyo");

  {
    "Tokyo" : []
  }

*/

// Graph 
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
}

let graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("San Francisco");

console.log(graph)