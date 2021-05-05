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
console.log(charCount("Hey There"));
