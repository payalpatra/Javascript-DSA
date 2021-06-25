// BUBBLE SORT ---> Compare And Swap 
//  --- Not So Effecient

// ** How is Bubble Sort?
// -- A Sorting algorithm where the largest values bubbles up to the top.


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
                console.log("No Swap Inside",noSwaps)
            }
        }

        // If there is noSwap or noSwap = true then it breaks
        if (noSwaps === true) {
            console.log("No Swap Outside",noSwaps)
            break;
        }
    }
    return arr
}

console.log(bubbleSort2([4, 12, 8, 28, 1, -10, 5, 9, 15]));


//--- Time Complexity ---  N^2 \\

// Best Case - O(N)
// Worst Case - O(N^2)




