// rev str without reverse method


function revStr(str) {
    let revString = ''

    for (let i = str.length - 1; i >= 0;  i--){
        revString += str[i];
    }

    return revString
}

const ans = revStr("swapnil")
console.log(ans);


// =====================


// function revStr(str) {

//     const n = str.length;

//     const lastIndex = n -1
//     for (let i = 0; i < n; i++){
//         for (let j = lastIndex; j < n; j++){
//             if (str[i] == str[j]) {
//                return "Str is palindrome"              
//             } else {
//                 return "str is not palindrome"
//             }
//         }
//     }
    
    
// }

// const str1 = "hello"
// const str2 = "naman"

// const ans = revStr(str2)
//     console.log(ans);
    