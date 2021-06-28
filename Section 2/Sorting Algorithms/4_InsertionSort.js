// INSERTION SORT --->  Inseting at the correct spot as we loop through the array


// ** How is Insertion Sort?
// --- Builds of the sort by gradually creating a larger left half which is always sorted.


////////  ------ INSERTION SORT PSEUDOCODE ------ \\\\\\\\

// Start by picking the second element in the array
// Now we compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e the left side) to place the element in the correct place. 
// Repeat until  the array is sorted 

// Note -- As we Progress the END becomes sorted !

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Current will be placed in the correct place after each Pass
        let current = arr[i];
        let j;
        // The start gets sorted as we progress. 
        // Hence we have to reduce the number of comparisions as the Number of PASSES Increase. 
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {

            console.log(current, " ", i, " ", j)

            arr[j + 1] = arr[j]

            console.log("*******")
            console.log(arr)
        }
        arr[j + 1] = current;
    }

    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]))

//--- Time Complexity --- O(N^2) \\

// Best Case - O(N)
// Worst Case - O(N^2)