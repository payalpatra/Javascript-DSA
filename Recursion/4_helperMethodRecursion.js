/// ----- Helper Method Recursion ----- \\\
// --- This is Just a pattern that can help to implement recursion --- \\\

function collectOddValues(arr) {
    let result = []

    function helper(inputArr) {
        // Modify the result
        if (inputArr.length === 0) {
            return;
        }

        if (inputArr[0] % 2 !== 0) {
            result.push(inputArr[0])
        }
        helper(inputArr.slice(1))
    }
    helper(arr)
    return result
}
console.log(collectOddValues([1, 2, 3, 5, 18, 9, 10]))