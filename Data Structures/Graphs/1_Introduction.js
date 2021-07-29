// What is a Graph ???

// -- A graph data structure consists of a finite (and possibly mutuable) set
// -- of vertices or nodes or points, together with a set of unordered pairs of these
// -- vertices for an undirected graph or a set of ordered pairs for a directed graph.


// Applications of Graphs 

// -- Social Network
// -- Location / Maping
// -- Routing algorithms
// -- Visual Hierarchy
// -- File System Optimizations
// -- Everywhere

// ------------- Terminology -------- \\

// -- Vertex - A node
// -- Edge - Connection between nodes
// -- Weighted/Unweighted - Values assigned to distances between vertices.
// -- Directed/Undireted - Directions assigned to distanced betweeen vertices.

/// Representation of Graphs !!!!


/* GRAPH

             A
           /  \
          /    B
         F      \
         \       C
          E      |
           \____ D

*/

/*
1) Using Adjancy Matrix

|_-_||_A_||_B_||_C_||_D_||_E_||_F_|
|_A_||_0_||_1_||_0_||_0_||_0_||_1_|
|_B_||_1_||_0_||_1_||_0_||_0_||_0_|
|_C_||_0_||_1_||_0_||_1_||_0_||_0_|
|_D_||_0_||_0_||_1_||_0_||_1_||_0_|
|_E_||_0_||_0_||_0_||_1_||_0_||_1_|
|_F_||_1_||_0_||_0_||_0_||_1_||_0_|

2) Hasing Table

{   
  A : [1,5],
  B : [0,2],
  C : [1,3],
  D : [2,4],
  E : [3,5],
  F : [4,0]
}


*/

/* GRAPH

            0
           /  \
          /    1
         5      \
         \       2
          4      |
           \____ 3

*/

/*

3) Adjacent List 

   [
 0   [1,5],
 1   [0,2],
 2   [1,3],
 3   [2,4],
 4   [3,5],
 5   [4,0]
   ]

*/


/* 

DIFFERENCES AND BIG O

|V| - Number Of Vertices
|E| - Number Of Edges


OPERATION         ADJECENCY LIST       ADJECENCY MATRIX

Add Vertex            O(1)                 O(|V^2|)
Add Edge              O(1)                   O(1)
Remove Vertex      O(|v|+|E|)              O(|V^2|)
Remove Edge           O(|E|)                 O(1)
Query              O(|v|+|E|)                O(1)
Storage            O(|v|+|E|)              O(|V^2|)
            
*/


// ADJECENCY LIST 

// 1) Can take up less space (in sparse graphs)
// 2) Faster to iterate over all edges.
// 3) Can be slower to lookeup specific edge.

// ADJECENCY MATRIX

// 1) Takes up more space (in sparse graphs)
// 2) Slower to iterate over all edges.
// 3) Faster to lookup specific edge.


// -- What will we use ?
// - We will be using an Adjacency List.
// - That's because most data in the real world tends to lend itself to sparser and/or larger graphs.


/// UNDIRECTED GRAPH
class Graph {
    constructor() {
        this.adjacencyList = {}
    }
}

