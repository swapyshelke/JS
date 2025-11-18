// object methods

// non primitive value in JS -> obj, arr, fun

function createUSer(name, age) {
    return {
        name,
        age,
        company:"TechB Solution",
        greet() {
            console.log('hello there');
        },

        message: function () {
            console.log(`${this.name} worsk at ${this.company}`)
            
        }


    }
}

const user1 = createUSer("ss", 1)

console.log(user1.message());
