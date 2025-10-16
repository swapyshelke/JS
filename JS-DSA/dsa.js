function findMissingNumber(arr) {
    // arr = 1, 2, 5, 4, 6, 8, 7
    const n = arr.length + 1;
    // n = 7 + 1
    // n = 8
    const sumOfFirstN = (n * (n + 1)) / 2;
    // SubmitEvent =  36

    let sumOfArray = 0;
    for (let i = 0; i < n - 1; i++) {
        // i = 3, 4, 5, 6
        // consition = 8 - 1
        sumOfArray = sumOfArray + arr[i];
        // 1
        // sumOfArray = 1 + 2 = 3   
        // sumOfArray = 3 + 5 = 8   
        // sumOfArray = 8 + 4 = 12  
        // sumOfArray = 12 + 6 = 18  
        // sumOfArray = 18 + 8 = 26
        // sumOfArray = 26 + 7 = 33
    }

    let missingNumber = sumOfFirstN - sumOfArray;
    // missingNumber = 36 - 33 = 3

    return missingNumber;
}


// driver code
const arr = [1, 2, 5, 4, 6, 8, 7];
const missingNumber = findMissingNumber(arr);
console.log("Missing Number: ", missingNumber);