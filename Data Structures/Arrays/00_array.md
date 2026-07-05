# Arrays (Data Structure)

## What is an Array?

An **array** is a data structure that stores an ordered collection of elements.

Each element is assigned an **index**, starting from `0`, allowing direct access to any element using its index.

Example:

```js
const fruits = ["Apple", "Banana", "Orange"];
```

| Index | Value  |
| ----: | ------ |
|     0 | Apple  |
|     1 | Banana |
|     2 | Orange |

---

## Characteristics

* Stores elements in order.
* Uses zero-based indexing.
* Allows fast access using an index.
* Can store values of any data type in JavaScript.

---

## Time Complexity

| Operation                       | Complexity |
| ------------------------------- | ---------- |
| Access (`arr[index]`)           | **O(1)**   |
| Search                          | **O(n)**   |
| Insert at End (`push`)          | **O(1)**   |
| Remove from End (`pop`)         | **O(1)**   |
| Insert at Beginning (`unshift`) | **O(n)**   |
| Remove from Beginning (`shift`) | **O(n)**   |
| Delete by Index                 | **O(n)**   |

---

## Custom Array Implementation

This implementation recreates some of JavaScript's built-in array methods to understand how arrays work internally.

### Methods Implemented

* `push()`
* `get()`
* `pop()`
* `shift()`
* `deleteByIndex()`

---

## Complexity Analysis

### push()

Adds an element to the end.

```text
Time Complexity: O(1)
```

---

### get(index)

Accesses an element by index.

```text
Time Complexity: O(1)
```

---

### pop()

Removes the last element.

```text
Time Complexity: O(1)
```

---

### shift()

Removes the first element and shifts every remaining element one position to the left.

```text
Time Complexity: O(n)
```

---

### deleteByIndex(index)

Removes an element at the specified index and shifts the remaining elements.

```text
Time Complexity: O(n)
```

---

## What I Learned

Building an array from scratch helped me understand:

* Why array indexing is O(1).
* Why removing or inserting at the beginning is slower.
* Why deleting from the middle requires shifting elements.
* How JavaScript arrays manage elements internally at a conceptual level.
