// RADIX SORT --->

// ** How is RADIX Sort?

// --- Radix Sort is a special sorting algortihm that works on lists of numbers.
// --- It never makes comparisions between elemenets .
// --- It exploits the fact that information about the size of a number is encoded in the number of digits.
// --- More digits means bigger number.

////////  ------ RADIX SORT FIRST HELPER ------ \\\\\\\\

// -- In order to implement radix sort, it's helpful to build a few helper functions first:
// -- getDigit(num,place) - returns the digit in num at the given place value .


// Returns the digit at a particular place (once , tenth etc) of the whole number
// console.log("Absolute value of 345", Math.abs(345))
// Example-- Power of place 2 signifies 100th place
// console.log("Power of required Place", Math.pow(10, 2))
// console.log(Math.abs(345) / Math.pow(10, 2))
// console.log(Math.floor(Math.abs(345) / Math.pow(10, 2)))

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

////////  ------ RADIX SORT SECOND HELPER ------ \\\\\\\\

// Return the number of digits in a number
function digitCount(num) {
    let strNum = String(num)
    if (num < 0) {
        strNum = strNum.slice(1, strNum.length)
    }
    return strNum.length
}


////////  ------ RADIX SORT THIRD HELPER ------ \\\\\\\\

// Given an array this function returns the number of digits of the number which has the maximum digits 
function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }

    return maxDigits
}


////////  ------ RADIX SORT PSEUDOCODE ------ \\\\\\\\

// --- Define a function that accepts a list of numbers 
// --- Figure out how many digits the largest number has
// --- Loop from k =0 up to this largest number of digits
// --- For each iteration of the loop:
//            -- Create buckets for each digit(0 to 9)
//            -- Place each number in the corresponding bucket based on its k'th 
// --- return the list

function radixSort(nums) {
    // Number of digits the largest Number Has 
    let maxDigitCount = mostDigits(nums)
    // K is the Number of PASSES 
    for (let k = 0; k < maxDigitCount; k++) {
        // Create buckets (i.e - Array of 10 empty arrays)
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < nums.length; i++) {
            // Digit or place (i.e once, tenth etc)
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums;
}

console.log("Radix Sort", radixSort([23, 345, 5467, 12, 2345, 9852]))



// --- Time Complexity --- \\

// N IS THE NUMBER OF ELEMENTS IN THE ARRAY AND K IS THE NUMBER OF DIGITS

// BEST - O(NK)
// AVERAGE - O(NK)
// WORST - O(NK)

// --- Space Complexity --- \\
// O(N+K)
