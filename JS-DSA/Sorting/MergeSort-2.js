/*
MERGE SORT DRY RUN (FULL BREAKDOWN)
-----------------------------------

ARRAY: [29, 10, 14, 37, 14]

Step 1: Split into halves:
Left:  [29, 10, 14]
Right: [37, 14]

-----------------------------------
Sort Left: [29, 10, 14]

Split:
Left:  [29]
Right: [10, 14]

[29] is single → already sorted

Sort [10, 14]:
Split → [10] and [14]
Both single → sorted
Merge → [10, 14]

Now merge [29] and [10, 14]:
Compare 29 & 10 → 10 smaller → result: [10]
Compare 29 & 14 → 14 smaller → result: [10, 14]
Leftover from left: 29
Merged Left Side → [10, 14, 29]

-----------------------------------
Sort Right: [37, 14]

Split:
Left: [37]
Right: [14]
Both single → sorted

Merge them:
Compare 37 & 14 → 14 smaller → [14]
Leftover from left → 37
Right Side Sorted → [14, 37]

-----------------------------------
FINAL MERGE: Merge left & right sorted arrays

Left:  [10, 14, 29]
Right: [14, 37]

Compare 10 & 14 → 10 → result: [10]
Compare 14 & 14 → 14 → result: [10, 14]
Compare 29 & 14 → 14 → result: [10, 14, 14]
Compare 29 & 37 → 29 → result: [10, 14, 14, 29]
Leftover → 37

FINAL SORTED ARRAY:
[10, 14, 14, 29, 37]
*/


function mergeSort(arr) {
    // Base case: single element is already sorted
    if (arr.length <= 1) return arr;

    // Find the middle index
    let mid = Math.floor(arr.length / 2);

    // Divide array into left and right
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Compare and merge elements from both sides
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add leftover elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Testing
console.log(mergeSort([29, 10, 14, 37, 14]));
