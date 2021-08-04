// BUBBLE SORT ---> Compare And Swap 
//  --- Not So Effecient

// ** How is Bubble Sort?
// -- A Sorting algorithm where the largest values bubbles up to the top.

// ---- Visualization ---- \\

// First Pass: 
// ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. 
// ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 
// ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 
// ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
// Second Pass: 
// ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) 
// ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
// ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) 
// Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.
// Third Pass: 
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 

// --- Since Bubble Sort Requires a lot swapping --- \\
//// -- Let's Talk About Swapping --- \\\\

/// Traditional Swapping Technique \\\
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

/// ES6 (Javascript Technique) \\\
const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

////////  ------ BUBBLE SORT PSEUDOCODE ------ \\\\\\\\

// Create a function that takes a unsorted array as the parameter
// Start Looping with a variable called i at the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i -1
// If the arr[j] is greater than arr[j+1], swap those two values !!
// Return the sorted array

// Note -- As we Progress the END becomes sorted !


//--- Not Following The Above Pseudocode --- \\
// Not Optimized VERSION of BUBBLE SORT
function bubbleSort1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap them
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr
}

// console.log(bubbleSort1([4, 12, 8, 28, 1, 5, 9, 15]));

// --- Following The Above Pseudocode --- \\
// Optimized VERSION of BUBBLE SORT
function bubbleSort2(arr) {
    // Optimized with noSwaps
    let noSwaps;
    // Optimzed with less No of PASSES
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        // PASS
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap them
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;             
            }
        }

        // If there is noSwap or noSwap = true then it breaks
        if (noSwaps === true) {
            break;
        }
    }
    return arr
}

console.log(bubbleSort2([4, 12, 8, 28, 1, -10, 5, 9, 15]));


//--- Time Complexity ---  N^2 \\

// Best Case - O(N)
// Worst Case - O(N^2)




