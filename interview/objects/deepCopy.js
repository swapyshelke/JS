const originalObject = {
  name: "Alice",
  details: {
    age: 30,
    city: "New York",
  },
};

// Using JSON.parse(JSON.stringify()) for a deep copy (with limitations)
const deepCopy = JSON.parse(JSON.stringify(originalObject));

deepCopy.name = "Charlie"; // Modifies only the deep copy's top-level property
deepCopy.details.age = 32; // Modifies the nested object in the deep copy, not affecting the original

console.log(originalObject.name); // Output: Alice
console.log(deepCopy.name); // Output: Charlie

console.log(originalObject.details.age); // Output: 30 (remains unchanged)
console.log(deepCopy.details.age); // Output: 32

/*

Note on JSON.parse(JSON.stringify()): 
While effective for many cases, this method has limitations.

It cannot deep copy functions, Date objects, RegExp objects, 
undefined, Infinity, NaN, or circular references, as they 
are not properly serialized by JSON.stringify(). For more 
robust deep copying, libraries like Lodash's cloneDeep or 
the built-in structuredClone() (in modern environments) 
are recommended.

*/
