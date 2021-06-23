// ------------------ Method 1 ------------------

function addUpTo(num){
    let total = 0;
    for (let i = 0; i<=num;i++){
        total += i;
    }
    return total;
}
console.log(addUpTo(6));

// ** O(n) ** \\

// ------------------ Method 2 ------------------

function addUpTo2(num2){
    return num2 * (num2 +1)/2;
}
console.log(addUpTo2(6));

// ** O(1) ** \\

// Clearly Method 2 has better performace than method 2 as it has 3 operations.
// The Method 1 performs a number of operations as it is in loop.

// ------------------ Example 1 ------------------

function countUpDown (n){
    console.log("Going Up");
    for (let i = 0; i< n ; i++){
        console.log(i);
    }

    console.log("At the top");
    for (let j = n-1; j >= 0 ; j--){
        console.log(j);
    }
    console.log("Back Down, Bye");
}
console.log(countUpDown(10));

// ** O(n) ** \\

// ------------------ Example 2 ------------------

function printAllPairs(n){
    for(let i = 0; i< n ; i++){
        for(let j=0; j< n ; j++){
            console.log(i,j);
        }
    }
}
console.log(printAllPairs(10));

// ** O(n2) ** \\

// ------------------ Example 3 ------------------

function logAtLeast5(n){
    for(let i = 0; i <= Math.max(5,n);i++){
        console.log(i)
    }
}
console.log(logAtLeast5(10));