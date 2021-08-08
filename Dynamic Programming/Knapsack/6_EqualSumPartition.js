// Goal - To check if we can divide the input array into two array such that the sum of all the elements in each array is equal (i.e the input sum)

// APPROACH - The array can be divided into two partions having equal sum only if the total sum of the array is an even number. 
// -- You have two find a subset from the array which has sum - sum/2. (If the sum/2 subset exist then return false else return true)


// This finds if there is a subset present in the array with the given sum
function subsetSum(array, size, sum) {

    // Create a Table/Matrix
    let subset = new Array(size + 1);
    for (let i = 0; i < subset.length; i++) {
        subset[i] = new Array(sum + 1);
    }

    // Initialize the Matrix
    for (let i = 0; i < size + 1; i++) {
        for (let j = 0; j < sum + 1; j++) {
            // when the array has no elements and sum is 0
            if (i === 0 && j === 0) {
                subset[i][j] = 0;
                // when the array is empty but sum has some value
            } else if (i === 0) {
                subset[i][j] = false;
                // When the array is not empty but the sum is 0
            } else if (j === 0) {
                subset[i][j] = true
            }

        }
    }

    // Filling up the Matrix
    // Since the first col and row is already filled we start from 1
    for (let n = 1; n < size + 1; n++) {
        for (let s = 1; s < sum + 1; s++) {
            // If the value is greater than sum
            if (array[n - 1] > s) {
                subset[n][s] = subset[n - 1][s]
            } else if (array[n - 1] <= s) {
                subset[n][s] = subset[n - 1][s] || subset[n - 1][s - array[n - 1]]
            }
        }
    }
    return subset[size][sum]

}


function EqualSum(arr, n) {
    // Find Sum of the whole array
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }

    // The sum of the whole array is odd.
    // It is not possible to divide it into two partition of equal sum.

    if (sum % 2 !== 0) return false;

    if (sum % 2 === 0) {
        // To check if there is a subset with sum/2 
        // Given an array, array size and sum - The approach will be same like subset problem
        return subsetSum(arr, n, sum / 2);
    }

}

console.log(EqualSum([3, 1, 1, 2, 2, 1], 6))