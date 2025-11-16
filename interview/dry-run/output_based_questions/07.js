// difference b/w forEach and map

const arr = [1, 2, 3, 4, 5]

const newArr = arr.map((i) => {
    return i + 10    
})

console.log(newArr);


arr.forEach((i) => {
    console.log(i + 10);
})