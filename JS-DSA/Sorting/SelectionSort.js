// Array for dry run:
let arr = [29, 10, 14, 37, 14];

/*
SELECTION SORT DRY RUN (STEP BY STEP)
-------------------------------------

Initial array: [29, 10, 14, 37, 14]

PASS 1:
i = 0
Find minimum from index 0 to end:
  Compare 29 & 10 → 10 is smaller → minIndex = 1
  Compare 10 & 14 → 10 smaller → minIndex = 1
  Compare 10 & 37 → 10 smaller → minIndex = 1
  Compare 10 & 14 → 10 smaller → minIndex = 1
Swap arr[0] with arr[minIndex(1)]

After Pass 1 → [10, 29, 14, 37, 14]

PASS 2:
i = 1
Find minimum from index 1 to end:
  Compare 29 & 14 → 14 smaller → minIndex = 2
  Compare 14 & 37 → 14 smaller → minIndex = 2
  Compare 14 & 14 → equal → minIndex = 2
Swap arr[1] with arr[minIndex(2)]

After Pass 2 → [10, 14, 29, 37, 14]

PASS 3:
i = 2
Find minimum from index 2 to end:
  Compare 29 & 37 → 29 smaller → minIndex = 2
  Compare 29 & 14 → 14 smaller → minIndex = 4
Swap arr[2] with arr[minIndex(4)]

After Pass 3 → [10, 14, 14, 37, 29]

PASS 4:
i = 3
Find minimum from index 3 to end:
  Compare 37 & 29 → 29 smaller → minIndex = 4
Swap arr[3] with arr[minIndex(4)]

After Pass 4 → [10, 14, 14, 29, 37]

PASS 5:
i = 4 → no need, last element already sorted.

FINAL SORTED ARRAY:
[10, 14, 14, 29, 37]
*/



function selectionSort(arr) {
    // Outer loop runs for each position in the array
    for (let i = 0; i < arr.length - 1; i++) {

        // Assume current position has the minimum
        let minIndex = i;

        // Find the actual minimum in the remaining array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // found new minimum
            }
        }

        // Swap only if a new minimum was found
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([29, 10, 14, 37, 14]));
