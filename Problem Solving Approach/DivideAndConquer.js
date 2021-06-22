/// ---- Divide And Conquer ---- \\\
// The Pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity 

// -- EXAMPLE -- \\
// ** Given a sorted array of integers, Write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

function Search(arr, num) {

    for (let val of arr) {
        if (val === num) {
            return arr.indexOf(val);
        }
    }

}

// Linear Search \\
// --- Complexity --- O(N) \\
function Search2(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1
}

console.log(Search2([1, 2, 3, 4, 5, 6, 7], 4))

