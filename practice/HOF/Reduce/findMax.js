const nums = [1, 6, 4, 2, 4]

const max = nums.reduce((acc, curr) => acc > curr ? acc : curr)

console.log(max);
