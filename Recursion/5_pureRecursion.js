//// ---- Pure Recursion ---- \\\\

function collectOddValues(arr){
    let newArr = [];

    // To Check if the array is empty 
    if (arr.length === 0){
        return newArr; 
    }

    // To Check if the first element in the array is ODD 
    if(arr[0] % 2 !== 0){
        // If Its Odd -> Push that element to newArr
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
console.log(collectOddValues([1, 2, 3, 5, 18, 9, 10]))