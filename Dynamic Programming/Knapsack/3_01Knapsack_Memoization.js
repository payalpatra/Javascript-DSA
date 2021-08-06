function KnapsackRec(wt, v, W, n, dp) {

    // Base Condition
    if (W === 0 || n === 0) return 0;

    // Return dp if there is no value found 
    if (dp[n][W] !== -1) {
        return dp[n][W];
    }

    if (wt[n - 1] > W) {
        return KnapsackRec(wt, v, W, n, dp)
    } else {
        return dp[n][W] = Math.max(v[n - 1] + KnapsackRec(wt, v, W - wt[n - 1], n - 1, dp), KnapsackRec(wt, v, W, n - 1, dp))
    }

}

function Knapsack(wt, v, W, n) {
    // Initialize table 
    let dp = new Array(n + 1);

    // Initialize each value of the table with -1
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(W + 1).fill(-1)
    }

    return KnapsackRec(wt, v, W, n, dp)
}


console.log(Knapsack([10, 20, 30], [60, 100, 120], 50, 3))

// Time Complexity: O(n * W) 
// Auxiliary Space :O(n * W) 