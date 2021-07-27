// ----- HEAPS ----- \\

// What is a MIN/Max Binary Search Heap ??

// -- In Max Binary Heap,parent nodes are always larger than child nodes.
// -- In MIN Binary Heap,parent nodes are always smaller than child nodes.

//  ------ MAX BINARY HEAP ------ \\

// -- Each Parent has at most two child Nodes in a Max Binary Heap.
// -- The value of each parent node is always greater than its child nodes.
// -- In a max Binary Heap the parent is greater than the children, 
//    but there are no guarantees between sibling nodes.
// -- A Binary heap is as compact as possible. All the children of each node
//     are as full as they cam be and left children are filled out first.

/* 
          41       
         /  \
       39    33
       /\    /
     18 27  12 

*/

/* 
        100       
         /  \
       19    36
       /\    /\
     17  3  25 1 
     /\
    2  7

*/


//  ------ MIN BINARY HEAP ------ \\

/* 
          1      
         /  \
        2    3
       /\    /\
     17 19  36 7
     /\
    25 100

*/

// Why do we need to know this ?

// -- Binary Heaps are used to implement Priority Queues,
//    which are very commonly used data structures.

// Note 1) - For any Index of an array N
//        The left child is store at 2N + 1
//        The right child is at 2N + 2
//      2) - For any child node at index N
//        Its parent is at index (N-1)/2 --(Floored)



// --- BIG O OF BINARY HEAPS (Both MIN AND MAX) --- \\

// INSERTION - O(log N)
// REMOVAL - O(log N)
// SEARCHING - O(N)
// ACCESS - O(N)


