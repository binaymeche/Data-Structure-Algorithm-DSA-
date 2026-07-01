## O(log n) — Logarithmic Time Complexity

### Definition

**O(log n)**, also known as **logarithmic time complexity**, means that the algorithm reduces the search space by a constant factor (usually half) during each step.

As the input size increases, the number of operations grows very slowly.

This makes logarithmic algorithms extremely efficient for large datasets.

### Real-World Scenario

Imagine you're searching for a word in a dictionary.

Instead of reading every page one by one, you open the dictionary near the middle.

* If the word comes before that page, you discard the second half.
* If it comes after, you discard the first half.

You keep repeating this process until you find the word.

Each step eliminates **half of the remaining possibilities**, which is why the algorithm has **O(log n)** time complexity.

---

## Visual Explanation

Suppose there are **8 elements**:

```text
12345678
```

### Step 1

Split the array into two halves:

```text
1234 | 5678
```

If the target is in the second half, discard the first half.

Remaining elements:

```text
5678
```

### Step 2

Split again:

```text
56 | 78
```

If the target is in the first half:

```text
56
```

### Step 3

Split once more:

```text
5 | 6
```

Now only one element remains.

So it took **3 steps** to reduce **8 elements** to **1 element**.

---

## Why is it called `log₂(n)`?

The logarithm tells us **how many times we can divide the input by 2 until only one element remains**.

For example:

```text
log₂(8) = 3
```

because:

```text
8 → 4 → 2 → 1
```

It took **3 divisions**.

Another way to think about it is:

```text
2³ = 8
```

So:

```text
log₂(8) = 3
```

### More Examples

| Input Size (n) | Maximum Steps |
| -------------: | ------------: |
|              8 |             3 |
|             16 |             4 |
|             32 |             5 |
|             64 |             6 |
|          1,024 |            10 |
|      1,048,576 |            20 |

Notice that even when the input grows to more than **one million elements**, only about **20 steps** are needed.

### JavaScript Example (Binary Search)

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const numbers = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(numbers, 9)); // 4
```

### Key Points

* The input is reduced by half in each step.
* Binary Search is the most common example of **O(log n)**.
* The data must be **sorted** for Binary Search to work correctly.
* Logarithmic algorithms are much faster than linear algorithms on large datasets.
