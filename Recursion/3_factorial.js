// Factorial
// Example -- 4! - 4*3*2*1



// WITHOUT RECURSION 

function factorial1(num) {
    let result = num;
    for (let i = 0; i < num; i++) {
        num = num - 1
        result = result * num;
    }
    return result;
}

console.log(factorial1(4))


// WITH RECURSION
function factorial(num) {
    if (num === 1 || num === 0) return 1;
    return num * factorial(num - 1)
}

console.log(factorial(4))