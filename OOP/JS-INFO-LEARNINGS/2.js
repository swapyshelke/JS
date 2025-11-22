//

class User {
    constructor(name) {
        this.name = name 
    }

    sayHii() {
        alert(this.name)
    }
}

let user1 = new User("swapnil")
user1.sayHii()