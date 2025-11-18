const arrNumber = [1, 9, 87, 65, 5]

const maXfunction = (arr) => {
    return arr.reduce(function (pre, cur) {
        return pre > cur ? pre : cur
    })
}

console.log(maXfunction(arrNumber));


/* concept sused here


Higher-order functions	✅	reduce takes a function
Callback functions	✅	passed into reduce
Implicit accumulator flow	✅	how reduce processes values
Ternary operator	✅	used for comparison


*/