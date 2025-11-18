// function palindrome(str) {
//     let revStr = ''

//     for (let i = str.length - 1; i >= 0; i--){
//         revStr += str[i]
//     }

//     return revStr === str
// }


// console.log(palindrome('aka'));
// console.log(palindrome('swapnil'));



function palindrome(str) {
    let leftIndex = 0;
    let rightIndex = str.length - 1

    while (leftIndex < rightIndex) {
        if (str[leftIndex] !== str[rightIndex]) {
            return false;
        } else {
            return true;
        }
    }
}


console.log(palindrome('aka'));
console.log(palindrome('swapnil'));


