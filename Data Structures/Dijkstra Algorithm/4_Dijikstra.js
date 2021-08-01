// --- DIJKSTRA APPROACH --- \\

// -- Every time we look to visit a new node, we pick the node with the smallest known
//    distance to visit first.
// -- Once we've moved to the node we're going to visit, we look at each of its neighbours.
// -- For each neighbouring node, we calculate the distance by summing the total edges that lead to
//    node we're checking from the starting node.
// -- If the new total distance to a new node is less than previous total, we store the new shorter distance for the node.

// ------------------------------------- DIJKSTRA PSEUDOCODE --------------------------------- \\

// -- The  fucntion should accept a starting and ending vertex.
// -- Create an object (WE'LL CALL IT DISTANCES) and set each key to be every vertex in the adjacency list
//    with a value of infity, except for the starting vertex which should have a value of 0.
// -- After setting a value in the distances object, add each vertex with a priority of infinity to the priority nodes,
//    except the starting vertex, which should have a priority of 0 because that's where we begin.
// -- Create another object called previous and set each key to be every vertex in the adjacency list with value null.
// -- Start looping as long as there is anything in the priority nodes.
//        - dequeue a vertex from the priority nodes
//        - If that vertex is the same as the ending vertex - we are done !
//        - Otherwise loop through each value in the adjacency list at the vertex
//                - Calculate the distance to that vertex from the starting vertex
//                - If the distance is less than what is currently stored in our distances object
//                    - Update the distances object with new lower distance
//                    - Update the previous object to conatin that vertex
//                    - enqueue the vertex with the total distance from the start node

// Initial Structures \\
/*
PriorityQueue {
  values: [
    { val: 'A', priority: 0 },       
    { val: 'B', priority: Infinity },
    { val: 'C', priority: Infinity },
    { val: 'D', priority: Infinity },
    { val: 'E', priority: Infinity },
    { val: 'F', priority: Infinity } 
  ]
}

DISTANCES {
  A: 0,
  B: Infinity,
  C: Infinity,
  D: Infinity,
  E: Infinity,
  F: Infinity
}

PREVIOUS { A: null, B: null, C: null, D: null, E: null, F: null }
*/

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    // ENQUEUE
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }
    // DEQUEUE
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
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
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({ node: vertex2, weight });
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
        }
    }
    // DIJKSTRA
    dijkstra(start, end) {
        let nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let path = []; // Return at end
        let smallest;
        // Building Up the Initial State
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        // As long as there is something to visit
        while (nodes.values.length) {
            // Gives the smalles value
            smallest = nodes.dequeue().val;
            if (smallest === end) {
                // WE ARE DONE 
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {

                for (let neighbour in this.adjacencyList[smallest]) {
                    // Adjacent node of smallest node
                    let nextNode = this.adjacencyList[smallest][neighbour]
                    // Calculate new distance to neighbouring node
                    // Candidate is the current distance for the node + the distance of neighbour
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node
                    if (candidate < distances[nextNeighbour]) {
                        // Updating new smallest distance to neighbour
                        distances[nextNeighbour] = candidate;
                        // Updating Previous - How we got to neighbour
                        previous[nextNeighbour] = smallest
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbour, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "F"));
