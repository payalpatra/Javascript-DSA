/*

Given Input : 

        I1 I2 I3 I4    

val [] : 1  3  4  5
wt  [] : 1  4  5  7

W - 7

*/

// Choice Diagram 

/*
           Wi
        /     \
    wi <= W    wi > W
    /     \        \
   YES    NO        NO

*/
//  ----- Approach ----- \\

/*

1) Find the Inputs
2) Find the Base Condition

*/

/*

--- How to check base conditon for recursive function ---

- Think of the smallest valid Input

*/


function knapsackRecursive(weightArray, valueArray, capacity, n) {

    // Base Condition
    if (n === 0 || capacity === 0) return 0;

    if (weightArray[n - 1] <= capacity) {
        return Math.max(
            valueArray[n - 1] + knapsackRecursive(weightArray, valueArray, capacity - weightArray[n - 1], n - 1),
            knapsackRecursive(weightArray, valueArray, capacity, n - 1)
        )

    } else if (weightArray[n - 1] > capacity) {
        return knapsackRecursive(weightArray, valueArray, capacity, n - 1)
    }
    
}

console.log(knapsackRecursive([ 10, 20, 30 ], [ 60, 100, 120 ], 50, 3))

// Output - 220

// Time Complexity: O(2n) 
// Auxiliary Space :O(1) 
