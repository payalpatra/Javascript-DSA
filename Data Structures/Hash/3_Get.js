// HASH GET

/// ------ GET PSEUDOCODE ------ \\\

// -- Accepts a key and value
// -- Hashes the key
// -- Retrieve the keyvalue pair in hash table
// -- Return undefined if there is no value for the key

// HASH
class Hash {
    constructor(size = 5) {
        this.hashTable = new Array(size);
    }

    // HASH THE KEY
    _hash(key) {
        let total = 0,
            char,
            value;
        let weired_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            char = key[i];
            value = char.charCodeAt(0) - 96;
            total = (total * weired_prime + value) % this.hashTable.length;
        }
        return Math.abs(total);
    }

    // SET THE KEY AND VALUES INTO TO HASH TABLE
    set(key, value) {
        let index = this._hash(key);
        if (!this.hashTable[index]) {
            this.hashTable[index] = [];
        }
        this.hashTable[index].push([key, value]);
    }

    // Get The VALUE
    get(key) {
        let index = this._hash(key);
        if (this.hashTable[index]) {
            let indexArray = this.hashTable[index]
            for (let values of indexArray) {
                if (values[0] === key) {
                    return values[1];
                }
            }
        }
        return undefined;
    }
}

let hash = new Hash();

hash.set("maroon", "#800000");
hash.set("yellow", "#FFFF00");
hash.set("olive", "#808000");
hash.set("salmon", "#FA8072");
hash.set("lightcoral", "#F08080");
hash.set("mediumvioletred", "#C71585");
hash.set("plum", "#DDA0DD");

// Returns the value 
console.log(hash.get("maroon"));