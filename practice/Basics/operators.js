// console.log('hello');
// q14: what is NaN in JS
// -> not a number
// -> isNan()
// console.log(0 / 0); // NaN

// const str = Number("")

// console.log(str);

// console.log(parseInt(""));


// ===================== Arithematic operators

// modulo / remainder

console.log(5 % 2); // 1
console.log(10 % 2); // 0

// q1: On a shopping website, calculate the total cost of a product when given the price
// per item (price = 150) and the quantity (quantity = 3)
// Also calculate a 10% discount on the total cost and display the discounted price

let price = 150
let quantity = 3

let totalCost = price * quantity


// calculating a 10% discount
let discount = totalCost * 0.10; // 10% of total cost

// calc the final price after discount
let discountedPrice = totalCost - discount


// =================== assignment operators


x = 5
x += 2 // x = x + 2
x -= 2 // x = x - 2
x *= 2 // x = x * 2
x /= 2 // x = x / 2
x %= 2 // x = x % 2
x **= 2 // x = x ** 2



// =================== comparison operators

// loosely equal
5 == "5" // true

// Strictly equal
5 === "5" // false

// loosely not equal
5 != "5" // false

// strictly not equal
5 !== "5" // true

// greater than
5 > 2 // true

// less than 
5 < 2 // false

// greater than or equal to 
5 >= 3 // false

// less than or equal to
5 <= 5 // true



// =================== logical  operators


// && - AND - both condition should be true
// || - OR - either one is true
// ! - NOT - (flips true / false)


// =================== increment and decrement operators
// further divided into post and pre increment/decrement

let a = 5;
console.log(5);
console.log(a++);

// post increment is used here
// used the value, then increment it, thts why we get 5 in 
// both logs



let b = 5;
console.log(5); // 5
console.log(++b); // 6

// pre increment
// value increased first then logged/used


// ================ ternary operators
// condition ? "if condition true" : "if condition false"


// ================== bitwise operators
// 