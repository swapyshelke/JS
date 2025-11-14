// 1. Convert Query Params → Object

function parseQuery(query) {
  return Object.fromEntries(new URLSearchParams(query));
}

console.log(parseQuery("name=swapy&age=22"));


// 2. Convert Object → Query Params

function toQuery(obj) {
  return new URLSearchParams(obj).toString();
}

console.log(toQuery({ name: "swapy", age: 22 }));

// 3. Chunk Array Into Parts

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2));


// 4. Find Missing Number (0–n)


function missing(arr) {
  const n = arr.length;
  const sum = (n * (n + 1)) / 2;
  return sum - arr.reduce((a, b) => a + b);
}

console.log(missing([0, 1, 3, 4]));



// 5. Intersection of Arrays

const intersect = (a, b) => a.filter((x) => b.includes(x));

console.log(intersect([1, 2, 3], [2, 3, 4]));


// 6. Deep Compare Two Objects

function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(isEqual({ a: 1 }, { a: 1 }));


// 7. Remove Falsy Values

console.log([0, 1, false, 2, "", 3].filter(Boolean));


// 8. Convert to Title Case

const titleCase = (str) => str.replace(/\b\w/g, (c) => c.toUpperCase());

console.log(titleCase("welcome to pune"));


// 9. Random Hex Color

const randomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

console.log(randomColor());


// 10. Delay Function (Async Sleep)

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function run() {
  console.log("start");
  await sleep(1000);
  console.log("end");
}

run();

// 11. Sort Array by Object Property

const users = [
  {name: "A", age: 30},
  {name: "B", age: 20}
];

users.sort((a,b) => a.age - b.age);
console.log(users);


// 12. Sum by Key


const data = [
  {price: 100},
  {price: 200},
  {price: 300},
];

const sum = data.reduce((acc, x) => acc + x.price, 0);
console.log(sum);



// 13. Check if an Object is Empty


console.log(Object.keys({}).length === 0);


// 14. Convert Array → CSV


const arr = [
  ["name", "age"],
  ["A", 20],
  ["B", 30],
];

console.log(arr.map((r) => r.join(",")).join("\n"));


// 15. Remove Keys From Object

function removeKeys(obj, keys) {
  const copy = { ...obj };
  keys.forEach((k) => delete copy[k]);
  return copy;
}

console.log(removeKeys({ a: 1, b: 2, c: 3 }, ["b", "c"]));


// 16. Count Words


const countWords = (str) => str.split(/\s+/).length;

console.log(countWords("hello world from JS"));


// 17. Find Most Frequent Element

function mostFreq(arr) {
  let map = {},
    max = 0,
    res;
  for (let n of arr) {
    map[n] = (map[n] || 0) + 1;
    if (map[n] > max) {
      max = map[n];
      res = n;
    }
  }
  return res;
}

console.log(mostFreq([1, 3, 2, 1, 3, 1]));


// 18. Shuffle Array Fisher-Yates

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5]));


// 19. Limit Concurrent Promises

async function asyncPool(limit, array, iteratorFn) {
  const ret = [];
  const executing = [];

  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item));
    ret.push(p);

    if (limit <= array.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= limit) await Promise.race(executing);
    }
  }
  return Promise.all(ret);
}


// 20. Simple Memoization

function memo(fn) {
  const cache = {};
  return function (x) {
    if (cache[x]) return cache[x];
    cache[x] = fn(x);
    return cache[x];
  };
}

const square = memo(n => n*n);
console.log(square(5));
console.log(square(5)); // cached


// 21. Convert Nested Array → Object Tree

function toTree(entries) {
  const obj = {};
  for (const [key, val] of entries) {
    obj[key] = val;
  }
  return obj;
}

console.log(
  toTree([
    ["name", "swapy"],
    ["age", 22],
  ])
);



// 22. Check Balanced Brackets

function isBalanced(str) {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };

  for (let c of str) {
    if (map[c]) {
      if (stack.pop() !== map[c]) return false;
    } else stack.push(c);
  }
  return stack.length === 0;
}

console.log(isBalanced("([{}])"));


// 23. Convert Array to Object Tree (Category Example)

const categories = [
  {id:1, name:"A", parent:null},
  {id:2, name:"B", parent:1},
  {id:3, name:"C", parent:2}
];

function buildTree(items, parent=null) {
  return items
    .filter(i => i.parent === parent)
    .map(i => ({...i, children: buildTree(items, i.id)}));
}

console.log(JSON.stringify(buildTree(categories), null, 2));


// 24. Remove Null & Undefined Keys

function clean(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}

console.log(clean({ a: 1, b: null, c: undefined, d: 2 }));



// 25. Hex → RGB

function hexToRgb(hex) {
  const num = parseInt(hex.slice(1), 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

console.log(hexToRgb("#ff8800"));


// 26. Retry With Delay (Exponential Backoff)

async function retry(fn, retries = 3) {
  try {
    return await fn();
  } catch (e) {
    if (retries === 0) throw e;
    await new Promise((res) => setTimeout(res, 1000 * retries));
    return retry(fn, retries - 1);
  }
}


// 27. Object Filter (Like Array.filter)


function filterObj(obj, fn) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => fn(v)));
}

console.log(filterObj({ a: 1, b: 2, c: 3 }, (v) => v > 1));


// 28. Find Duplicate Objects by Key

function findDup(arr, key) {
  const seen = new Set();
  return arr.filter((item) => {
    if (seen.has(item[key])) return true;
    seen.add(item[key]);
    return false;
  });
}

console.log(findDup([{ id: 1 }, { id: 2 }, { id: 1 }], "id"));


// 29. Async Queue (Used in job processing)

class AsyncQueue {
  constructor() {
    this.queue = Promise.resolve();
  }
  enqueue(task) {
    this.queue = this.queue.then(() => task());
    return this.queue;
  }
}

const q = new AsyncQueue();
q.enqueue(() => fetch("/api/1"));
q.enqueue(() => fetch("/api/2"));


// 30. Calculate Average Rating

const reviews = [{ rating: 4 }, { rating: 5 }, { rating: 3 }];

const avg = reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;
console.log(avg);


