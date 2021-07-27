// REMOVE - Removing The Max from the Max Binary Heap

// ----- SINK DOWN ------

// -- The procedure for deleting the root from the heap (effectivly extracting)
// the maximum element in a max-heap or the minimum element in a min-heap) and restoring 
// the properties is called down heap (also known as bubble down, percolate-down,sift down,
// trickle down, heapify - down , cascade - down and extract-min/max)

/// ------ REMOVE PSEUDOCODE ------ \\\

// -- Swap the first value in the values property with the last one.
// -- Pop from the values property, so you can return the value at the end.
// -- Have the new root "Sink Down" to the correct spot.
//    -- Your Parent index starts at 0 (the root)
//    -- Find the index of the left child : 2 * index + 1 (make sure its not out of bound)
//    -- Find theindex of the right chilf : 2 * index + 2 (make sure it is not out of bound)
//    -- If the left or roght child is greater than the element .. swap,
//    -- If both left and right children are larger , swap the largest.
//    -- The child index you swapped until neither child is larger than the element.
//    -- Return the root.

// ---- VISULAIZATION ---- \\

/* 

TO Remove Max (41) from the HEAP  

          41      
         /  \
        39   33
        /\   /
      18 27 12 

[41,39,33,18,27,12]

STEP - 1 - The Max gets removed and the last element is made the root

          12
         /  \
        39   33
        /\   
      18 27 

[12,39,33,18,27]

STEP - 2 - Compare 12 with the larger children (12 with 39)
// If child is greater we swap

          39
         /  \
        12   33
        /\   
      18 27 

STEP - 3 - Compare 12 with 27 and Swap 

          39
         /  \
        27   33
        /\   
      18  12

[39,27,33,18,12]

*/


// HEAP
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // INSERT
    insert(element) {
        // To Insert element at the end of Values array
        this.values.push(element);

        // Function to find the correct position of the Inserted Element
        function bubbleUp() {
            // Idx of the element that is pushed
            let idx = heap.values.length - 1;
            // Value of the element that is to be inserted
            let element = heap.values[idx];
            while (idx > 0) {
                // Parrent Index
                let parentIdx = Math.floor((idx - 1) / 2);
                // Parent Value
                let parent = heap.values[parentIdx];
                if (parent >= element) break;
                // Swap ParentIdx and Idx
                heap.values[parentIdx] = element;
                heap.values[idx] = parent;
                // Current parentIdx is updated to idx and we loop over
                idx = parentIdx;
            }

        }
        bubbleUp();
    }

    // Remove
    remove() {
        // First Element & Max element (FOR MAX HEAP)
        let max = this.values[0];
        // Last Element
        let end = this.values.pop();
        if (this.values.length > 0) {
            // Last element assigned to first
            this.values[0] = end
        }
        // Find the Correct Spot of all other elements after Max is removed.
        this.bubbleDown()
        return max;
    }

    bubbleDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    // Keep Tracks of the index we will swap 
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break;
            // Swap of Greater Child and the element
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            // Idx is updated to the index of swaped Child
            idx = swap;

        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

// Remove
console.log(heap.remove())

// Heap After Removal
console.log(heap)