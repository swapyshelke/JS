// what will be the output

let a = { num: 10 };
let b = a;

b.num = 20;
a = { num: 30 };

console.log(b.num);
console.log(a.num);
