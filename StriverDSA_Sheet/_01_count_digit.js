// given int N
// return number or digits in N

let N = 123456

let counter;

while(N > 0) {
    counter++;
    N %= 10;
}

console.log(counter);
