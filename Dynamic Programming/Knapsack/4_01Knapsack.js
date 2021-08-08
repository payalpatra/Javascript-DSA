// -- What is the difference between the Memoization and Top Down Approach 

// Recursive --> Base Condition
// Memoization --> RC + [TABLE]

// IN TOP DOWN APPROACH

/*

1) No Recursive calls

*/

// -- -- Why is it better ?
// -- Stack fills up gradually in Memoization


// - - - - - - - - TOP DOWN APPROACH - - - - - - - - \\

// STEP 1 - Initialization  
// STEP 2 - Change Recursive calls to iterative version

// -- -- Why we create n + 1 rows and W + 1 columns?
// First row and column is used for Initialization.

// Why initialization is important ?

function Knapsack(wt, v, W, n) {

    let dp = new Array(n + 1);

    // At this point an empty array is created
    // And Initialized 0th value of the rows and columns with 0
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(W + 1).fill(0)
    }

    // Top Down Approach
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < W + 1; j++) {
            if (wt[i - 1] <= j) {
                dp[i][j] = Math.max(v[i - 1] + dp[i - 1][j - wt[i - 1]], dp[i - 1][j])
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }

    return dp[n][W]
}

console.log(Knapsack([10, 20, 30], [60, 100, 120], 50, 3))

// Time Complexity: O(n * W) 
// Auxiliary Space :O(n * W) 