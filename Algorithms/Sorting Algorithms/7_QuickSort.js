// QUICK SORT --->

// ** How is QUICK Sort?
// --- It is Like Merge Sort , exploits the fact that arrays of 0 or 1 element are always sorted.
// --- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.
// --- Once the pivot is positioned appropriately , quick sort can be applied on either side of the pivot.

// ** How Does QUICK SORT work ??

//-- PICK A PIVOT ELEMENT (Let's say the first one is PIVOT)

// LET'S SAY PIVOT =  5
//  1--        [5,2,1,8,4,7,6,3]
//  2--       [3,2,1,4 ,5, 7,6,8]   --. This way we know the element 5 is in correct spot.
//  3-- We pick a pivot element for the left side array of the PIVOT element i.e [3,2,1,4]
//  5-- Let's say 3 is the pivot element for left side and position it such that the elements in the left side are smaller than the pivot and elements in the right side and greater than the pivot.
//  6--       [1,2 ,3, 4,5,7,6,8]
//  7-- Repeat step 3 i.e [1,2]
//  8-- Let's say 1 is the pivot element for left side
//  9-- [1,2] -- This way we have sorted the left array.
// 10-- Repeat Same thing for the right side to end up with the sorted array.

////////  ------ PIVOT HELPER ------ \\\\\\\\

// -- Given an array this helper function should assign an element as the pivot .
// -- It should then rearrange elements in the arrays so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
// -- The Order of elements on either side of the pivot does not matter.
// -- The helper should not create a new array.
// -- When complete, the helper should return the index of the pivot.

////////  ------ PIVOT HELPER PSEUDOCODE ------ \\\\\\\\

// -- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array lenght minus 1, respectively )
// -- Grab the pivot from the start of the array
// -- Store the current pivot index in a variable (this will keep track of where the pivots should end up)
// -- Loop through the array from the start untill the end
//           -- If the pivot is greater than the current element, increament the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e the pivot) with the pivot index.
// Return the pivot index

function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
    }

    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

    return swapIdx;
}


////////  ------ QUICK SORT PSEUDOCODE ------ \\\\\\\\

// -- Call the pivot helper on the array
// -- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
// -- Your base case occurs when you consider a subarray with less than 2 elements.

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right);
        // The pivotIndex gets postioned at the correct place.

        // Left
        quickSort(arr, left, pivotIndex - 1);
        // Right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr
}

console.log(quickSort([4, 3, 5, 8, 7, 6, 1, 2]));


// --- Time Complexity --- \\

// BEST - O(N log N)
// AVERAGE - O(N log N)
// WORST - O(N^2)

// --- Space Complexity --- \\
// O(log N)
