const users = [
  {
    name: "Swapnil",
  },

    { name: "John" },
  
    {
        name:"Swapnil"
    }
];

const user = users.find((user) => {
   return user.name === 'Swapnil'
})

console.log(user);
