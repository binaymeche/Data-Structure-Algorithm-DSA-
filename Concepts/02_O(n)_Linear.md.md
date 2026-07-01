## O(n) — Linear Time Complexity

### Definition

**O(n)** means the execution time of an algorithm grows **linearly** with the size of the input (`n`).

### Concept

As the number of input elements increases, the number of operations performed by the algorithm increases at approximately the same rate.

For example:

* 10 elements → about 10 operations
* 100 elements → about 100 operations
* 1,000 elements → about 1,000 operations

### Real-Life Example

Imagine you have a grocery list and want to find **milk**.

To find it, you may need to check each item one by one until you find it. If the list contains:

* 5 items → it takes only a few checks.
* 500 items → it may take many more checks.

The larger the list becomes, the longer the search takes. This is an example of **linear time complexity**, where the running time grows in direct proportion to the input size.

### JavaScript Example

```js
const fruits = ["Apple", "Banana", "Orange", "Mango"];

function findFruit(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findFruit(fruits, "Mango")); // 3
```

**Time Complexity:** `O(n)`

The loop may need to examine every element in the array before finding the target (or determining that it isn't present).

### Key Points

* Running time increases proportionally with the input size.
* A single loop over an array is usually **O(n)**.
* Linear search is a common example of an **O(n)** algorithm.
