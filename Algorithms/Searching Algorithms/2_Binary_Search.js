// **   Binary Search Pseudocode ** !! \\
// Divide And Conquer \\

// -- This Function accepts an array and a value .
// -- Create twp variables a Left Pointer at the start of the arry , and a right Pointer at the end of the array.
// -- While the left pointer comes before the right pointer.
// --      .  *** Create a Pointer in the middle 
//            *** If You find the value you want, return the index 
//            *** If the value is small, move the left pointer up 
//            *** If the value is large, move the right pointer down
// If You never find the value , return -1

function BinarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2)

    while (arr[mid] !== num && start <= end) {
        if (num < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
        mid = Math.floor((start + end) / 2)
    }
    if (arr[mid] === num) {
        return mid
    } else {
        return "Number Not Found"
    }
}


console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8,], 5))

// Shorter Version 
function BinarySearch2(arr, num) {
    let start = 0;
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2)

    while (arr[mid] !== num && start <= end) {
        if (num < arr[mid]) end = mid - 1
        else start = mid + 1
        mid = Math.floor((start + end) / 2)
    }
    return arr[mid] === num ? mid : "Number Not Found"
}

console.log(BinarySearch2([1, 2, 3],5))


// Big O of Linear Search - O(N)


// **** BIG O BINARY SEARCH **** \\

// Best Case -- O(1)
// Worst Case -- O(log n)
// Average Case -- O(log n)

// How O(log n) ????

// FOR 16 ELEMENTS -- It takes 4 STEPS to complete the searching Operation -> 2^4 = 16 = O(log 16)
// FOR 32 ELEMENTS -- It takes 5 STEPS to complete the searching Operation -> 2^5 = 32 = O(log 32)

