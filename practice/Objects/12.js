// Object.assign()

// copies all properties of source object to another object

const target = {
  p: 1,
  a: 2, // taking this property same in both objects
};

const source = {
  a: 3, // this will over write the above value
  b: 3,
};

// target will be replaced by source value
const returnObject = Object.assign(target, source);
console.log(returnObject);
