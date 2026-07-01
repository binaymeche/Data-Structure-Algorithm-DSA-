## O(1) — Constant Time Complexity

### Definition

**O(1)**, also known as **constant time complexity**, means the execution time of an algorithm remains the same regardless of the size of the input (`n`).

Whether the input contains 10 elements or 10 million elements, the algorithm performs the operation in approximately the same number of steps.

### Real-World Scenario

Imagine you have a box with numbered compartments, and you know exactly which compartment contains the item you need.

Instead of searching through every compartment, you go directly to the correct one and retrieve the item immediately.

The time required is the same whether the box contains 10 compartments or 10,000 compartments. This is an example of **constant time complexity**.

### JavaScript Example

```js
const numbers = [1, 2, 3, 4, 5];

function getElement(arr, index) {
  return arr[index];
}

console.log(getElement(numbers, 3)); // 4
```

### Why is it O(1)?

The statement:

```js
arr[index]
```

directly accesses the element at the given index.

No loop or repeated search is needed, so the number of operations stays the same regardless of the array's size.

Whether the array contains:

* 5 elements
* 500 elements
* 5,000,000 elements

accessing `arr[3]` still takes one direct lookup.

### Key Points

* The running time does **not** depend on the input size.
* Array access by index is typically **O(1)**.
* Variables, simple assignments, and arithmetic operations are also generally **O(1)**.
