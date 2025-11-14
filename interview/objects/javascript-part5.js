const originalObject = {
  name: "Alice",
  details: {
    age: 30,
    city: "New York",
  },
};

const shallowCopy = { ...originalObject };

shallowCopy.name = "Bob";
shallowCopy.details.age = 22;

console.log(originalObject.name);
console.log("i'm not modified bacause of shallow copy" + shallowCopy.name);

console.log("i'm modified bacause of shallow copy" + originalObject.details.age);

// const ori = {
//   name: "swapnil",
//   address: {
//     city: "Pune",
//   },
// };

// const copy = { ...ori };
// copy.name = "changes";

// console.log(ori);

// import { user as original } from "../data/data.js";

// const copied = { ...original };

// copied.name = "changed";

// console.log(copied);

// const obj2 = {
//   ...original,
// };

// console.log("oroginal obj", original);
// console.log("shallow copied obj", obj2);

// obj2.name = "sachin";

// console.log("oroginal obj", original);
// console.log("shallow copied obj", obj2);

// obj2.name = "Sachin";

// console.log(obj2);
// console.log(user);

// console.log(user);

// const data = {
//   name: "Swa",
// };

// const data2 = {
//   name: "Shelke",
// };

// const obj = { ...data, ...data2 };
// console.log(obj);

// console.log(0.1 + 0.2 === 0.3);

// const obj = {
//   0: "1",
//   1: "2",
//   3: "3",
// };

// // console.log(JSON.stringify(obj));

// const newObj = JSON.stringify(obj);
// console.log(newObj.slice(3));

// let num = 12;
// console.log(num.toString(2));
// // output: ?

// num = true;

// const container = num.toString();
// console.log(container);

// const obj = {
//   name: " swapnil shelke ",
// };

// const num = 10;

// const container = obj.toString();
// console.log(container);

// const num = 11;
// const container = num.toString(16);
// console.log(container);
