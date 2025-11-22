
class User {
    constructor(name) {
        this.name = name 
    }

    sayHi() {
        console.log(` Hello ${this.name}`);
    }

    log() {
        console.log(typeof User);
        // user class is an actualy function
   }   
}

const user1 = new User("swapnil")

user1.sayHi()
user1.log()