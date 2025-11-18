// shallow cloning using Object.assign() and ... operators


const obj = { name: "swapnil" }

const obj2 = Object.assign({}, obj)

console.log(obj2);
console.log(obj === obj2);

// this will not copy the nested object 
