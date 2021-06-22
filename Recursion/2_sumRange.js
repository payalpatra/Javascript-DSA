// Sum Of Numbers in a give range

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
console.log(sumRange(3));

// --- Step By Step Walkthrough --- \\

//  sumRange(3)
//      returns 3 + sumRange(2)
//                  returns 2 + sumRange(1)
//                               returns 1 

//  This sums up and results in the result 6 