// The Least Recently Used (LRU) cache is a cache eviction algorithm that organizes elements in order of use. In LRU, as the name suggests, the element that hasn't been used for the longest time will be evicted from the cache
// Page Fault - When a given page is requested and it is not presented in the cache.

/*
Data structures used to build an efficient LRU cache algorithm

1. Searching
2. Adding items

*/

function lruCache(size, req) {
    let pf = 0;
    let cache = []

    for (let i = 0; i < req.length; i++) {

        if (cache.includes(req[i]) === false && size !== 0) {
            pf++;
            cache.push(req[i]);
            size--;
        } else if (size === 0 || cache.includes(req[i]) === true) {

            if (cache.includes(req[i]) === false) pf++
            // Remove Oldest Request
            cache.shift()
            // Push The Recent Request
            cache.push(req[i])

        }
    }
    return cache
}

console.log(lruCache(3, [1, 2, 3, 4, 1, 3]))

// [ 1 ]
// [ 1, 2 ]
// [ 1, 2, 3 ]
// [ 2, 3, 4 ]
// [ 3, 4, 1 ]
// [ 4, 1, 3 ]


// -- OPTIMIZED APPROACH -- \\

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = {};
        this.count = 0;
        this.head = new Node(0,0);
        this.tail = new Node(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    get(key) {
        if (!(key in this.cache)) return -1;
        const node = this.cache[key];
        this.remove(node);
        this.add(node);
        return node.value;
    }
    
    put(key, value){
        const node = new Node(key, value);
        if (!(key in this.cache)) {
            this.add(node);
        } else {
            this.remove(this.cache[key]);
            this.add(node);
        }
        if (this.count > this.capacity) {
            this.remove(this.head.next);
        }
    }
    
    add(node){
        this.cache[node.key] = node;
        this.count++;
        node.prev = this.tail.prev;
        this.tail.prev.next = node;
        node.next = this.tail;
        this.tail.prev = node;
    }
    
    remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
        delete this.cache[node.key];
        this.count--;
    }
}

let lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // cache is {1=1}
console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
console.log(lRUCache.get(1));    // return 1
console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // returns -1 (not found)
console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4

console.log(lRUCache)