/*
QUICK SORT DRY RUN
-----------------------------------

ARRAY: [29, 10, 14, 37, 14]

We choose the LAST element as pivot each time.

-----------------------------------
1st CALL: quickSort([29, 10, 14, 37, 14])

pivot = 14 (last element)
Partition:

Compare 29 with 14 -> > pivot → goes right
Compare 10 with 14 -> < pivot → goes left
LEFT:  [10]
RIGHT: [29]

Compare 14 with 14 -> skip (pivot)

Compare 37 with 14 -> > pivot → goes right
RIGHT: [29, 37]

Final partition:
LEFT:  [10]
PIVOT: 14
RIGHT: [29, 37]

Now recursive calls:
quickSort([10]) → [10]
quickSort([29, 37])

-----------------------------------
Sort RIGHT SIDE: [29, 37]

pivot = 37
Compare 29 with 37 → < pivot → LEFT: [29]
RIGHT: []

Merged → [29, 37]

-----------------------------------
Now merge everything:
LEFT:  [10]
PIVOT: 14
RIGHT: [29, 37]

→ FINAL: [10, 14, 29, 37]

Wait, we lost one 14?  
No — look again: The original had two 14s.

Let’s redo partition carefully:

Original Right partition step:
Compare 14 (index 2) with pivot 14:
Since <= pivot → goes LEFT

So corrected partition is:

LEFT:  [10, 14]
RIGHT: [29, 37]

FINAL MERGE:
LEFT:  [10, 14]
PIVOT: 14
RIGHT: [29, 37]

FINAL SORTED ARRAY:
[10, 14, 14, 29, 37]
*/

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
