// MAX BINARY HEAP INSERT - Reverse the linked list without making a copy.

/// ------ INSERT PSEUDOCODE ------ \\\

// -- Push the value into the values property on the heap.
// -- Bubble the value up to it's correct spot.
// -- Bubble up :
//     -- Create a variable called index which is the length of the values property -1
//     -- Create a variable called parent Index which is the floor of (inex-1)/2
//     -- Keep looping as long as the values element at the parent Index is less than
//        the values element at the child Index.
//                -- Swap the value of the values element at the parent Index with the value
//                   of the elemnet property at the child Index.
//                -- Set the index to be the parent Index  and start over !

// ---- VISULAIZATION ---- \\

/* 
---- MAX BINARY HEAP ----
Example --- 1

TO INSERT 100 into the HEAP  

          99      
         /  \
       70    65
       /\    /\
     44 45  40 53

STEP - 1 - Gets Inserted to left 

          99      
         /  \
       70    65
       /\    /\
     44 45  40 53
     /
    100 

STEP - 2 - Compare 100 with 40 and Swap 

          99      
         /  \
       70    65
       /\    /\
     100 45  40 53
     /
    44 

STEP - 3 - Compare 100 with 70 and Swap 

          99      
         /  \
       100    65
       /\    /\
      70 45 40 53
     /
    44 

STEP - 4 - Compare 100 with 99 and Swap 

         100      
         /  \
       99    65
       /\    /\
      70 45 40 53
     /
    44     

*/

/*

Example --- 2

TO INSERT 15 into the HEAP  

         100      
         /  \
       99    65
       /\    /\
      70 45 40 53
     /
    44    
    

STEP - 1 - Gets Inserted to the right of 44.
As the parent is already greater so we don't need to swap.

         100      
         /  \
       99    65
       /\    /\
      70 45 40 53
      /\
    44 15 

*/


class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    // INSERT
    insert(val) {
        // Push to the end
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        // Index of the value to be inserted  
        let idx = this.values.length - 1;
        // Value
        const val = this.values[idx];
        while (idx > 0) {
            // Find the parent Index of the value
            let parentIdx = Math.floor((idx - 1) / 2);
            // Value of Parent Index
            let parent = this.values[parentIdx];
            // Value is already in the correct place and is not required to swap
            if (parent >= val) break;
            // Swap the values of Parent index and Last Index (value)
            this.values[parentIdx] = val;
            this.values[idx] = parent;
            // Update idx as parent index
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(100);

console.log(heap);
