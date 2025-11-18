const users = [
    { name: "Swapnil" },
    { name: "Sahil" },
    { name: "Yogesh" }
];

const userIndex = users.findIndex((user) => {
    return user.name === "Swapnil"
})

console.log(userIndex);
