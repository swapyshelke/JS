function quickSort(arr) {
    // Base case: array of 0 or 1 element is already sorted
    if (arr.length <= 1) return arr;

    // Choose the last element as pivot
    let pivot = arr[arr.length - 1];

    let left = [];   // elements smaller than pivot
    let right = [];  // elements greater than pivot

    // Partition step
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort left and right, then merge
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Test
console.log(quickSort([29, 10, 14, 37, 14]));
