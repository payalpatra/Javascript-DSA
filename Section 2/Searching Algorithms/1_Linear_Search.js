// ** Linear Search Pseudocode ** !! \\

// -- This Function accepts an array and a value .
// -- Loop through the array and check if the current array element is equal to the value.
// -- If its is , return the index at which the element is found.
// -- If the value is never found return -1.


function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) return i;

    }
    return -1

}

console.log(linearSearch([34, 56, 1, 2], 0))

// Big O of Linear Search - O(N)



// **** BIG O LINEAR SEARCH **** \\

// Best Case -- O(1)
// Worst Case -- O(N)
// Average Case -- O(N)

