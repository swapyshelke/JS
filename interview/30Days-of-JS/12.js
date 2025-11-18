// Promises


// leetcode solution
let addTwoPromises = async function(promise1, promise2){
  const [val1, val2] = await Promise.all([promise1, promise2])

  return val1 + val2
}




/*

// 1

const myPromise = new Promise(function(resolve, reject) {

  setTimeout(function(){
    console.log("async Task")
    resolve()
  }, 2000)
  
})

myPromise.then(function(){
  console.log("Promise resolved")
}

*/


/*

// 2

const myPromise = new Promise(function(resolve, reject) {

  let fileLoader = true
  if(fileLoader
 {
 resolve("file loaded")
}) else {
  reject("File not loaded")
}

myPromise.then(function(){
  console.log()
}).catch(error => console.log(error))

*/


/*

// more cleaned

new Promise((resolve, reject) => {
  let fileLoader = false;
  if(fileLoader){
    resolve("file loaded")
  } else {
  reject("File not found")
})

myPromise.then(value => console.log(value))
          .catch(error => console.log(error))

*/

/*

function fileLoader(){
  return new Promise((resolve, reject) => {
  let fileLoader = false;
  if(fileLoader){
    resolve("file loaded")
  } else {
  reject("File not found")
    })
  }
}

async function myFunction(){
  try{
    const value = await fileLoader();
    console.log(value);
  } catch(error){
    console.log(error)
  }
}

myFunction()


*/












