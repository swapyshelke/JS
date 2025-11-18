// remove duplicates from array

const numbers = [3, 4, 5, 5, 6, 6, 7, 6, 78]

const uniqueNums = new Set(numbers)
console.log(Array.from(uniqueNums));
