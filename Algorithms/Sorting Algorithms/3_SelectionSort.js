// SELECTION SORT --->  Swap at the end and put it at the beginning


// ** How is Selection Sort?
// --- Similar to Bubble Sort , but instead of first placing large values into sorted position, it places small values into sorted position.
// --- We loop through the array and update the minimum. 
// --- After the a single Pass we swap the initial with the minimum


// Swap them
//  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

////////  ------ SELECTION SORT PSEUDOCODE ------ \\\\\\\\

// Store the first element as the smallest values you have seen so far.
// Compare this item to the next item, in the array until you find a smaller number
// If a smaller number is found, designate that smaller number to be the new minimum and continue the end of the array.
// If the minimum is not the value (index) you initially began with, swap the two value.
// Repeat this with the next element until the array is sorted
// Return the sorted array
// Note -- As we Progress the START becomes sorted !


// ------ Visualization ---- \\

// arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4]
// and place it at beginning
// 11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
// 11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
// 11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
// 11 12 22 25 64 

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        // Shrink the scope 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                // update the lowest
                min = j
            }
        }
        // After Each PASS 
        // Swap if i is not the lowest
        if (i != min) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }

    }
    return arr
}

console.log(selectionSort([34, 22, 10, 19, 17]))

//--- Time Complexity --- O(N^2) \\

// Best Case - O(N^2)
// Worst Case - O(N^2)