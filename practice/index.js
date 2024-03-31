// const user = {
//     age: 20
// }

// user.age = 40
// console.log(user.age);

// const arrayOfObjects = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// for(let i = 0 ; i < arrayOfObjects.length ; i++) {
// console.log(arrayOfObjects[i]);
// }

// for (let i = 0; i < arrayOfObjects.length; i++) {
//     console.log(`Name: ${arrayOfObjects[i].name}, Age: ${arrayOfObjects[i].age}`);
// }

// arrayOfObjects.forEach((el) => {
//     console.log(el);
// })

// const names = [];

// arrayOfObjects.forEach(item => {
//     names.push(item.name)
// })

// console.log(names);

// 1. register
// 2. send welcome email
// 3. login
// 4. get user data
// 5. display user data

// function register(){
//     setTimeout(() => {
//         console.log('Register function');
//     }, 1000)
// }

// function sendEmail(){
//     setTimeout(() => {
//         console.log("Send welcome function");

//     }, 2000)
// }

// function login(){
//     setTimeout(() => {
//         console.log("Login function");
//     }, 5000)
// }

// function getUserData(){
//     setTimeout(() => {
//         console.log("get user data function");
//     }, 3000);
// }

// function displayUserData(){
//     setTimeout(() => {
//         console.log("Display user data");
//     }, 2000);
// }

// register()
// sendEmail()
// login()
// getUserData()
// displayUserData()

// register(() => {
//     sendEmail(() => {
//          login(() => {
//             getUserData(() => {
//                 displayUserData()
//             })
//          })
//     })
// })

// console.log(`
// hello
// there`);

// console.log(`

//  ${5 + 10}
// `);

// const keyName = 'name'

// const products = {
//     [keyName]: "Swapnil",
//     price: 100,
//     buy() {
//         console.log('selled out');
//     }
// }

// console.log(products);

// const refreshToken = "oigimgpam"
// const accessToken = "pfgom g"

// const user = {
//     refreshToken,
//     accessToken,
// }

// console.log(user);

// desctructuring

// const user = {
//     name : "sdw aggm",
//     age: 30
// }

// const {name: fullname, age} = user;

// // const name = user.name;
// // const age = user.age

// console.log(fullname);

// const data = ['s', 40, "rgnng"];

// const [name, age, profession] = data;

// console.log(name, age, profession);

// spread ...

// const languages = ['s', 'f', 'g'];
// const newLanguage = ['ts', ...languages]

// console.log(newLanguage);

// const settings = {
//     volume: 10,
//     brightness: 80,
// }

// const newSettings = {...settings, xys: "dlfkmg"};

// console.log(newSettings);

// rest ...

// const addItems = (...items) => {
//     console.log(items);

//     for (let i = 0; i < items.length; i++) {
//         const element = items[i];
//         console.log(element
//             + 1);
//     }
// }

// addItems(1, 2, 3)

// const actors = [
//     {
//         name: "actor 1",
//         payment: 100
//     },
//     {
//         name: "actor 2",
//         payment: 150
//     },
//     {
//         name: "actor 3",
//         payment: 300
//     },
// ];

// for(let i = 0 ; i < actors.length ; i++) {
//     actors[i].payment = actors[i].payment + 100;
// }

// console.log(actors);

// actors.forEach(actor => {
//     actor.payment = actor.payment + 100
// })

// console.log(actors);

// for(let actor of actors) {
//     actor.payment = actor.payment + 100
// }

// console.log(actors);

// const students = [
//     {
//         name: "Student 1",
//         marks: 45
//     },
//     {
//         name: "Student 2",
//         marks: 60
//     },
//     {
//         name: "Student 3",
//         marks: 70
//     },
//     {
//         name: "Student 4",
//         marks: 30
//     },
// ];

// const failed = students.filter((students) => {
//   if(students.marks < 45) {
//     return true
//   } else {
//     return false
//   }

// return students.marks < 45

// })

// console.log(failed);

// filtering numbers

// const numbers = [1, 2, 3, 4, 5]
// const filteredNumbers = numbers.filter(nomber => {
//     return nomber < 3
// })

// console.log(filteredNumbers);

// filteing strings

// const words = ["apple", "banana", "kiwi", "orange"];
// const filteredWords = words.filter(word => word.length > 5)

// console.log(filteredWords);

// const products = [
//   {
//     name: "Apple",
//     price: 1.54,
//   },
//   {
//     name: "Banana",
//     price: 0.99,
//   },
//   {
//     name: "Orange",
//     price: 2.49,
//   },
// ];

// const expensiveProducts = products.filter(product => product.price > 1)
// console.log(expensiveProducts);

// =================

// create function which takes string as input and output it as uppercase

// return uppercase vale from same function

//

// 1. functions loggin value
// 2. functions taking parameters
// 3. function returning values
// 4. default parameter value
// 5. variable scope
// 6. function declaration
// 7. function expression
// 8. callback functions
// 9. IIFE'S
// 10. Arrow functon

// 1. register
// 2. send welcome email
// 3. login
// 4. get user data
// 5. display user data

// function register(){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('Register function');
//             res("Error occured in register function");
//         }, 1000)
//     })
// }

// function sendEmail(){
//    return new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("Send welcome function");
//         res()
//     }, 2000)
//    })
// }

// function login(){
//    return new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("Login function");
//         res()
//     }, 5000)
//    })
// }

// function getUserData(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("get user data function");
//         res()
//     }, 3000);
//   })
// }

// function displayUserData(){
//    return new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("Display user data");
//         res();
//     }, 2000);
//    })
// }

// single threaded

// register(() => {
//     sendEmail(() => {
//          login(() => {
//             getUserData(() => {
//                 displayUserData()
//             })
//          })
//     })
// })

// register().then(sendEmail).then(login).then(getUserData).then(displayUserData).catch((error) => {
//     console.log("error: " + error);
// })

// async function authemticate(){
//     await register()
//     await sendEmail()
//     await login()
//     await getUserData()
//     await displayUserData()
// }

// authemticate()

// console.log('other application work');

// function login(uname, password){
//     console.log('logged in completed');
//     console.log(uname, password);
// }

// login("Swapy", "Swpywpass")
// login("Sahil", "sahilspass")
// console.log('aashay', 'aashayspass');

// function uppercase(string){
//     const str = string.toUpperCase();
//     return str;
// }

// console.log();

// named export

// import { userDetails } from "./one.js";

// userDetails()

// default exports
// import logout from "./one.js";

// logout()

// 9.85986u56289

// 9.85 o r9.8598

// let a = 9.9865298762

// let b = a.toFixed(2)

// console.log(typeof b);

// let number = 9.9865298762;
// // let fixedNumber = Number(number.toFixed(2)); // Outputs 9.98
// // console.log(fixedNumber);

// number = Math.trunc(number*Math.pow(10, 2))/Math.pow(10, 2)
// console.log(number);

// let text = "Hello World!";
// let result = text.toLocaleLowerCase();
// console.log(result);

// let str = "Hello World!"; // "Hello World" in Hindi
// let lowerCaseStr = str.toLowerCase(); // Outputs "नमस्ते दुनिया" based on Unicode rules
// let localeLowerCaseStr = str.toLocaleLowerCase('hi-IN'); // Outputs "नमस्ते दुनिया" based on Hindi locale

// console.log(lowerCaseStr); // "नमस्ते दुनिया"
// console.log(localeLowerCaseStr);

// const name = "Swapnil Shelke"

// const fname = name.substr(0, 7);
// console.log(fname);

// const url = "https://www.example.com/path/to/page"

// const str = url.substring(8).split("/")[0];

// console.log(str);

// let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// const short = longText.length > 20 ? longText.substring(0, 20) + "..." : longText;
// console.log(short);

// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.match('love'))

// let string = 'love'
// let patternOne =' /love/ '    // with out any flag
// let patternTwo = '/love/gi'   // g-means to search in the whole text, i - case insensitive

// console.log(patternOne);
// console.log(patternTwo);

// let string = 'I love JavaScript. I love programming.';
// // let newString = string.replace(/love/g, 'like');
// // console.log(newString);

// console.log(string.repeat(10));

// console.log(typeof NaN);

// let number = "100"

// let newnum = +number
// console.log( newnum);

// console.log(parseInt('abed123', 16));

// const str = "30 Days Of JavaScript";
// // const ans = str.match(/a/gi)
// // console.log(ans);

// const newarr = []

// str.forEach((element, index) => {
//   if (element.toLocaleLowerCase() == "a") {
//     newarr.push(index)
//   }
// });

// console.log(newarr);

// // for(let i = 0 ; i < str.length ; i++) {
// //     if(str[i].toLocaleLowerCase() == 'a')
// //     newarr.push(i)
// // }

// console.log(newarr);


// const nameone = 'Python';
// const nametwo = 'Jargon';

// console.log(nameone.includes('on'));
// console.log(nametwo.includes('on'));

// for(let i = 0 ; i < 100 ; i++) {
// let randomnum = Math.floor(Math.random() * 256)
// // randomnum = randomnum >= 255 ? randomnum : randomnum + 50; 
// console.log(randomnum);
// }


// const name = 'JavaScript'

// // console.log(num);

// for(let i = 0 ; i < 10 ; i++) {
//     const num  = Math.round(Math.random()  * name.length ) 
//     console.log(name[num]);
// }


// console.log("1 1 1 1 1 \n 2 1 2 4 8 3 \n 1 3 9 27 4 1 \n 4 16 64 5 1 \n 5 25 125");

const sentence = 'You cannot end a sentence with because because because is a conjunction';
const phrase = 'because because because';

const indexone = sentence.indexOf(phrase)
console.log(indexone);
const indextwo = indexone + phrase.length
console.log(indextwo);

const ans = sentence.substring(0, indexone) + sentence.substring(indextwo) 

console.log(ans);