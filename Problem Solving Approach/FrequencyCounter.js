// Write a function called same , which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value quared in the second array.
// The frequency of values must be the same.

// Example Outputs :
// same([1,2,3],[4,1,9]) // true
// same([1,2,3],[1,9])   // false (square of 2 is missing)
// same([1,2,1],[4,4,1]) // false (must have same frequency)

function same(arr1, arr2) {
    let nArr1 = arr1;
    let nArr2 = [...new Set(arr2)];
    let output = false;

    if (nArr1.length === nArr2.length) {
        for (let ele of nArr1) {
            for (let ele2 of nArr2) {
                Math.pow(ele, 2) === ele2 ? output = true : output;
            }
        }
        return output;
    } else {
        return output;
    }
}

console.log(same([1, 2, 1], [4, 4, 1]));
