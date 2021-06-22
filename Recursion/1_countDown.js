// Recursive Approach to count number from 5 to 1

function countDown(num) {
    if (num <= 0) {
        console.log("All Done")
        return
    }
    console.log(num)
    num--
    countDown(num)
}

console.log(countDown(3))

// --- Step By Step Walkthrough --- \\ 

// - calls countDown with 2 -- countDown(3)
// - prints num --> 3
// - Decreaments num -- 2
// - calls countDown again with 2 -- countDown(2)
// prints num --> 2
// - Decreaments num -- 1
// - calls countDown again with 1 -- countDown(1)
// prints num --> 1
// - Decreaments num -- 0
// - calls countDown again with 0 -- countDown(0)
// We reached the condition i.e -- num= 0. 
// prints "All Done !!"  and terminates 