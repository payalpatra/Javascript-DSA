console.log(["steele","colt","Data Structures","Algorithms"].sort())
// Output
// [ 'Algorithms', 'Data Structures', 'colt', 'steele']

function stringCompare(str1, str2) {
    return str1.length - str2.length; 
}

function numberCompare(num1, num2) {
    return num1 - num2; // If this is +ve num1 is greater
}
console.log([6,14,15,10].sort(numberCompare))
console.log(["steele","colt","Data Structures","Algorithms"].sort(stringCompare))