// Object.assign()

// copies all properties of source object to another object

const target = {
    p: 1,
    q:2
}

const source = {
    a: 3,
    b:3
}

const returnObject = Object.assign(target, source)
console.log(returnObject);
