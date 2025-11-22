class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`hello ${this.name}`);
    }

    log1() {
        console.log(User === User.prototype.constructor);
    }

    log2() {
        console.log(User.prototype.sayHi);
    }

    log3() {
        console.log(Object.getOwnPropertyNames(User.prototype));
        
    }
}

const user1 = new User("swapnil")
user1.sayHii()
user1.log1()
user1.log2()
user1.log3()