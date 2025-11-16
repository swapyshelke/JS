// 371 = 3*3*3 + 7*7*7 + 1*1*1 = 371
//     = 27 + 343 + 1

let num = 371;
let temp = num;
let lengthOfNum = num.toString().length;
let sum = 0;
let digit

while (temp > 0) {
    // 371 % 10 -> 1
     digit = temp % 10;
    sum += digit ** lengthOfNum; // giving the number power
    temp = parseInt(temp / 10);
}

if (sum == num) {
    console.log('number is armstrong');
} else {
    console.log('num is not armstrong');
    
}

