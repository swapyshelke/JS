// Function to find the missing number 
function findMissing(arr, N) {
    // N = 6
    let i;
    // i = undefined

    // Create an Array of size N 
    // and filled with 0 
    let temp = new Array(N).fill(0);
    // [0, 0, 0, 0, 0, 0]

    // If array element exist then 
    // set the frequency to 1 
    for (i = 0; i < N; i++) {
        // i = 0, 1, 2
        // 0 < 6 true
        temp[arr[i] - 1] = 1;
        // temp[0] = 1
        // temp[1] = 1 
        // temp[6] = 1 
        // temp[4] = 1 
        // temp[5] = 1 
        // temp[1] = 1 
    }

    let ans = 0;
    for (i = 0; i <= N; i++) {
        // i = 0, 1
        // N = 6
        if (temp[i] === 0)
            // 
            ans = i + 1;
    }
    console.log(ans);
}

// Driver code 
let arr = [1, 3, 7, 5, 6, 2];
let n = arr.length;
// n = 6

// Function call 
findMissing(arr, n);