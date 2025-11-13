const originalObject = {
  name: "Alice",
  details: {
    age: 30,
    city: "New York",
  },
};

// Using the spread syntax for a shallow copy
const shallowCopy = { ...originalObject };

shallowCopy.name = "Bob"; // Modifies only the shallow copy's top-level property
shallowCopy.details.age = 31; // Modifies the nested object, affecting both originalObject and shallowCopy

console.log(originalObject.name); // Output: Alice
console.log(shallowCopy.name); // Output: Bob

console.log(originalObject.details.age); // Output: 31 (changed due to shared reference)
console.log(shallowCopy.details.age); // Output: 31

/*

A shallow copy creates a new object and 
copies the top-level properties of the 
original object into it. However, 
if any of these properties are references
 to other objects (e.g., nested objects or 
 arrays), only the reference is copied, not 
 the actual nested object itself. This means 
 that both the original and the copied object
  will point to the same nested object in 
  memory. Therefore, modifying the nested 
object in one will affect the other. 

*/
