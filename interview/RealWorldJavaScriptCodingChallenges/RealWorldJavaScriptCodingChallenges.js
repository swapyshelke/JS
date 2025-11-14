// 1. Debounce Function (Used in Search Input, Scroll Events)

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const log = debounce(() => console.log("Search triggered"), 300);
log();
log();
log();


// 2. Throttle Function (Used in resize, scroll performance)

function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

const scroll = throttle(() => console.log("Scroll event"), 500);
window.addEventListener("scroll", scroll);


// 3. Implement a Retry Logic (API Failed → Retry 3 Times)

async function fetchRetry(url, retries = 3) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed");
    return await res.json();
  } catch (e) {
    if (retries === 0) throw e;
    return fetchRetry(url, retries - 1);
  }
}

fetchRetry("https://api.example.com/data");

// 4. Implement a Custom Array.map()

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].myMap((n) => n * 2));


// 5. Convert Array of Objects → Object (Key by ID)

const users = [
  { id: 1, name: "Swapy" },
  { id: 2, name: "Alex" },
];

const map = users.reduce((obj, item) => {
  obj[item.id] = item;
  return obj;
}, {});

console.log(map);


// 6. Group By (Like SQL GROUP BY)

function groupBy(arr, key) {
  return arr.reduce((group, item) => {
    const val = item[key];
    group[val] = group[val] || [];
    group[val].push(item);
    return group;
  }, {});
}

const data = [
  { city: "Pune", name: "A" },
  { city: "Mumbai", name: "B" },
  { city: "Pune", name: "C" },
];

console.log(groupBy(data, "city"));


// 7. Flatten Deep Object

function flattenObj(obj, parent = "", result = {}) {
  for (let key in obj) {
    const newKey = parent ? parent + "." + key : key;

    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flattenObj(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

console.log(flattenObj({ a: { b: { c: 10 }, d: 20 } }));


// 8. Simple LRU Cache (Asked in Interviews of FAANG-level)

class LRU {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.limit) {
      const first = this.cache.keys().next().value;
      this.cache.delete(first);
    }
    this.cache.set(key, value);
  }
}

const lru = new LRU(2);
lru.put("a", 1);
lru.put("b", 2);
lru.get("a");
lru.put("c", 3);
console.log([...lru.cache.keys()]);

// 9. Promise All Polyfill

function myPromiseAll(arr) {
  return new Promise((resolve, reject) => {
    const res = [];
    let count = 0;

    arr.forEach((p, i) => {
      Promise.resolve(p)
        .then((val) => {
          res[i] = val;
          count++;
          if (count === arr.length) resolve(res);
        })
        .catch(reject);
    });
  });
}

myPromiseAll([Promise.resolve(10), Promise.resolve(20)]).then(console.log);


// 10. Create a Tiny Pub/Sub (Event Emitter)


class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, fn) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(fn);
  }

  emit(event, data) {
    (this.events[event] || []).forEach((fn) => fn(data));
  }
}

const e = new EventEmitter();

e.on("login", (u) => console.log("User logged:", u));

e.emit("login", "Swapy");


// 

