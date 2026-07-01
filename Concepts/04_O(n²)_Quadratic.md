## O(n²) — Quadratic Time Complexity

### Definition

**O(n²)**, also known as **quadratic time complexity**, means the number of operations grows proportionally to the **square** of the input size (`n`).

As the input size increases, the work performed by the algorithm increases much faster than a linear algorithm.

### Real-World Scenario

Imagine you have a group of people, and you want every person to shake hands with every other person exactly once.

Each person must interact with every other person, so the total number of comparisons (or handshakes) grows rapidly as more people are added.

This is a classic example of **quadratic time complexity**.

### JavaScript Example

```js
const findPair = (arr) => {

  // O(n²)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }

  // O(n)
  for (let k = 0; k < arr.length; k++) {
    console.log("_________________", k);
  }
};

const nums = [1, 2, 3, 4, 5];
findPair(nums);
```

### Time Complexity Analysis

The nested loops generate every unique pair of elements.

```text
Outer loop  → n
Inner loop  → n

Total work  → n × n = n²
```

The second loop runs once through the array.

```text
O(n)
```

Therefore, the total time complexity is:

```text
O(n² + n)
```

When simplifying Big O, we keep only the **dominant term** because it has the greatest impact as the input size grows.

```text
O(n² + n)
      ↓
O(n²)
```

### Why do we remove `O(n)`?

Suppose `n = 10`:

```text
n² + n = 100 + 10 = 110
```

Suppose `n = 1,000`:

```text
n² + n = 1,000,000 + 1,000 = 1,001,000
```

As `n` becomes larger, the `n²` term grows much faster than the `n` term. The linear part becomes insignificant compared to the quadratic part.

That is why **`n²` is called the dominant term**, and `n` is considered a **non-dominant term**.

### Key Points

* Nested loops usually result in **O(n²)**.
* When combining complexities, keep the term that grows the fastest.
* `O(n² + n)` simplifies to **O(n²)** because the quadratic term dominates for large input sizes.
