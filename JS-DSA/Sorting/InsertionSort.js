/*
Insertion Sort (Simple Explanation)

You pick an element (key).

Compare it with the elements on the left.

Shift bigger elements to the right.

Insert key at the correct sorted position.

You grow a sorted portion from left to right.

Time complexity:

Best: O(n) (already sorted)

Worst: O(n²)

*/





/*
INSERTION SORT DRY RUN
----------------------

Initial array: [29, 10, 14, 37, 14]

------------------------
PASS 1:
i = 1, key = 10
Compare key(10) with 29
29 > 10 → shift 29 to the right
Array becomes: [29, 29, 14, 37, 14]

Insert key at correct spot → index 0
After Pass 1 → [10, 29, 14, 37, 14]

------------------------
PASS 2:
i = 2, key = 14
Compare key(14) with 29
29 > 14 → shift 29
Array: [10, 29, 29, 37, 14]

Compare key(14) with 10
10 < 14 → stop shifting
Insert key at index 1

After Pass 2 → [10, 14, 29, 37, 14]

------------------------
PASS 3:
i = 3, key = 37
Compare 37 with 29 → already larger, no shift
After Pass 3 → [10, 14, 29, 37, 14]

------------------------
PASS 4:
i = 4, key = 14
Compare 14 with 37 → shift 37
Array: [10, 14, 29, 37, 37]

Compare key(14) with 29 → shift 29
Array: [10, 14, 29, 29, 37]

Compare key(14) with 14 → equal → stop shifting
Insert key at index 2

After Pass 4 → [10, 14, 14, 29, 37]

------------------------
FINAL SORTED ARRAY:
[10, 14, 14, 29, 37]
*/


function insertionSort(arr) {

    // Start from index 1 because index 0 is already sorted by default
    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];   // The value we want to insert
        let j = i - 1;      // Start comparing with the previous element

        // Shift all elements greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; 
            j--; // move left
        }

        // Insert the key at the correct sorted position
        arr[j + 1] = key;
    }

    return arr;
}

console.log(insertionSort([29, 10, 14, 37, 14]));




