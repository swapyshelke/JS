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

function login(){
    console.log('logged in completed');
}

login()