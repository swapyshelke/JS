// for in loop

import { person } from "../../data/data.js";

for (let i in person) {
    console.log(i); // getting key
    console.log(person[i]); // getting value
}

// nested object

// const person = {
//   name: "Shelke",
//   contact: {
//     email: "shelke@example.com",
//     phone: {
//       mobile: "9876543210",
//       landline: "020-1234567",
//     },
//   },
//   address: {
//     city: "Pune",
//     state: "Maharashtra",
//     zip: 411001,
//   },
// };

