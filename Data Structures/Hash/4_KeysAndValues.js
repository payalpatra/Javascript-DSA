// KEY AND VALUES

/// ------ KEYS AND VALUES PSEUDOCODE ------ \\\

// -- KEYS -- 1) Loops through the hash table array
//            and returns an array of keys in the table.
// -- Values  2) Loops through the hash table array and
//             returns an array of values in the table.

// HASH
class Hash {
  constructor(size = 5) {
    this.hashTable = new Array(size);
  }

  // HASHING
  _hash(key) {
    let hashedValue = 0;
    let weird_prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // Character
      let char = key[i];
      // Numerical value of Character
      let value = char.charCodeAt(0) - 96;
      // Update the hash as loop runs
      hashedValue = (hashedValue * weird_prime + value) % this.hashTable.length;
    }
    return hashedValue;
  }

  // SET - STORE KEY AND VALUE IN HASHTABLE
  set(key, value) {
    let index = this._hash(key);
    if (!this.hashTable[index]) {
      this.hashTable[index] = [];
    }
    this.hashTable[index].push([key, value]);
  }

  // GET - RETRIEVE THE VALUE FOR A KEY
  get(key) {
    let index = this._hash(key);
    let indexValue = this.hashTable[index];
    if (indexValue) {
      for (let valueArray of indexValue) {
        if (valueArray[0] === key) {
          return valueArray[1];
        }
      }
    }
    return undefined;
  }

  // KEYS - Retrieves all the keys
  keys() {
    let keys = [];
    for (let indexValues of this.hashTable) {
      if (indexValues) {
        for (let arrayValues of indexValues) {
          if (!keys.includes(arrayValues[0])) {
            keys.push(arrayValues[0]);
          }
        }
      }
    }
    return keys;
  }

  // VALUES - Retrieves all the values
  values() {
    let values = [];
    for (let indexValues of this.hashTable) {
      if (indexValues) {
        for (let arrayValues of indexValues) {
          if (!values.includes(arrayValues[1])) {
            values.push(arrayValues[1]);
          }
        }
      }
    }
    return values;
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

// // Returns the value
// console.log(hash.get("maroon"));

console.log("KEYS",hash.keys())
console.log("VALUES",hash.values());
