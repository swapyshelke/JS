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

// const sentence = 'You cannot end a sentence with because because because is a conjunction';
// const phrase = 'because because because';

// const indexone = sentence.indexOf(phrase)
// console.log(indexone);
// const indextwo = indexone + phrase.length
// console.log(indextwo);

// const ans = sentence.substring(0, indexone) + sentence.substring(indextwo)

// console.log(ans);

// Calculate the total annual income of the person by extracting the numbers from the following text.
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// const str = "Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'"

// const strarr = str.split(" ");

// console.log(strarr);

// const now = new Date()

// console.log(now.getFullYear());

// const parsint =

// import { countries } from "./countries.js";
// import { tech } from "./webtech.js";

// console.log(countries, tech);

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// const splitted = text.split(" ")

// for(let word of splitted) {
//     if(word.includes(",") || word.includes(".")) {
//         word.pop();
//     }
// }

// console.log(splitted);

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// const splitted = text.split(" ")

// for(let i = 0; i < splitted.length; i++) {
//     let word = splitted[i];
//     if(word.includes(",") || word.includes(".")) {
//         splitted[i] = word.slice(0, -1);
//     }
// }

// console.log(splitted);

// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

// median:

// check array size = 4   [1, 2, 3, 4]
// even - 2 - element1= (4 / 2 )- 1, element2= (length/2)

// element1= n/2, elment2= n/2-1
// add them  = ele1 + ele2 / 2

// odd - one - n
// middle number / element1 = n/2

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// let median = 0
// ages.sort()
// console.log(ages);
// const len = ages.length
// if(len % 2 === 0) {
//    let ele1;
//    let ele2;

//    ele1 = (len / 2) - 1;
//    ele2 = (len / 2);

//    console.log(ele1, ele2);
//    let val1 = ages[ele1]
//    let val2 = ages[ele2]
//    console.log(val1, val2);

//    median = (val1 + val2)/2
//    console.log(median);

// } else {
//     let indexforodd = len/2;
//     let elementval = ages[indexforodd]
//     // console.log(elementval);

//     median = elementval;
//     console.log(median);
// }

// Find the average age(all items divided by number of items)

// add all numbers
// divide by length

// for(num of ages){
//     num += num
// }

// Develop a small script which generate any number of characters random id:   fe3jo1gl124g

// const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 1, 2, 4, 5, 6, 7, 8, 9];

// for(const char of chars) {
//     let randomNum = Math.floor( Math.random() * chars.length)
//     // console.log(chars[randomNum]);

//     const randomChars = chars[randomNum]
//     console.log(randomChars.toString());
// }

// const arr= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// for(let i=0; i<10; i++){
//     let randomScript= "";
//     const randNum= Math.floor(Math.random()*26);
//     for(let j=0; j<randNum; j++){
//         randomScript+= arr[Math.floor(Math.random()*arr.length+1)];
//     }
//     console.log(randomScript);
// }

// Write a script which generates a random hexadecimal number.

// const arr= 'ABCDEF0123456789';
// for(let i=0; i<10; i++){
//     let randomScript= "";
//     const randNum= Math.floor(Math.random()*16);
//     for(let j=0; j<randNum; j++){
//         randomScript+= arr[Math.floor(Math.random()*arr.length+1)];
//     }
//     console.log(randomScript);
// }

// Write a script which generates a random rgb color number.

// 255

// for(let i=0; i<10; i++){
//     const R= Math.floor(Math.random()*256);
//     const G= Math.floor(Math.random()*256);
//     const B= Math.floor(Math.random()*256);
//     const rgb= `rgb(${R}, ${G}, ${B})`
//     console.log(rgb);
// }

// Using the above countries array, create the following new array.

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

//

// Using the above countries array, create an array for countries length'.

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const lenArr= Array(countries.length);
// for(let i=0; i<countries.length; i++) lenArr[i]= countries[i].length;
// console.log(lenArr);

// Use the countries array to create the following array of arrays:

// const arr= [];
// for(let country of countries){
//     const tempArr= [];
//     const first= country;
//     const second= country.substring(0, 3).toUpperCase();
//     const third= country.length;
//     tempArr.push(first);
//     tempArr.push(second);
//     tempArr.push(third);

//     arr.push(tempArr);
// }
// console.log(arr);

// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

//

// function sumAllNums(){
//     console.log(arguments);
// }

// sumAllNums(1, 2, 3, 4, 5)

// const sum = (...array) => {
//     console.log(array);
// }

// sum(1, 2, 3, 4, 5)

// function declaraton:

// (function(name) {
//     console.log('Hello, ' + name + '!');
//   })('Alice');

// const changeToUpperCase = (arr) => {
//     const newArr = []
//     for (const element of arr) {
//       newArr.push(element.toUpperCase())
//     }

//     return newArr
//   }

//   const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
//   console.log(changeToUpperCase(countries))

// const printFullName = (firstName, lastName) =>    `${firstName} ${lastName}`

//   console.log(printFullName('Asabeneh', 'Yetayeh'))

// function greetings(name = 'swapnil', age = 20) {
//     let message = `${name}, welcome to 30 Days Of JavaScript! youre age is ${age}`
//     return message
//   }

//   console.log(greetings())
//   console.log(greetings('ritesh', 100))

// function solveLinEquation(a, b, c, x) {
//     return (-c - a * x) / b;
//   }

//   console.log(solveLinEquation(1, 2, 3,4 ));

// function userIdGeneratedByUser() {
//     const numCharsInput = prompt("Enter the number of characters:");
//     const numIdsInput = prompt("Enter the number of IDs to generate:");

//     const numChars = parseInt(numCharsInput);
//     const numIds = parseInt(numIdsInput);

//     if (isNaN(numChars) || isNaN(numIds) || numChars <= 0 || numIds <= 0) {
//       return "Please enter valid positive numbers.";
//     }

//     let result = "";
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     for (let i = 0; i < numIds; i++) {
//       let userId = "";
//       for (let j = 0; j < numChars; j++) {
//         userId += characters.charAt(Math.floor(Math.random() * characters.length));
//       }
//       result += userId + "\n";
//     }

//     return result;
//   }

//  console.log( userIdGeneratedByUser());

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// const hexaString= '0123456789abcdef';
// const hexColor= () => {
//   const randNum= Math.floor(Math.random()*7);
//   let color= '#';
//   for(let i=0; i<randNum; i++){
//     const temp= Math.floor(Math.random()*16);
//     color+= hexaString[temp];
//   }
//   return color;
// }

// for(let i = 0; i < 10; i++){
//     console.log(hexColor());
// }

// function arrayOfHexaColors(numColors) {
//     const colors = [];
//     const characters = "0123456789ABCDEF";

//     for (let i = 0; i < numColors; i++) {
//       let color = "#";
//       for (let j = 0; j < 6; j++) {
//         color += characters.charAt(Math.floor(Math.random() * 16));
//       }
//       colors.push(color);
//     }

//     return colors;
//   }

//   // Example usage
//   console.log(arrayOfHexaColors(5)); // Returns an array of 5 random hexadecimal colors

// function hexToRgb(hex) {
//     // Remove the leading # if it's there
//     hex = hex.replace(/^#/, '');

//     // Parse the hexadecimal string into separate red, green, and blue values
//     let r = parseInt(hex.substring(0, 2), 16);
//     let g = parseInt(hex.substring(2, 4), 16);
//     let b = parseInt(hex.substring(4, 6), 16);

//     return { r, g, b };
//   }

// Example usage

//   for(let i = 0; i < 10; i++){
//     let string = `#FFA50${i}`
//     console.log(hexToRgb(string));
// }

// function example() {
//   // This implicitly becomes a global variable
//   const undeclaredVar = 'I am a global variable';
// }

// example();

// console.log(undeclaredVar); // Output: "I am a global variable"
// console.log(window.undeclaredVar);

// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// // Function scope
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   let value = false
// // block scope
//   if (true) {
//     // we can access from the function and outside the function but
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python'
//     let b = 20
//     let c = 30
//     let d = 40
//     value = !value
//     console.log(a, b, c, value) // Python 20 30 true
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b, value) // JavaScript 10 true
// }
// letsLearnScope()
// console.log(a, b)

// var fucntion scope
// let and const : blocked scope

// function abc() {
//   var num= 12;
//   {
//     var num= 25;
//     console.log(num);

//     {
//       var num = 30
//     }
//   }

//   console.log(num);
// }

// console.log(num);

// abc();

// const person = {
//   firstName: 'Asabeneh',
//   age: 250,
//   country: 'Finland',
//   city:'Helsinki',
//   skills: ['HTML', 'CSS', 'JS'],
//   title: 'teacher',
//   address: {
//     street: 'Heitamienkatu 16',
//     pobox: 2002,
//     city: 'Helsinki'
//   },
//   getPersonInfo: function() {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//   }
// }

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

// const copyPerson = Object.assign({}, person)
// console.log(copyPerson)

// const keys = Object.keys(copyPerson)
// console.log(keys);
// const values = Object.values(copyPerson)
// console.log(values);

// const entries = Object.entries(copyPerson)
// console.log(entries);

// console.log(copyPerson.hasOwnProperty('firstName'))

/// Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// const personAccount = {
//   firstName: "swapnil",
//   lastName: "shelke",
//   incomes: 10000,
//   expeses: undefined,

//   totalIncome: function () {},
//   totalExpense: function () {},

//   accountInfo: function () {},

//   addIncome: function () {},

//   addExpense: function () {},

//   accountBalance: function () {},
// };

// console.log(personAccount);

// // Imagine you are getting the above users collection from a MongoDB database. a.
// // Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

// const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
// ]

// const users = [
//   {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt:'08/01/2020 9:00 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt:'08/01/2020 9:30 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt:'08/01/2020 9:45 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt:'08/01/2020 9:50 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt:'08/01/2020 10:00 AM',
//       isLoggedIn: false
//   }
//   ];

// function signUp(){

// }

// const callback = (n) => {
//   return n ** 2
// }

// function cube(callback, n) {
//   return callback(n) * n
// }

// console.log(cube(callback, 4));

// const higherOrder = n => {
//   const doSomething = m => {
//     const doWhatEver = t => {
//       return 2 * n * m + t
//     }
//     return doWhatEver
//   }
//   return doSomething
// }

// console.log(higherOrder(2)(3)(10));

// const callback = (n) => {
//   return n ** 2;
// };

// function cube(callback, n) {
//   return callback(n) * n;
// }

// console.log(cube(callback, 5));

// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 0
//   arr.forEach(function(element) {
//     sum += element
//     return sum
//   })
// }

// console.log(sumArray(numbers));

// const cube= (n) =>{
//   const square= (n) => {
//     const number= (n) => {
//       return n;
//     }
//     return number(n)*n;
//   }
//   return square(n)*n;
// }
// console.log(cube(4));

// function sayHello() {
//   console.log('Hello')
// }

// setTimeout(sayHello, 2000);

// const numbers = [1, 2, 3, 4, 5,6]
// numbers.forEach(function(x, i){
//   console.log("elements:" + x + "index:" + i);
// });

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => {
//   element.toLocaleUpperCase();
// } )

// console.log(countries);

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]

// const square = countries.map(function(element) {
//     return element.toUpperCase()
// })
// console.log(square);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((x, currentValue) => {
//    for(let i = 0 ; i < 10 ; i++){
//      console.log(x, currentValue);
//    }
//     x + currentValue, 0}
//     console.log(x, currentValue)
//     );
// console.log(sum); // Output: 15

// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
// console.log(products.sort())

// const objArr = [
//     { name: 'Asabeneh', score: 95 },
//      { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
//   ]

// objArr.sort(function (a, b) {
//     if (a.key < b.key) return -1
//     if (a.key > b.key) return 1
//     return 0
//   })

//   // or

//   objArr.sort(function (a, b) {
//     if (a['key'] < b['key']) return -1
//     if (a['key'] > b['key']) return 1
//     return 0
//   })

//   const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyob', age: 100 },
//     { name: 'Elias', age: 22 },
//   ]
//   users.sort((a, b) => {
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
//   })
//   console.log(users)

// const numbers = [
//     {
//         name: "Swapnil",
//         score: 99
//     },

//     {
//         name: "Ritesh",
//         score: 88
//     },
//     {
//         name: "Sahil",
//         score: 77
//     },

// ]

// function above90(num) {
//     return  score ? acore > 90
// }

// console.log(numbers.map(above90));

// const scores = [85, 92, 78, 98, 88, 91];

// function above90(score){
//     return score > 90
// }

// const highScore = scores.filter(above90)

// console.log(highScore);

// const highScores = scores.reduce((acc, curr) => {
//     if(curr > 90) {
//         acc.push(curr);
//     }

//     return acc
// }, []);

// console.log(highScores);

// scores.forEach((ele) => {
//     console.log(ele);
// })

// Use map to create a new array by changing each country to uppercase in the countries array.
// const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini" ];

// const newCountries = countries.map((elements) => {
//        return elements.length
// })

// console.log(newCountries);

// const scores = [85, 92, 78, 98, 88, 91];

// const countries = ["Afghanistanland", "landAlbania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini" ];

// const newArray = countries.filter((ele) => {
//     return ele.startsWith("A")
// })

// console.log(newArray);

// const prices = [10, 20, null, 30, undefined, 40, NaN, 50, 'abc'];

// // Filter out only prices with values
// const validPrices = prices.filter(price => typeof price === 'number' && !isNaN(price));

// console.log(validPrices);
//  // Output: [10, 20, 30, 40, 50]

// getStrindLists
// array

// Use reduce to sum all the numbers in the numbers array.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
//   console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, currentIndex: ${currentIndex}`);
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

// Use some to check if some names' length greater than seven in names array

// const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

// const arr = names.some(name => name.length  > 6)

// const countries = ["Afghanistanland", "landAlbania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini" ];

// const arr = countries.every((ele) => {
//     return ele.includes('land')
// })

// console.log(arr);

// const numbers = [1, 2, 3, 4, 5];
// const index = numbers.findIndex(num => num > 3);
// console.log(index);

// const numbers = [1, 2, 3, 4, 5];
// const foundNumber = numbers.find(num => num > 3);
// console.log(foundNumber);
// // Output: 4 (the first number greater than 3)

// Use findIndex to find the position of the first country
// containing only six letters in the countries array

//  const countries = ["Afghanistanland", "Norway", "landAlbania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini" ];

// //  const firstCountry = countries.findIndex((element) => {
// //     return element.length > 6
// //  })

// //  console.log(firstCountry);

// const index = countries.findIndex((element) => {
//     return element === "Norway"
// })

// console.log(index);

// Find the total price of products by chaining two or more array iterators(eg.
// arr.map(callback).filter(callback).reduce(callback))

// const numbers = [1, 2, 3, 4, 5];

// // Use map to transform each element into its value
// const values = numbers.map(num => num);
// console.log(values);

// // Use reduce to calculate the total
// const total = values.reduce((acc, curr) => acc + curr);

// console.log(total);

// const products = [
//     { name: "Product 1", price: 10 },
//     { name: "Product 2", price: 20 },
//     { name: "Product 3", price: null },
//     { name: "Product 4", price: 30 },
//     { name: "Product 5", price: undefined },
//     { name: "Product 6", price: 40 },
//     { name: "Product 7", price: "abc" }
//   ];

//   const totalPrice = products
//     .map(product => product.price) // Extract prices
//     .filter(price => typeof price === 'number' && !isNaN(price)) // Remove invalid prices
//     .reduce((acc, curr) => acc + curr, 0); // Calculate total

//   console.log(totalPrice);

// Output: 100 (10 + 20 + 30 + 40)
//   console.log(isNaN('kgjujuner')); // true
//   console.log(isNaN('100')); // false

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // 1 3 5 7 9
// // filter odd numbers
// // add them

// const res = numbers.filter((element) => {
//     return element % 2;
// }).reduce((ele, curr) => {
//     return ele + curr;
// })

// console.log(res);

// const users = [
//     { fname: "John", lname: "Doe", age: 30 },
//     { fname: "Jane", lname: "Smith", age: 25 },
//     { fname: "Alice", lname: "Johnson", age: 35 },
//     { fname: "Bob", lname: "Brown", age: 40 }
//   ];

//   // fname lname

//   const names = users.filter((element) => {
//     console.log(element.fname + " " +  element.lname);
//   })

// Find the total price of products by chaining two or more array iterators(eg.
// arr.map(callback).filter(callback).reduce(callback))

// const products = [
//   { name: "Product 1", price: 10 },
//   { name: "Product 2", price: 20 },
//   { name: "Product 3", price: null },
//   { name: "Product 4", price: 30 },
//   { name: "Product 5", price: undefined },
//   { name: "Product 6", price: 40 },
//   { name: "Product 7", price: "abc" },
// ];

// const total = products.map((product) => {
//   return product.price;
// }).filter((el) => {
//   return typeof el === 'number'
// }).reduce((acc, curr) => {
//   return acc + curr
// })

// console.log(total);


// Find the sum of price of products using only reduce reduce(callback))

// const products = [
//   { name: "Product 1", price: 10 },
//   { name: "Product 2", price: 20 },
//   { name: "Product 3", price: null },
//   { name: "Product 4", price: 30 },
//   { name: "Product 5", price: undefined },
//   { name: "Product 6", price: 40 },
//   { name: "Product 7", price: "abc" },
// ];

// const totalPrice = products.reduce((acc, curr) => {
//   return acc + curr
// })

console.log(totalPrice);