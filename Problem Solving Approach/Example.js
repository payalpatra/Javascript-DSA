// Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
    // return an object with keys that are lowercase alphanumeric characters in the string

    // ---- Make object to return at end ---- \\
    // ---- Loop over string, for each character ---- \\

    let output = {};
    let keys = [];

    str
        .toLowerCase()
        .split("")
        .forEach(function (str_) {
            if (str_ !== " ") {
                keys.push(str_);
            }
        });

    keys.forEach(function (key) {
        if (output[key]) {
            output[key]++;
        } else {
            output[key] = 1;
        }
    });

    return output;
    // ---- return object at end ---- \\
}
console.log(charCount("Your PIN number is 12345"));

/// ----  Method 2 ---- \\\

function charCount2(str) {
    let output = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        
        // if (/[a-z0-9]/.test(char)) {
        //   if (output[char]) {
        //     output[char]++;
        //   } else {
        //     output[char] = 1;
        //   }

        // output[char] ? output[char]++ :output[char] =1;
        // }

        if (
            (char.charCodeAt() > 47 && char.charCodeAt() < 58) ||
            (char.charCodeAt() > 96 && char.charCodeAt() < 123)
        ) {
            output[char] ? output[char]++ : (output[char] = 1);
        }
    }

    return output;
}
console.log(
    "I am the second method's output",
    charCount2("Your PIN number is 12345...!")
);

// ---- Notes ---- \\

// char.charCodeAt() > 47 && char.charCodeAt() < 58 ---> // Numeric (0 - 9)
// char.charCodeAt() > 64 && char.charCodeAt() < 91 ---> // Numeric (A - Z)
// char.charCodeAt() > 96 && char.charCodeAt() < 123 ---> // Numeric (a - z)