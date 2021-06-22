// Implement a function which accepts a sorted array, and counts the unique values in the arry, and counts the unique values
// in the array. There can be negative numbers in the array , but it will always be sorted.

// Input = [1,1,1,1,1,1,2]  Output = 2

// function countUniqueValues(arr) {
//     let unique = [...new Set(arr)].length;
//     return unique
// }

/// Time Complexity -- O(N) \\\

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    }
    let i = 0;
    for (j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j];
        }

    }
    return i + 1;

}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]))