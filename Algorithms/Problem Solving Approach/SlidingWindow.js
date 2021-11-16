// ------ Sliding Window ------- \\

// 1) This Pattern involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition, the window either closes and a new is created.
// Very useful for keeping a track of a subset of data in an array/string etc.

// Example  

// Write a function called maxSubArraySum which accepts an array of integers and a number called n.The function should calculate the maximum sum of n consecutive elements in the array ?

// This is a nested Loop Solution which can have a bad performance in case the array is Huge.
/// Time Complexity  -->  N2 \\\

function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {

        let temp = 0;
        for (let j = 0; j < num; j++) {
            // temp is keeping a track of the sum of three consecutive numbers
            temp = temp + arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3))


//// ------- Sliding Window Approach ------ \\\\
function slidingWindowMaxSum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    // Sum Of FIRST THREE Consecutive number
    /// -- arr[0] + arr[1] + arr[2] -- \\\

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

///   Time Complexity --> N    \\\
console.log(slidingWindowMaxSum([1, 2, 5, 2, 8, 1, 5], 3))

/// ---- DRY RUN --- \\\

// 1st step -- 1+2+5 = 8 , i = 3 , 
// 1) 8 - arr[num-num] + arr[num] = 8 - 1 + 2= 9
// 2) 9 - arr[4-3] + arr[4] = 9 - 2 + 8 = 15
