// 2623. Memoize


// Leetcode solution
function memoize(func){
  let cache = {}
  return function(...args){
    // let n = args[0];
    let n = JSON.stringify(args);
    if(n in cache){
      return cache[n]
    }else {
      // 
      let result = func.apply(this, args)
      let result = func(n)
      cache[n] = result;
      return result;
    }
  }
}



// Memoization

/*
function square(n){
  return n * n;
}

console.time()
console.log(square(5))
console.timeEnd()

- o/p: 5.123 ms

// lets write memoize function for this function

function memoize(func){
  let cache = {}
  return function(...args){
    let n = args[0];
    if(n in cache){
      return cache[n]
    }else {
      let result = func(n)
      cache[n] = result;
      return result;
    }
  }
}

// first run this 
console.time()
letEffecientRes = memoize(square);
console.log(letEffecientRes(5))
console.timeEnd()


// second time run this
console.time()
console.log(letEffecientRes(5))
console.timeEnd()
*/

// Learning outcome
// - memoization
// - caching
