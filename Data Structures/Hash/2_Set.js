// HASH SET

/// ------ SET PSEUDOCODE ------ \\\

// -- Accepts a key and value
// -- Hashes the key
// -- Stores the key-value pair in the hash table array via separate chainig.

// HASH 
class Hash {
    constructor(size = 5) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0, char, value;
        let weired_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            char = key[i];
            value = char.charCodeAt(0) - 96;
            total = (total * weired_prime + value) % this.keyMap.length;
        }
        console.log(total)

        return Math.abs(total)
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            // Initialize an array if it does not exist
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return this.keyMap;
    }
}

let hash = new Hash();

console.log(hash.set("Hello world", "1"))
console.log(hash.set("I love Javascript", "2"))
console.log(hash.set("Javascript is the coolest programming Language", "3"))