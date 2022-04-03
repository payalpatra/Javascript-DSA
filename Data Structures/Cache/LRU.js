// The Least Recently Used (LRU) cache is a cache eviction algorithm that organizes elements in order of use. In LRU, as the name suggests, the element that hasn't been used for the longest time will be evicted from the cache
// Page Fault - When a given page is requested and it is not presented in the cache.


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

}

console.log(lruCache(3, [1, 2, 3, 4, 1, 3]))

// [ 1 ]
// [ 1, 2 ]
// [ 1, 2, 3 ]
// [ 2, 3, 4 ]
// [ 3, 4, 1 ]
// [ 4, 1, 3 ]