// ----- HASH ----- \\

// Hash tables are collections of key-value pairs.
// -- Hash Tables are used to store key-value pairs.
// -- They are like arrays, but the keys are not ordered.
// -- Unlike arrays, hash tables are fast for all of the following operations :
// -- finding values, adding new values and removing values.

/// -- Note - Nearly every programming language has some sort of hash table data structure.
// - Because of their speed, ahsg tables are very commonly used.

// --  Python has dictionaries , js has objects and Maps , java , Go and Scala have Maps Ruby has Hashes.

// What makes a good Hash ?

// -- It should be fast.
// -- Doesn't cluster outputs at specific indices, but distributes uniformly.
// -- Deterministic (same input yields same output)

// UTF CHARACHTER CODES

// Numeric value associated
console.log("Numeric value", "a".charCodeAt(0)); // 97

// Positon of the albhabet
console.log("Position", "a".charCodeAt(0) - 96); // 1

// SIMPLE HASH FUNCTION
function hash(key, arrayLength) {
    let total = 0, value;
    for (let char of key) {
        value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLength;
    }
    return total
}

console.log("HASH FUNCTION", hash("orange", 10));

// PROBLEMS Associated with the above hash function

// 1) Only worry hashes strings (We won't worry about this)
// 2) Not constant time - Linear in key length
// 3) Could be a little more function

// REVISED HASH FUNCTION

function revisedHash(key, arrlength) {
    let total = 0, char, value;
    let weird_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        char = key[i];
        value = char.charCodeAt(0) - 1;
        total = (total * weird_prime + value) % arrlength;
    }
    return total;
}

console.log("REVISEDHASH FUNCTION", revisedHash("orange", 13))

/// Why to use PRIME NUMBER ?

// - The prime number in the hash is helpful in spreading out the keys more uniformly.
// - It's also helpful if the array that you are putting va;ues into has a prime length.
// - You don't need to know why. (Math is complicated !) But here are some links if you are curious.

/// --- Why so hash functions use prime numbers ?
/// --- Does making array size a prime number help in hash table implementation ?

/// Handling Collisions
function Revised(key, length) {
    let total = 0, char, value;
    let weird_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        char = key[i];
        value = char.charCodeAt(0) - 1;
        total = (total * weird_prime + value) % length;
    }
    return total;
}

console.log("REVISED FUNCTION ", Revised("orange", 13))

// HANDLING COLLISIONS 

//  -- 1) SEPARATE CHAINING - With separate chaining at each index in our array 
//        we store values using a more sophisticated data structure (eg an array or a linked list)
// --- This allows us to store multiple key-values pairs at the same index.

//// -- Visualization ---- \\\\

// darkblue ----> 4
// salmon   ----> 4

// Hash Table -- [1,2,3,4,5,6,7,8,9,10]

// We store both the values at index 4 but with nested data Structure
// [["darkblue", "#00008b"],["salmon", "#fa8072"]]

//  -- 2) LINEAR PROBING - Witj Linear probing when we find a collision, we search the array to find the next empty slot.
// ----- unlike with separate chainig, this allows us to store a single key-value at each index.

//// -- Visualization ---- \\\\

// darkblue ----> 4
// salmon   ----> 4

// Hash Table -- [1,2,3,4,5,6,7,8,9,10]
/// - We store darkblue at the slot 4 and then store salmon at the next empty slot.

// SEPARATE CHAINING - We can store more data than linear Probing


// ------------------ HASH TABLE CLASS ------------------ \\

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0, char, value;
        let weird_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            char = key[i];
            value = char.charCodeAt(0) - 96;
            total = (total * weird_prime + value) % this.keyMap.length;
        }
        return total;
    }
}

let hashString = new HashTable();
console.log("HASH CLASS", hashString._hash("orange"))

// --- BIG O OF HASH TABLES --- \\

// INSERTION - O(1)
// REMOVAL - O(1)
// ACCESS - O(1)