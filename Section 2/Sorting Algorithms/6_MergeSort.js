// MERGE SORT --->  Split , Merge and Sort

// ** How is Merge Sort?
// --- It's a combination of spliting, merging and sorting.
// --- Exploits the fact that arrays of 0 or 1 element are always sorted.
// --- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.
// --- Divide and Conquer until we get 0 or 1 element arrays

// How Does Merge Sort WORK ??

// STEP 1 -- DIVIDE THE ARRAY

// --         [8,3,5,4,7,6,1,2]
//              /            \ 
//             /              \
//        [8,3,5,4]         [7,6,1,2]
//           /  \             /   \
//          /    \           /     \
//       [8,3]   [5,4]    [7,6]    [1,2]   
//        / \     / \      / \      / \
//       /   \   /   \    /   \    /   \
//      [8] [3] [5]  [4]  [7] [6] [1] [2]


// STEP 2 -- Compare And Merge

//  [3,8]      [4,5]      [6,7]     [1,2]
//    \         /           \        /
//     \       /             \      / 
//     [3,4,5,8]            [1,2,6,7]
//          \                   S/
//           \                 /
//            \               /
//            [1,2,3,4,5,6,7,8]


// ---- Important Notes ---- \\

// -- In order to implement Merge Sort,It's useful to first implement a function responsible for merging two sorted arrays.
// -- Given twon arrays which are sorted, this helper function should create a new array which is also sorted, and consisits of all of the elements in the two input arrays.
// The function should run in O(N+M) time and O(N+M) space and should not modify parameters passed to it.


////////  ------ MERGING ARRAYS PSEUDOCODE ------ \\\\\\\\

// -- Create an empty array, take a look at the smallest values in each input array.
// -- While there are still values we have not looked at...
//         -- If the value in the first array is smaller than the value in the second array, push the values in the first arrray into our results and move on the next value in the first array.
//         -- If the value in the first array is larger then the value in the second array , push the value in the second array into our results and move on to the next value in the second array.
//         -- Once we exhaust one array , push in all remaining values from the other arrays.

// STEPS
//  Start with two counters i and j at index 0 and 0
//  Compare elements of arr[i] with arr[j]

function mergeArrays(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        // Each element  of array1 is compared with each element of array2
        if (arr1[i] < arr2[j]) {
            // If the element of array1 is smaller it is pushed onto the results array
            results.push(arr1[i])
            i++
        } else {
            // If the element of array2 is smaller it is pushed onto the results array
            results.push(arr2[j])
            j++
        }
    }


    // Since the elements are all sorted 
    // the left over elements of array1 are pushed onto the results array.
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    // the left over elements of array2 are pushed onto the results array.
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }

    return results;
}

// console.log(mergeArrays([1, 10, 50], [2, 14, 99, 100]))

////////  ------ MERGING SORT PSEUDOCODE ------ \\\\\\\\


// Break up the array into halves until you have arrays that are empty or have one element.
// Once you have smaller sorted arrays,merge those arrays with other sorted arrays until you are back at the full length of the array.
// Once the array has been merged back together , return the merged (and sorted) array

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor((arr.length) / 2)


    // Splitting the Unsorted array into left and right arrays recursively
    let leftSide = mergeSort(arr.slice(0, mid))
    let rightSide = mergeSort(arr.slice(mid, arr.length))

    return mergeArrays(leftSide, rightSide)
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]))


// --- Time Complexity --- \\

// BEST - O(N log N)
// AVERAGE - O(N log N)
// WORST - O(N log N)

// --- Space Complexity --- \\
// O(N)

