const a = {
    name: "Swapnil",
    age: 22,
    city:"Pune"
}

let b = { ...a, name: "sachin" }

const { name, ...xyz } = a

console.log(xyz, b);
