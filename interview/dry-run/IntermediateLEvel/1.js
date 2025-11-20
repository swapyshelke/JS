// Flatten a nested array (one level only)

const arr = [1, [2, 3], 4, [5, 6]];

const flattened = arr.reduce((acc, item) => {
  if (Array.isArray(item)) {
    return acc.concat(item);
  }
  return acc.concat([item]);
}, []);

console.log(flattened); 


