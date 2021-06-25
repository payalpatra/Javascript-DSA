// SELECTION SORT --->  Swap at the end and put it at the beginning


// ** How is Selection Sort?
// --- Similar to Bubble Sort , but instead of first placing large values into sorted position, it places small values into sorted position.
// --- We loop through the array and update the minimum. 
// --- After the a single Pass we swap the initial with the minimum


 // Swap them
//  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

////////  ------ SELECTION SORT PSEUDOCODE ------ \\\\\\\\

// Store the first element as the smallest values you have seen so far.
// Compare this item to the next ite, in the array until you find a smaller number
// If a smaller number is found, designate that smaller number to be the new minimum and continue the end of the array.
// If the minimum is not the value (index) you initially begam with, swap the two value.
// Repeat this with the next element until the array is sorted
// Return the sorted array
// Note -- As we Progress the START becomes sorted !


