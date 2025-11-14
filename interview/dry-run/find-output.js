// ====== 1 ======
let a1 = 10;

function test() {
  console.log(a1);
  let a1 = 20;
}

test();


// ====== 2 ======


function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn();
fn();




// ====== 3 ======
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");




// ====== 4 ======
const arr1 = [1, 2, 3];
const result = arr1.map((num) => {
  if (num === 2) return;
  return num * 2;
});
console.log(result);


// ====== 5 ======
console.log(x);
var x = 5;


// ====== 6 ======

console.log(y);
let y = 5;


// ====== 7 ======
let a = { value: 10 };
let b = a;
b.value = 20;
console.log(a.value);

// ====== 8 ======
const obj1 = { x: { y: 10 } };
const clone = { ...obj1 };

clone.x.y = 50;

console.log(obj1.x.y);

// ====== 9 ======

const obj = {
  a: 10,
  fn() {
    console.log(this.a);
  },
};

setTimeout(obj.fn, 0);


// ====== 10 ======
setTimeout(obj.fn.bind(obj), 0);

// ====== 11 ======
const nums = [1, 2, 3];
const sum = nums.reduce((a, b) => a + b);
console.log(sum);

// ====== 12 ======
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));

// ====== 13 ======
const arr2 = [1, 2, 3, 2, 5, 1];
const dup = arr2.filter((item, i) => arr2.indexOf(item) !== i);
console.log(dup);

// ====== 14 ======
console.log([...new Set([1, 2, 2, 3, 3])]);

// ====== 15 ======
console.log([1, [2, [3]]].flat(2));

// ====== 16 ======
const user = {};
console.log(user.address?.city);

// ====== 17 ======
let x = 0;
console.log(x ?? 5);

// ====== 18 ======
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));

// ====== 19 ======
const str = "hello world";
const res = str.split(" ").reverse().join(" ");
console.log(res);

// ====== 20 ======
const arr = ["a", "b", "a", "c"];
const count = {};

arr.forEach((x) => (count[x] = (count[x] || 0) + 1));

console.log(count);



