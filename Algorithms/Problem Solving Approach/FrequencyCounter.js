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

console.log(same("Same Function Output", [1, 2, 1], [4, 4, 1])); // True


// ------------ METHOD 2 ------------ \\

// ------------ Time Complexity N2   ------------ \\

function isSame1(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        // We check if the square of the element in arr1 is present in arr2
        let correctIndex = arr2.indexOf(arr1[i] ** 2);

        // IndexOf returns -1 if desired output is not present
        if (correctIndex === -1) {
            return false;
        }
        // If its a match , it removes it from the array
        arr2.splice(correctIndex, 1)
    }
    return true;
}

console.log("isSame 1 --> 1st Input's Output ", isSame1([1, 2, 3], [4, 1, 9])); // True
console.log("isSame 1 --> 2nd Input's Output ", isSame1([1, 2, 3, 2], [9, 1, 4, 4])); // True

// ------------ METHOD 3 (Refactored) ------------ \\
// Time Complexity -- 3N (BIG O Notation)
function frequencyCounter(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // for two loops the Big O complexity will be 2N but for 2 nested loops the Big O Complexity will be N2.So 2 separate is better than 2 nested loops
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }


    for (let key in frequencyCounter1) {
        
        // Checks if square is present
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        
        // Checks if the frequencyis same
        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;
        }
    }
  

    return true
}

console.log(frequencyCounter( [1, 2, 3, 2], [9, 1, 4, 4]));
