// join all the element of array into a string
// array : myColor = ["red", "green", "white", "black"]
// output: "red, Green, white, black"

const arrayToString = (...elements) => {
 return    elements.toString()
}

const output = arrayToString(["red", "green", "white", "black"])
console.log(output);
