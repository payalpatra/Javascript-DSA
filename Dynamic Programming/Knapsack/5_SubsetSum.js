// Goal - To check if two numbers present in the array can make a sum equal to the given input sum
// Return true if the sum is found else return false

function subset(array, n, sum) {
    // Create an empty Matrix
    let subset = new Array(n + 1);
    for (let i = 0; i < subset.length; i++) {
        subset[i] = new Array(sum + 1);
    }

    // Initialization
    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (i === 0 && j === 0) {
                subset[i][j] = true;
            } else if (i === 0) {
                subset[i][j] = false;
            } else if (j === 0) {
                subset[i][j] = true;
            }
        }
    }

    for (let N = 1; N < n + 1; N++) {
        for (let S = 1; S < sum + 1; S++) {
            if (array[N - 1] <= S) {
                subset[N][S] = subset[N - 1][S - array[N - 1]] || subset[N - 1][S];
            } else if (array[N - 1] > S) {
                subset[N][S] = subset[N - 1][S];
            }
        }
    }

    return subset[n][sum];
}

console.log(subset([2, 3, 7, 8, 10], 5, 15));
