// factory function
// ->function which returns an object
// we dont have to use new keyword here


function createUser(name, age) {
    return {
        name, 
        age
    }

    /*
        {
            name:name,
            age:age
        }
        
        same as

        {
            name,
            age
        }
    */
}

const user1 = createUser("name1 ", 33)
const user2 = createUser("dfgm", 34)

console.log(user1, user2);


