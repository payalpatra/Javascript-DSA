// ** Purpose
// -- Suppose you want to count the number of times a smaller string appears in a loger

// Long String -- wowomgzomg
// Short String - omg

// PSEUDOCODE

// Loop over the long string
// loop over the shorted string
// If the characters don't match, break out of the inner loop
// If the charcters do match , keep going
// If you complete the inner loop and find a match, increament the count of matches.
// Return


function findSequence(str, pattern) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {

            if (pattern[j] !== str[i + j]) {

                // This breaks the inner Loop and i is increamented
                break;
            }
            // If the inner loop does not break and j has reached the length of the pattern .
            // The pattern is found
            if (j === pattern.length - 1) count++;

        }
    }
    return count
}

console.log(findSequence("lorie loled", "pop"));
