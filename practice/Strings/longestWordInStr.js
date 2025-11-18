const str = "hii im swapnil";

// Write a function to find longest word in str

const longestWord = (str) => {
    const words = str.split(" ");
    let longest = ""
   
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    
    return longest
    }


console.log(longestWord(str));
