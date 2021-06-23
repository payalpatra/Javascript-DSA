//  Creating Pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
// [-4,-3,-2,-1,0,1,2,5] -- The idea is to search for a pair with satisfies certain condition 


/// ------ Example ------- \\\

// Write a Function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist 

// function sumZero(arr, sum) {
//     for (let i = 0; i < arr.length; i++) {
//         let firstEle = arr[0]
//         let searchEle = arr[i]
//         if (firstEle + searchEle === sum) {
//             return [firstEle, searchEle]
//         } else {
//             return "No element found"
//         }

//     }
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3], -6));


/// Pointers Solution \\\

function pointerSumZero(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

}


console.log(pointerSumZero([-4,-3, -2, -1, 0, 1, 2, 3,10]))
